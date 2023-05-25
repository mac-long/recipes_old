export default function RecipeList({
  mealPage,
  title,
  description,
  recipes
}: {
  mealPage?: boolean;
  title: string;
  description: string;
  recipes: any[];
}) {
  return (
    <div className="py-16 bg-white">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}.
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">{description}</p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 pt-10 mx-auto space-y-4 max-w-2xl border-t border-gray-200 sm:pt-16 sm:mt-16 md:gap-y-8 md:space-y-0 lg:grid-cols-3 lg:mx-0 lg:max-w-none">
          {recipes.map(({ id, title, summary, meal, created_on }) => (
            <a
              href={`/recipes/${id}`}
              key={id}
              className="flex flex-col justify-start p-2 max-w-xl rounded-md hover:bg-gray-200"
            >
              <div className="flex gap-x-4 items-start text-xs lg:items-start">
                <time
                  dateTime={created_on.toDateString()}
                  className="text-gray-500"
                >
                  {created_on.toDateString()}
                </time>
                <div className="flex justify-center items-center space-x-1">
                  <a
                    href={`/recipes/meal/${meal.toLowerCase()}`}
                    className="tag"
                  >
                    {meal}
                  </a>
                </div>
              </div>
              <div className="flex relative flex-col justify-between h-full cursor-pointer group">
                <h3 className="mt-3 text-lg font-semibold leading-6 group-hover:text-indigo-600">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {summary.slice(0, 52)}...
                </p>
              </div>
            </a>
          ))}
        </div>
        {recipes.length <= 3 && (
          <div className="flex justify-center mt-4">
            <a href="/recipes" className="mx-auto button primary">
              See all
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
