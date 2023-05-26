# Super Simple Recipes

SSR is a super simple recipe blog that utilises ChatGPT to generate recipes and skips out on the 4 page story before getting to the instructions, try making some of these crazy good meals.

**Get Cooking.**

## Tools

- Next.js
- TailwindCSS
- Kysely
- Vercel Postgres
- Nodemailer
- OpenAI
- Typescript
-
- ESLint & Prettier

## Todo List

- [x] Fix desktop view recipe list.
- [x] Add cron function to generate a new recipe every day, make sure to send chatgpt to current json object of recipes to ensure it doesn't create duplicates.
- [x] Add Newsletter Signup, Store Emails in Table, Cron Function on Monday's that takes the most recent 5 recipes and sends to all users in mailing list.
- [ ] Dynamic Metadata Image and Title.
- [ ] Custom `loading.js`, `not-found.js` and `error.js`.
- [ ] Add filters for cuisine and meal.
- [ ] Update Kysely to use Code Gen.
- [ ] Add Sanity CMS behind `/admin` locked off unless signed in as admin, enable live editing.
- [ ] Split App into Components.
- [ ] Move styles to `global.css` where possible to avoid repeat code.
- [ ] Add Storybook for all components and pages.
- [ ] Add Husky for commit messages, formatting and linting.
- [ ] Add login/signup, favourites and comments.
- [ ] Add unit tests for everything.
- [ ] Add TypeScript types for everything.
- [ ] Optimise.
- [ ] Add push notifications to browser for when new posts come out.

## Issues

- [ ] Figure out why cards have weird space on load.
