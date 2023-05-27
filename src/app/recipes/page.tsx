import Container from '@/components/recipes/list/container';
import RecipeListContainer from '@/components/recipes/list/list-container';
import {getAllRecipes, getRecipeFilterCategories} from '../lib/kysely';

export const metadata = {
  title: 'Recipes | Super Sweet Recipes',
  description:
    'SSR is a super simple recipe blog that utilises ChatGPT to generate recipes and skips out on the 4 page story before getting to the instructions, try making some of these crazy good meals.'
};

export default async function Recipes() {
  const recipesData = await getAllRecipes();
  const {meals, cuisines} = await getRecipeFilterCategories();

  return (
    <Container>
      <RecipeListContainer
        recipesData={recipesData}
        meals={meals}
        cuisines={cuisines}
      />
    </Container>
  );
}
