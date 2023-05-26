import RecipeCard from "./card";
import RecipesHeading from "./heading";

export default function RecipeList({
  title,
  description,
  recipes
}: {
  title: string;
  description: string;
  recipes: any[];
}) {
  return (
    <div className="py-16 bg-white">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <RecipesHeading title={title} description={description} />
        <div className="grid grid-cols-1 gap-x-8 pt-10 mx-auto space-y-4 max-w-2xl border-t border-gray-200 sm:pt-16 sm:mt-16 md:gap-y-8 md:space-y-0 lg:grid-cols-3 lg:mx-0 lg:max-w-none">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>
      </div>
    </div>
  );
}
