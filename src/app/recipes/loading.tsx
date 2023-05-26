import RecipeCard from "@/components/recipes/card";

export default function Loading() {
  return <>{[...Array(10).map((e, i) => <RecipeCard key={i} loading />)]};</>;
}
