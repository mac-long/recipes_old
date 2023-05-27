import RecipeCard from "./card";

export default function RecipeList({recipes}: any) {
  let cards: any = [];
  recipes?.map((recipe: any, i: number) =>
    cards.push(<RecipeCard key={i} {...recipe} />)
  );

  return (
    <div className="px-6 mx-auto max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-x-8 pt-10 mx-auto space-y-4 max-w-2xl md:gap-y-8 md:space-y-0 lg:grid-cols-3 lg:mx-0 lg:max-w-none">
        {cards}
      </div>
    </div>
  );
}
