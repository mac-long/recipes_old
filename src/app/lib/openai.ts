import { Configuration, OpenAIApi } from "openai";

export const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.GPT_KEY,
  })
);

export const generateRecipe = async (previous: object[]) => {
  const response: any = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Generate a random recipe in a JSON object like this example: {"image_url": "string", "title": "string", "summary": "string", "cooking_time": "string", "ingredients": ["string", "string1"], "instructions": ["string", "string1"] "meal": "string", "cuisine": "string"} The meals can be: Breakfast, Lunch, Snack, Dinner, Dessert, make sure they are stored in strings. Make sure all the recipes are vegan. Fetch the imageUrl from unsplash. Keep the response all one one line with no escaped new line characters. Never set the cuisine to 'vegan', use the origin of the meal. Ensure all meals are vegan. Make sure the Cuisine and Meal are always just one option and don't contain and /'s.`,
    temperature: 1,
    max_tokens: 2048,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0,
  });
  return JSON.parse(response.data.choices[0].text);
};
