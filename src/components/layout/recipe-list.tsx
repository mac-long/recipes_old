export default function RecipeList({
  title,
  description,
  recipes,
}: {
  title: string;
  description: string;
  recipes: any[];
}) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">{description}</p>
        </div>
        <div className="mx-auto mt-10 grid -space-y-6 max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {recipes.map(
            ({
              id,
              title,
              summary,
              cookingtime,
              meal,
              cuisine,
              created_on,
            }) => (
              <article
                key={id}
                className="flex max-w-xl flex-col hover:scale-105 items-start justify-between hover:bg-gray-200 p-2 rounded-md transition-scale duration-300"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time
                    dateTime={created_on.toDateString()}
                    className="text-gray-500"
                  >
                    {created_on.toDateString()}
                  </time>
                  <div className="flex items-center justify-center space-x-1">
                    <a
                      href={`/recipes/cuisines/${cuisine}`}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-indigo-600 hover:text-white"
                    >
                      {cuisine}
                    </a>
                    <a
                      href={`/recipes/meals/${meal}`}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-indigo-600 hover:text-white"
                    >
                      {meal}
                    </a>
                  </div>
                </div>
                <a
                  href={`/recipes/recipe/${id}`}
                  className="group relative cursor-pointer"
                >
                  <h3 className="mt-3 text-lg font-semibold leading-6 group-hover:text-indigo-600">
                    {title}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {summary}
                  </p>
                </a>
              </article>
            )
          )}
        </div>
      </div>
    </div>
  );
}
