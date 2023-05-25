import { getRecipeById } from "@/app/lib/kysely";
import Content from "@/components/recipes/content";

export const metadata = {
  title: "Recipes | Super Sweet Recipes",
  description:
    "SSR is a super simple recipe blog that utilises ChatGPT to generate recipes using various prompts, try making some of these crazy good meals. You can also sign in, like and comment on recipes and save them to favourites."
};

export default async function Home({ params }: any) {
  const recipe = await getRecipeById(params.id);

  return (
    <main>
      {/* @ts-expect-error Async Server Component */}
      <Content {...recipe[0]} />
    </main>
  );
}
