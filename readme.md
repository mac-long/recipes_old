# Super Simple Recipes

SSR is a super simple recipe blog that utilises ChatGPT to generate recipes and skips out on the 4 page story before getting to the instructions, try making some of these crazy good meals.

**Get Cooking.**

## Sweet Links

- [Main Site](https://recipes-sand.vercel.app)
- [Storybook](https://6472adaed790cead3eb3857e-qkvabqvamz.chromatic.com)

## Key Development Notes

- Kysely interfaces beautifully with the Vercel Postgres creating simple dot notated typesafe SQL querys.
- Husky will Format, Lint and run all tests before commits to ensure only good code is pushed to the remote.
- Nodemailer utilises a gmail application password to send out emails via Vercel's cron functions.
- The OpenAI prompt is carefully crafted to ensure a good JSON response each time.
- Sentry provides error tracking and logging for detailed reports on what went wrong.
- Typescript keeps developers from making little mistakes regulary, saving lots of time in the long run.
- Storybook is a great way to view your components and build them in isolation.
- Chromatic allows for automated testing and ui review. Link stories to Figma components.
- GitHub Actions runs some CI scripts to ensure code is up to scratch.
- Rome for Linting and Formatting. It's super quick, see the table below.

## Rome vs. ESLint & Prettier.

Here you can see Rome compared to ESLint for linting and Prettier for formatting. The script ran formatting and linting on `57` files.

The numbers correlate to: `Time Taken` / `CPU Usage`.

### Linting

|       | **ESLint**       | **Rome**         |
| ----- | ---------------- | ---------------- |
| Run 1 | `1.28s` / `126%` | `0.28s` / `106%` |
| Run 2 | `1.22s` / `139%` | `0.27s` / `108%` |
| Run 3 | `1.23s` / `138%` | `0.27s` / `107%` |
| Run 4 | `1.22s` / `139%` | `0.27s` / `108%` |
| Run 5 | `1.23s` / `138%` | `0.29s` / `106%` |

### Formatting

|       | **Prettier**     | **Rome**         |
| ----- | ---------------- | ---------------- |
| Run 1 | `3.27s` / `145%` | `0.05s` / `106%` |
| Run 2 | `3.21s` / `145%` | `0.05s` / `108%` |
| Run 3 | `3.27s` / `145%` | `0.05s` / `107%` |
| Run 4 | `3.27s` / `144%` | `0.05s` / `108%` |
| Run 5 | `2.95s` / `150%` | `0.05s` / `106%` |

You can run these tests yourself with this super quick little shell script written in zsh, just replace `{script}`. e.g. `rome check --write`.

```shell
for i in `seq 1 5`
do
  time {script}
done
```

> ❗️**NOTE**: Make sure to add `'!.next'` when running Prettier
> This is as you don't generally format build output as it's not commited.
> Example: `prettier --write . '!.next'`.

## Notes For Next App

- Might be a good idea to setup all the testing / automation at the start to ensure bets dev experience. Storybook, CI + Testing etc.

## Tools

- Next.js
- TailwindCSS
- Kysely
- Vercel Postgres
- Nodemailer
- OpenAI
- Storybook
- Chromatic
- GitHub Actions.
- Typescript
- Sentry
- Rome

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
- [x] Add some fancy animations. Make numbers count up to value.
- [x] Add share options [SMS, Twitter, Facebook, Copy Link and Email] to recipe pages.
- [x] Split App into Components.
- [x] Setup Storybook & Chromatic.
- [x] Setup Testing.
- [x] Setup Rome Tools.
- [ ] Add Stories, Unit Tests (for simple functions data mutation), E2E Tests (for canvas based user interaction) and Types.
- [ ] [Structure Storybook](https://storybook.js.org/blog/structuring-your-storybook/).
- [ ] Add Sanity CMS behind ` /admin`, add secondary language.
- [ ] Add push notifications to browser for when new posts come out.
- [ ] Add login / signup, favourites and comments. Make sure to add a banner if email is unverified. [Clerk](https://clerk.com).
- [ ] Setup GitHub Actions: Chromatic, Branch Protection, Code Coverage.
- [ ] Fix Deployment Errors
- [ ] Optimise: Try using Signals to replace State. Page Speed Insights.
- [ ] Add a Dark Mode.
