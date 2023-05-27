import AnimateOnScroll from '@/components/animate';
import Features from '@/components/home/features';
import Hero from '@/components/home/hero';
import Stats from '@/components/home/stats';
import RecipeListContainer from '@/components/recipes/list/container';
import RecipesHeading from '@/components/recipes/list/heading';
import RecipeList from '@/components/recipes/list/list';
import Link from 'next/link';
import {getLatestRecipes} from './lib/kysely';

export default async function Home() {
  const latestRecipes = await getLatestRecipes();

  return (
    <>
      <Hero />
      <Features />
      <Stats />
      <AnimateOnScroll classNameInView="animate-fadeIn">
        <RecipeListContainer>
          <RecipesHeading
            title="Our latest recipes"
            description="Enjoy trying out the most recent culinary adventures we have shared."
          />
          <RecipeList recipes={latestRecipes} />
          <Link className="flex justify-center mt-4" href="/recipes" passHref>
            <button className="primary">View All</button>
          </Link>
        </RecipeListContainer>
      </AnimateOnScroll>
    </>
  );
}
