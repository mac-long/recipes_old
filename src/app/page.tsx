import Features from "@/components/home/features";
import Hero from "@/components/home/hero";
import Stats from "@/components/home/stats";
import RecipeList from "@/components/layout/recipe-list";
import { sql } from "@vercel/postgres";

export default async function Home() {
  const { rows } =
    await sql`SELECT * FROM recipes ORDER BY CREATED_ON DESC LIMIT 3`;

  return (
    <main>
      <Hero />
      <Features />
      <Stats />
      <RecipeList
        title="Our latest recipes"
        description="Enjoy trying out the most recent culinary adventures we have shared."
        recipes={rows}
      />
    </main>
  );
}
