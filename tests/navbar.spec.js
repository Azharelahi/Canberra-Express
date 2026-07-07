import { test, expect } from "@playwright/test";

test("About Us navigation works", async ({ page }) => {
  await page.goto("http://localhost:3000");

  // target ONLY navbar (not footer/mobile duplicates)
  const aboutUs = page
    .locator("nav")
    .getByRole("link", { name: "About Us" })
    .first();

  await expect(aboutUs).toBeVisible();

  // IMPORTANT: wait for navigation BEFORE click
  await Promise.all([
    page.waitForURL("**/about-us"),
    aboutUs.click(),
  ]);

  await expect(page).toHaveURL(/about-us/);
});