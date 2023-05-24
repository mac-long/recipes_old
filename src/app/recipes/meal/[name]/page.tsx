import RecipeList from "@/components/recipes/recipe-list";
import { sql } from "@vercel/postgres";

export const metadata = {
  title: "Recipes | Super Sweet Recipes",
  description:
    "SSR is a super simple recipe blog that utilises ChatGPT to generate recipes using various prompts, try making some of these crazy good meals. You can also sign in, like and comment on recipes and save them to favourites.",
};

export default async function Home({ params }: any) {
  const { rows } = await sql`SELECT * FROM recipes WHERE `;

  return (
    <main>
      <RecipeList
        title={params.name}
        description={`A collection of recipes perfect for ${params.name}.`}
        recipes={rows}
      />
    </main>
  );
}
