import Features from "@/components/home/features";
import Hero from "@/components/home/hero";
import Stats from "@/components/home/stats";
import RecipeList from "@/components/layout/recipe-list";
import { posts } from "./tempData";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Stats />
      <RecipeList
        title="Our latest recipes"
        description="Enjoy trying out the most recent culinary adventures we have shared."
        posts={posts.slice(3)}
      />
    </main>
  );
}
