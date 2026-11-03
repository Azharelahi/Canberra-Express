export const BOOKING_DRAFT_KEY = "bookingDraft";

export function readBookingDraft() {
  const saved = window.localStorage.getItem(BOOKING_DRAFT_KEY);
  if (!saved) return {};

  const draft = JSON.parse(saved);
  if (!draft || typeof draft !== "object" || Array.isArray(draft)) {
    throw new Error("Saved booking details are invalid.");
  }

  return draft;
}

export function saveBookingDraft(draft) {
  window.localStorage.setItem(BOOKING_DRAFT_KEY, JSON.stringify(draft));
}

export function clearBookingDraft() {
  window.localStorage.removeItem(BOOKING_DRAFT_KEY);
}
