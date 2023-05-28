import { db, newRecipe } from "@/app/lib/kysely";
import { openai } from "@/app/lib/openai";
import { NextResponse } from "next/server";

export async function GET() {
	const recipes = await db.selectFrom("recipes").select("title").execute();
	const response: any = await openai.createCompletion({
		model: "text-davinci-003",
		prompt: `Generate a random recipe in a JSON object like this example: {"title": "string", "summary": "string", "cooking_time": "string", "ingredients": ["string", "string1"], "instructions": ["string", "string1"] "meal": "string", "cuisine": "string"} The meals can be: Breakfast, Lunch, Snack, Dinner, Dessert, make sure they are stored in strings. Make sure all the recipes are vegan. Ensure there are no html tags in any of the instructions. Keep the response all one one line with no escaped new line characters. Don't use 'Vegan' as the cuisine use the country of origin. The summary should be 64-72 characters.`,
		temperature: 1,
		max_tokens: 2048,
		top_p: 1,
		frequency_penalty: 0.5,
		presence_penalty: 0,
	});

	const recipeJson = JSON.parse(response.data.choices[0].text);
	const recipeImage = await fetch(
		`https://api.unsplash.com/photos/random?query='${recipeJson.title}'&client_id=IVuqCPp50fkkZ4Cx3QX5SsONLZguKnjVUFE2UC2lP-Y`,
	).then((res) => res.json());

	await newRecipe({
		...recipeJson,
		image_url: recipeImage.urls.raw,
		photographer_name: recipeImage.user.name,
		photographer_url: recipeImage.user.links.html,
	});

	return NextResponse.json({
		ok: true,
		recipes: {
			all: recipes,
			new: {
				...recipeJson,
				image_url: recipeImage.urls.raw,
				photographer_name: recipeImage.user.name,
				photographer_url: recipeImage.user.links.html,
			},
		},
	});
}
