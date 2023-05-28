"use client";
import { useEffect, useState } from "react";
import Filters from "../filters/Filters";
import RecipesHeading from "./Heading";
import RecipeList from "./RecipeList";

export default function RecipeListContainer({
	recipesData,
	meals,
	cuisines,
}: any) {
	const [recipes, setRecipes] = useState<any>(recipesData);
	const [query, setQuery] = useState<string>("");
	const [filters, setFilters] = useState<any>({
		cuisine: "All",
		meal: "All",
	});

	useEffect(() => {
		let newRecipes = recipesData;

		if (filters.cuisine !== "All") {
			newRecipes = newRecipes.filter(
				(recipe: any) => recipe.cuisine === filters.cuisine,
			);
		}

		if (filters.meal !== "All") {
			newRecipes = newRecipes.filter(
				(recipe: any) => recipe.meal === filters.meal,
			);
		}

		if (query.length > 0) {
			newRecipes = newRecipes.filter((recipe: any) =>
				recipe.title.toLowerCase().includes(query.toLowerCase()),
			);
		}

		setRecipes(newRecipes);
	}, [query, recipesData, filters, setRecipes]);

	return (
		<>
			<RecipesHeading
				title="Our recipes."
				description="Enjoy searching through our crazy assortment of cuisine from around the world."
			>
				<Filters
					query={query}
					setQuery={setQuery}
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
