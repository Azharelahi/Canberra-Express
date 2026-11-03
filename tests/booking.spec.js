import { test, expect } from "@playwright/test";

test("booking draft survives refresh and is emailed on confirmation", async ({ page }) => {
  await page.goto("/");

  const selects = page.locator("select");
  await selects.nth(0).selectOption("Canberra");
  await selects.nth(1).selectOption("Canberra Airport, ACT 2609");
  await selects.nth(2).selectOption("Sydney");
  await selects.nth(3).selectOption("Sydney CBD, NSW 2000");

  const dateInput = page.locator('input[type="date"]');
  const minDate = await dateInput.getAttribute("min");
  const [year, month, day] = minDate.split("-").map(Number);
  const pickupDate = new Date(Date.UTC(year, month - 1, day + 1))
    .toISOString()
    .slice(0, 10);
  await dateInput.fill(pickupDate);
  await selects.nth(4).selectOption("10:00");
  await selects.nth(5).selectOption("Comfort Car (Sedan 5 seater)");

  await expect
    .poll(() =>
      page.evaluate(() => JSON.parse(localStorage.getItem("bookingDraft"))?.pickCity)
    )
    .toBe("Canberra");

  await page.reload();
  await expect(selects.nth(0)).toHaveValue("Canberra");
  await expect(selects.nth(1)).toHaveValue("Canberra Airport, ACT 2609");
  await expect(selects.nth(2)).toHaveValue("Sydney");
  await expect(selects.nth(3)).toHaveValue("Sydney CBD, NSW 2000");
  await expect(dateInput).toHaveValue(pickupDate);

  await page.route("**/api/bookings", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ message: "Booking emails sent successfully." }),
    });
  });

  await Promise.all([
    page.waitForURL("**/booking-page**"),
    page.getByRole("button", { name: "Confirm Booking" }).click(),
  ]);
  await page.getByRole("button", { name: "Proceed and Book via Site" }).click();
  await page.getByPlaceholder("Your Name").fill("Alex Example");
  await page.getByPlaceholder("Your Email").fill("alex@example.com");
  await page.getByPlaceholder("Your Phone Number").fill("+61400000000");

  await expect
    .poll(() =>
      page.evaluate(() => JSON.parse(localStorage.getItem("bookingDraft"))?.clientEmail)
    )
    .toBe("alex@example.com");

  await page.reload();
  await page.getByRole("button", { name: "Proceed and Book via Site" }).click();
  await expect(page.getByPlaceholder("Your Name")).toHaveValue("Alex Example");
  await expect(page.getByPlaceholder("Your Email")).toHaveValue("alex@example.com");
  await expect(page.getByPlaceholder("Your Phone Number")).toHaveValue("+61400000000");

  const bookingResponse = page.waitForResponse("**/api/bookings");
  await page.getByRole("button", { name: "Send Booking Request" }).click();
  const response = await bookingResponse;
  expect(response.ok()).toBeTruthy();

  const sentBooking = response.request().postDataJSON();
  expect(sentBooking).toMatchObject({
    clientName: "Alex Example",
    clientEmail: "alex@example.com",
    clientPhone: "+61400000000",
    pickAddress: "Canberra — Canberra Airport, ACT 2609",
    dropAddress: "Sydney — Sydney CBD, NSW 2000",
    pickupDate,
    pickupTime: "10:00",
    carName: "Comfort Car (Sedan 5 seater)",
  });
  await expect(page.getByText("Thank you for your booking!")).toBeVisible();
  await expect.poll(() => page.evaluate(() => localStorage.getItem("bookingDraft"))).toBeNull();
});
