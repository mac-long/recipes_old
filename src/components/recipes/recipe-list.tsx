import RecipeCard from "./card";
import Filters from "./filters/filters";
import RecipesHeading from "./heading";

export default function RecipeList({
  title,
  description,
  recipes,
  loading
}: {
  title: string;
  description: string;
  recipes?: any[];
  loading?: boolean;
}) {
  let cards = [];

  if (loading) {
    for (let i = 0; i < 12; i++) cards.push(<RecipeCard key={i} loading />);
  } else {
    recipes?.map((recipe) =>
      cards.push(<RecipeCard key={recipe.id} {...recipe} />)
    );
  }

  return (
    <div className="py-16 bg-white">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="border-b pb-8 border-gray-200">
          <RecipesHeading title={title} description={description} />
          <Filters />
        </div>
        <div className="grid grid-cols-1 gap-x-8 pt-10 mx-auto space-y-4 max-w-2xl   md:gap-y-8 md:space-y-0 lg:grid-cols-3 lg:mx-0 lg:max-w-none">
          {cards}
        </div>
      </div>
    </div>
  );
}
