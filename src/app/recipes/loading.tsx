import RecipeList from "@/components/recipes/recipe-list";

export default function Loading() {
  return (
    <RecipeList
      title="Our recipes."
      description="Enjoy searching through our crazy assortment of cuisine from around the world."
      loading
    />
  );
}
