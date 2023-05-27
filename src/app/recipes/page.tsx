import RecipeListContainer from "@/components/recipes/container";
import Filters from "@/components/recipes/filters/filters";
import RecipesHeading from "@/components/recipes/heading";
import RecipeList from "@/components/recipes/list";
import {signal} from "@preact/signals";
import {getAllRecipes, getRecipeFilterCategories} from "../lib/kysely";

export const metadata = {
  title: "Recipes | Super Sweet Recipes",
  description:
    "SSR is a super simple recipe blog that utilises ChatGPT to generate recipes and skips out on the 4 page story before getting to the instructions, try making some of these crazy good meals."
};

export default async function Recipes() {
  const recipes = await getAllRecipes();
  const {meals, cuisines} = await getRecipeFilterCategories();
  const currentFilter = signal({
    meal: null,
    cuisine: null
  });

  return (
    <>
      <RecipeListContainer>
        <RecipesHeading
          title="Our recipes."
          description="Enjoy searching through our crazy assortment of cuisine from around the world."
        >
          <Filters current={currentFilter} meals={meals} cuisines={cuisines} />
        </RecipesHeading>
        <RecipeList recipes={recipes} />
      </RecipeListContainer>
    </>
  );
}
