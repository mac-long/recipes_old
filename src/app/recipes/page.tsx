import RecipeList from "@/components/recipes/recipe-list";
import { getAllRecipes } from "../lib/kysely";

export const metadata = {
  title: "Recipes | Super Sweet Recipes",
  description:
    "SSR is a super simple recipe blog that utilises ChatGPT to generate recipes and skips out on the 4 page story before getting to the instructions, try making some of these crazy good meals."
};

export default async function Recipes() {
  const recipes = await getAllRecipes();

  return (
    <main>
      <RecipeList
        title="Our recipes"
        description="Enjoy searching through our crazy assortment of cuisine from around the world."
        recipes={recipes}
      />
    </main>
  );
}
