# Super Simple Recipes

SSR is a super simple recipe blog that utilises ChatGPT to generate recipes and skips out on the 4 page story before getting to the instructions, try making some of these crazy good meals.

**Get Cooking.**

## Key Development Notes

- Kysely interfaces beautifully with the Vercel Postgres creating simple dot notated typesafe SQL querys.
- Husky will Format, Lint and run all tests before commits to ensure only good code is pushed to the remote.
- Nodemailer utilises a gmail application password to send out emails via Vercel's cron functions.
- The OpenAI prompt is carefully crafted to ensure a good JSON response each time.
- Sentry provides error tracking and logging for detailed reports on what went wrong.
- Typescript keeps developers from making little mistakes regulary, saving lots of time in the long run.

## Tools

- Next.js
- TailwindCSS
- Kysely
- Vercel Postgres
- Nodemailer
- OpenAI
- Typescript
- Sentry
- ESLint & Prettier

## Todo List

- [x] Fix desktop view recipe list.
- [x] Add cron function to generate a new recipe every day, make sure to send chatgpt to current json object of recipes to ensure it doesn't create duplicates.
- [x] Add Newsletter Signup, Store Emails in Table, Cron Function on Monday's that takes the most recent 5 recipes and sends to all users in mailing list.
- [x] Dynamic Metadata Image and Title.
- [x] Custom `loading.tsx`, `error.tsx` and `not-found.tsx`.
- [x] Setup Sentry.
- [x] Add filters for cuisine and meal. Find a way to open the pages with chosen meal or cuisine.
- [x] Add a search bar to recipes page.
- [x] Add Husky for commit messages, formatting and linting.
- [ ] Add some fancy animations. Make numbers count up to value.
- [ ] Add share options [SMS, Twitter, Facebook, Copy Link and Email] to recipe pages.
- [ ] Split App into Components.
- [ ] Add Storybook for all components and pages.
- [ ] Move styles to `global.css` where possible to avoid repeat code.
- [ ] Add tests for everything. Unit and E2E. Make sure to add a husky hook for testing.
- [ ] Add TypeScript types for everything.
- [ ] Add login/signup, favourites and comments. Make sure to add a banner if email is unverified.
- [ ] Optimise: Try using Signals to replace State. Page Speed Insights.
- [ ] Add push notifications to browser for when new posts come out.
- [ ] Add Sanity CMS behind `/admin` enable live editing [NOTE: This requires an Enterprise account]
