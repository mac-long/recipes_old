import Heading from "@/components/recipes/header";
import RecipeList from "@/components/recipes/recipe-list";
import { Suspense } from "react";
import { getAllRecipes } from "../lib/kysely";
import Loading from "./loading";

export const metadata = {
  title: "Recipes | Super Sweet Recipes",
  description:
    "SSR is a super simple recipe blog that utilises ChatGPT to generate recipes and skips out on the 4 page story before getting to the instructions, try making some of these crazy good meals."
};

export default async function Recipes() {
  const recipes = await getAllRecipes();

  return (
    <div className="py-16 bg-white px-6 mx-auto max-w-7xl lg:px-8">
      <Heading
        title="Our recipes"
        description="Enjoy searching through our crazy assortment of cuisine from around the world."
      />
      <Suspense fallback={<Loading />}>
        <RecipeList recipes={recipes} />
      </Suspense>
    </div>
  );
}
