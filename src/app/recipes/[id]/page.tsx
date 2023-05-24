import Content from "@/components/recipes/content";
import { sql } from "@vercel/postgres";

export const metadata = {
  title: "Recipes | Super Sweet Recipes",
  description:
    "SSR is a super simple recipe blog that utilises ChatGPT to generate recipes using various prompts, try making some of these crazy good meals. You can also sign in, like and comment on recipes and save them to favourites.",
};

export default async function Home({ params }: any) {
  const { rows } = await sql`SELECT * FROM recipes WHERE ID = ${params.id}`;

  return (
    <main>
      {/* @ts-expect-error Async Server Component */}
      <Content {...rows[0]} />
    </main>
  );
}
