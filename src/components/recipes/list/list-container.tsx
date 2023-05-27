"use client";
import {useState} from "react";
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

  return (
    <>
      <RecipesHeading
        title="Our recipes."
        description="Enjoy searching through our crazy assortment of cuisine from around the world."
      >
        {JSON.stringify(filters)}
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
