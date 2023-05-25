import { createKysely } from "@vercel/postgres-kysely";

export const db = createKysely<any>();

export const getRecipes = () =>
  db.selectFrom("recipes").selectAll().orderBy("id", "desc").execute();

export const newRecipe = (values: any) =>
  db.insertInto("recipes").values(values).execute();
