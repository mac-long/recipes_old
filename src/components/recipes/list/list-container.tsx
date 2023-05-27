"use client";

import Filters from "../filters/filters";
import RecipesHeading from "./heading";
import RecipeList from "./list";

export default function RecipeListContainer({recipes, meals, cuisines}: any) {
  return (
    <>
      <RecipesHeading
        title="Our recipes."
        description="Enjoy searching through our crazy assortment of cuisine from around the world."
      >
        <Filters meals={["All", ...meals]} cuisines={["All", ...cuisines]} />
      </RecipesHeading>
      <RecipeList
        recipes={recipes
          .filter((recipe: any) => recipe.meal === "Dinner")
          .filter((recipe: any) => recipe.cuisine === "American")}
      />
    </>
  );
}
