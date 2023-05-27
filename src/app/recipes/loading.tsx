import Filters from '@/components/recipes/filters/filters';
import RecipeCard from '@/components/recipes/list/card';
import RecipeListContainer from '@/components/recipes/list/container';
import RecipesHeading from '@/components/recipes/list/heading';
import List from '@/components/recipes/list/list';
import {getRecipeFilterCategories} from '../lib/kysely';

export default async function Recipes({filters}: any) {
  let cards = [];
  for (let i = 0; i < 12; i++) cards.push(<RecipeCard key={i} loading />);
  const {meals, cuisines} = await getRecipeFilterCategories();

  return (
    <RecipeListContainer>
      <RecipesHeading
        title="Our recipes."
        description="Enjoy searching through our crazy assortment of cuisine from around the world."
      >
        <Filters meals={meals} cuisines={cuisines} />
      </RecipesHeading>
      <List recipes={cards} />
    </RecipeListContainer>
  );
}
