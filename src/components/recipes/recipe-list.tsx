export default function RecipeList({
  mealPage,
  title,
  description,
  recipes,
}: {
  mealPage?: boolean;
  title: string;
  description: string;
  recipes: any[];
}) {
  const meals = ["Breakfast", "Lunch", "Dinner", "Snack", "Dessert"];
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl w-full px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}.
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">{description}</p>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 space-y-4 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {mealPage && (
            <div className="flex items-center space-x2">
              {meals.map((meal) => (
                <a
                  key={meal}
                  href={`/recipes/meal/${meal.toLowerCase()}`}
                  className={`tag ${
                    meal.toLowerCase() === title.toLowerCase() && "active"
                  } `}
                >
                  {meal}
                </a>
              ))}
            </div>
          )}
          {recipes.map(({ id, title, summary, meal, created_on }) => (
            <a
              href={`/recipes/${id}`}
              key={id}
              className="flex max-w-xl h-36 max-h-36 flex-col items-start justify-between hover:bg-gray-200 p-2 rounded-md"
            >
              <div className="flex items-center gap-x-4 text-xs lg:items-start">
                <time
                  dateTime={created_on.toDateString()}
                  className="text-gray-500"
                >
                  {created_on.toDateString()}
                </time>
                <div className="flex items-center justify-center space-x-1">
                  <a
                    href={`/recipes/meal/${meal.toLowerCase()}`}
                    className="tag"
                  >
                    {meal}
                  </a>
                </div>
              </div>
              <div className="group relative cursor-pointer">
                <h3 className="mt-3 text-lg font-semibold leading-6 group-hover:text-indigo-600">
                  {title}
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {summary}
                </p>
              </div>
            </a>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <a href="/recipes" className="button primary mx-auto">
            See all
          </a>
        </div>
      </div>
    </div>
  );
}
