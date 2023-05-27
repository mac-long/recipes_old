"use client";
import {useEffect, useState} from "react";
import Filters from "../filters/filters";
import RecipesHeading from "./heading";
import RecipeList from "./list";

export default function RecipeListContainer({
  recipesData,
  meals,
  cuisines
}: any) {
  const [recipes, setRecipes] = useState<any>(recipesData);
  const [filters, setFilters] = useState<any>({
    cuisine: "All",
    meal: "All"
  });

  useEffect(() => {
    let newRecipes = recipesData;

    if (filters.cuisines !== "All") {
      newRecipes = newRecipes.filter(
        (recipe: any) => recipe.cuisine === filters.cuisine
      );
    }

    if (filters.meal !== "All") {
      newRecipes = newRecipes.filter(
        (recipe: any) => recipe.meal === filters.meal
      );
    }

    setRecipes(newRecipes);
  }, [recipesData, filters, setRecipes]);

  return (
    <>
      <RecipesHeading
        title="Our recipes."
        description="Enjoy searching through our crazy assortment of cuisine from around the world."
      >
        <Filters
          filters={filters}
          setFilters={setFilters}
          recipes={recipes}
          setRecipes={setRecipes}
          recipesData={recipesData}
          meals={["All", ...meals]}
          cuisines={["All", ...cuisines]}
        />
      </RecipesHeading>
      <RecipeList recipes={recipes} />
    </>
  );
}
