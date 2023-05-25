import { createKysely } from "@vercel/postgres-kysely";

export const db = createKysely<any>();

export const getAllRecipes = () =>
  db.selectFrom("recipes").selectAll().orderBy("id", "desc").execute();

export const getLatestRecipes = () =>
  db.selectFrom("recipes").selectAll().orderBy("id", "desc").limit(3).execute();

export const newRecipe = (values: any) =>
  db.insertInto("recipes").values(values).execute();
