# Super Simple Recipes

SSR is a super simple recipe blog that utilises ChatGPT to generate recipes and skips out on the 4 page story before getting to the instructions, try making some of these crazy good meals.

**Get Cooking.**

## Todo List

- [x] Fix desktop view recipe list.
- [x] Add cron function to generate a new recipe every day, make sure to send chatgpt to current json object of recipes to ensure it doesn't create duplicates.
- [x] Add Newsletter Signup, Store Emails in Table, Cron Function on Monday's that takes the most recent 5 recipes and sends to all users in mailing list.
- [ ] Add login/signup, favourites and comments.
- [ ] Add filters for cuisine and meal.
- [ ] Dynamic Metadata Image and Title.
- [ ] Custom `loading.js`, `not-found.js` and `error.js`.
- [ ] Split App into Components.
- [ ] Add TypeScript types for everything.
- [ ] Add Storybook for all components and pages.
- [ ] Add unit tests for everything.
- [ ] Move styles to `global.css` where possible to avoid repeat code.
- [ ] Add Husky for commit messages, formatting and linting.
- [ ] Add push notifications to browser for when new posts come out.
- [ ] Think about a more modern version of a newsletter that doesn't rely on a phone number.
