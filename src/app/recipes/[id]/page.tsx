import { getRecipeById } from '@/app/lib/kysely';
import Content from '@/components/recipes/recipe/content';

interface Props {
  params: {
    id: number;
  };
}

export async function generateMetadata({ params }: Props) {
  const recipe = await getRecipeById(params.id);
  const { title, summary } = recipe[0];
  const recipeCount = await getRecipeCount();
  console.log(
    '🚀 ~ file: page.tsx:14 ~ generateMetadata ~ recipeCount:',
    recipeCount
  );

  return {
    title: `${title} | Super Simple Recipe`,
    description: summary
  };
}

export default async function Home({ params }: Props) {
  const recipe = await getRecipeById(params.id);

  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <Content {...recipe[0]} />
    </>
  );
}
