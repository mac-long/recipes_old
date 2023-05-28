import { db, newRecipe } from "@/app/lib/kysely";
import { openai } from "@/app/lib/openai";
import { NextResponse } from "next/server";

const randomAiOrHumanImage = async (prompt: string) => {
	let image;
	if (Math.random() < 0.5) {
		const response = await openai.createImage({
			prompt: prompt,
			n: 1,
			size: "1024x1024",
		});

		image = {
			image_url: response.data.data[0].url,
		};
	} else {
		const response = await fetch(
			`https://api.unsplash.com/photos/random?query='${prompt}'&client_id=${process.env.UNSPLASH_ID}`,
		).then((res) => res.json());

		image = {
			image_url: response.urls.raw,
			photographer_name: response.user.name,
			photographer_url: response.user.links.html,
		};
	}

	return image;
};

export async function GET() {
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
	const recipeImage = await randomAiOrHumanImage(recipeJson.title);

	await newRecipe({
		...recipeJson,
		...recipeImage,
	});

	return NextResponse.json({
		ok: true,
		newRecipe: {
			...recipeJson,
			...recipeImage,
		},
	});
}
