# OZLYFT Web

The customer-facing OZLYFT website and booking email flow, built with the Next.js App Router.

## Requirements

- Node.js 20.9 or newer
- npm

## Setup

```bash
npm ci
Copy-Item .env.example .env.local
npm run dev
```

Set the SMTP and booking-recipient values in `.env.local` to enable booking
emails. Booking drafts are kept only in the visitor's browser `localStorage`
until the booking email request succeeds; the app does not save bookings to a
database. Never commit `.env.local` or production credentials.

| Variable | Purpose |
| --- | --- |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD` | SMTP server credentials |
| `BOOKING_EMAIL_FROM` | Optional sender address |
| `BOOKING_ADMIN_EMAIL` | Admin recipient of booking notifications |
| `BOOKING_ADMIN_CC` | Optional additional admin recipients |

Use the development server at [http://localhost:3000](http://localhost:3000).

## Commands

```bash
npm run dev       # Start the local development server
npm run lint      # Run Next.js ESLint checks
npm run test:e2e  # Run Playwright end-to-end tests
npm run build     # Create an optimized production build
npm run start     # Serve the production build
```

The Playwright configuration starts the development server automatically. Set
`CI=true` to enable CI retry and worker behavior.

## Project layout

```text
public/                   Static files served from the site root
src/
  app/                    App Router pages, layouts, and API route adapters
  components/             Shared UI used by multiple features
    layout/               Site navigation, footer, and layout components
  features/               Self-contained product areas
    booking/
      components/         Booking forms and booking flow UI
      lib/                Booking-only browser helpers and domain logic
      server/             Booking-only server services
    home/
      components/         Homepage-specific sections
  lib/                    Small utilities shared across features
tests/                    Playwright end-to-end tests
```

Keep URL and route-specific files in `src/app`; these should stay thin and
delegate feature behavior to `src/features`. Put reusable site-wide UI in
`src/components`, and reusable helpers with no single feature owner in
`src/lib`. Keep each feature's components and feature-specific logic together
under `src/features/<feature>` (for example, auth, analytics, or location can
each get their own folder when added). Static assets belong in `public/`.

When adding a feature, start with only the folders it needs. Add `components/`
for its UI, `lib/` for browser-safe helpers and domain logic, and `server/` for
server-only integrations. Keep API route handlers in `src/app/api` and have
them call the owning feature's server code. Shared code can move to `src/lib`
or `src/components` once multiple features use it.

## Production

Configure the SMTP and recipient variables above in the deployment platform.
The booking email endpoint sends a confirmation to the client and a notification
to the configured admin recipient.
