import { createKysely } from "@vercel/postgres-kysely";

export const db = createKysely<any>();
const { count } = db.fn;

export const newRecipe = (data: any) =>
	db.insertInto("recipes").values(data).execute();

export const getAllRecipes = async () =>
	await db.selectFrom("recipes").selectAll().orderBy("id", "desc").execute();

export const getLatestRecipes = () =>
	db.selectFrom("recipes").selectAll().orderBy("id", "desc").limit(3).execute();

export const getRecipeCount = () =>
	db.selectFrom("recipes").select(count("id").as("num_recipes")).execute();

export const getRecipesByMeal = (meal: string) =>
	db
		.selectFrom("recipes")
		.selectAll()
		.where("meal", "=", meal)
		.orderBy("id", "desc")
		.execute();

export const getRecipeById = (id: number) =>
	db.selectFrom("recipes").selectAll().where("id", "=", id).limit(1).execute();

export const newEmail = (data: any) =>
	db.insertInto("newsletter").values(data).execute();

export const getAllEmails = () =>
	db.selectFrom("newsletter").selectAll().execute();
