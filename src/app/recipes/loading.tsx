import RecipeCard from "@/components/recipes/card";

export default function Loading() {
  const cards = [];
  for (let i = 0; i < 12; i++) cards.push(<RecipeCard key={i} loading />);
  return (
    <div className="py-16 bg-white px-6 mx-auto max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-x-8 pt-10 mx-auto space-y-4 max-w-2xl border-t border-gray-200 sm:pt-16 sm:mt-16 md:gap-y-8 md:space-y-0 lg:grid-cols-3 lg:mx-0 lg:max-w-none">
        {cards}
      </div>
    </div>
  );
}
