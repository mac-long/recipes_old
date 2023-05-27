import { createKysely } from '@vercel/postgres-kysely';

export const db = createKysely<any>();
const { count } = db.fn;

export const newRecipe = (data: any) =>
  db.insertInto('recipes').values(data).execute();

export const getAllRecipes = async () =>
  await db.selectFrom('recipes').selectAll().orderBy('id', 'desc').execute();

export const getLatestRecipes = () =>
  db.selectFrom('recipes').selectAll().orderBy('id', 'desc').limit(3).execute();

export const getRecipeCount = () =>
  db.selectFrom('recipes').select(count('id').as('num_recipes')).execute();

export const getRecipesByMeal = (meal: string) =>
  db
    .selectFrom('recipes')
    .selectAll()
    .where('meal', '=', meal)
    .orderBy('id', 'desc')
    .execute();

export const getRecipeById = (id: number) =>
  db.selectFrom('recipes').selectAll().where('id', '=', id).limit(1).execute();

export const getRecipeFilterCategories = async () => {
  let cuisines: string[] = [];
  let meals: string[] = [];

  await db
    .selectFrom('recipes')
    .select(['cuisine', 'meal'])
    .execute()
    .then((res) => {
      for (const item of res) {
        cuisines.push(item['cuisine']);
        meals.push(item['meal']);
      }
    });

  return { cuisines: [...new Set(cuisines)], meals: [...new Set(meals)] };
};

export const newEmail = (data: any) =>
  db.insertInto('newsletter').values(data).execute();

export const getAllEmails = () =>
  db.selectFrom('newsletter').selectAll().execute();
