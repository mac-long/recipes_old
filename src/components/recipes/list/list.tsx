import {QuestionMarkCircleIcon} from "@heroicons/react/24/outline";
import {default as RecipeCard} from "./card";

export default function RecipeList({recipes}: any) {
  let cards: any = [];
  recipes?.map((recipe: any) =>
    cards.push(<RecipeCard key={recipe.id} {...recipe} />)
  );

  return (
    <div className="px-6 mx-auto max-w-7xl lg:px-8">
      {cards.length > 0 ? (
        <div className="grid grid-cols-1 gap-x-8 pt-10 mx-auto space-y-4 max-w-2xl md:gap-y-8 md:space-y-0 lg:grid-cols-3 lg:mx-0 lg:max-w-none">
          {cards}
        </div>
      ) : (
        <div className="pt-16 flex flex-col items-center text-center">
          <QuestionMarkCircleIcon className="w-10 h-10" />
          <h3 className="m-0">No Recipes Here...</h3>
          <p className="max-w-xs">
            Try changing the meal and cuisine filters to see if we have some
            other options.
          </p>
        </div>
      )}
    </div>
  );
}
