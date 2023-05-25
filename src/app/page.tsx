import Features from "@/components/home/features";
import Hero from "@/components/home/hero";
import Stats from "@/components/home/stats";
import RecipeList from "@/components/recipes/recipe-list";
import { getAllRecipes } from "./lib/kysely";

export default async function Home() {
  const latestRecipes = await getAllRecipes();

  return (
    <main>
      <Hero />
      <Features />
      <Stats />
      <RecipeList
        title="Our latest recipes"
        description="Enjoy trying out the most recent culinary adventures we have shared."
        recipes={latestRecipes}
      />
    </main>
  );
}
