import { getRecipeById } from "@/app/lib/kysely";
import Content from "@/components/recipes/content";

interface Props {
  params: {
    id: number;
  };
}

export async function generateMetadata({ params }: Props) {
  const recipe = await getRecipeById(params.id).then();

  return
}

export default async function Home({ params }: Props) {
  const recipe = await getRecipeById(params.id);

  return (
    <main>
      {/* @ts-expect-error Async Server Component */}
      <Content {...recipe[0]} />
    </main>
  );
}
