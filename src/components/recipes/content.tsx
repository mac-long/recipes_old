import { ClockIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

async function getData(query: any) {
  const res = await fetch(
    `https://api.unsplash.com/photos/random?query='${query}'&client_id=IVuqCPp50fkkZ4Cx3QX5SsONLZguKnjVUFE2UC2lP-Y`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Content({
  meal,
  title,
  summary,
  ingredients,
  cookingtime,
  instructions,
}: any) {
  const data = await getData(title);

  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 animate-slideLeft">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <a
                href={`/recipes/meals/${meal.toLowerCase()}`}
                className="text-base font-semibold leading-7 text-indigo-600"
              >
                {meal}
              </a>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {title}
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">{summary}</p>
              <h2>Ingredients</h2>
              <ul>
                {ingredients.map((item: any) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h2>Creation Time</h2>
              <span className="text-gray-700 font-bold leading-8 flex items-center">
                <ClockIcon className="w-6 h-6 mr-1" />
                {cookingtime}
              </span>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 animate-slideRight">
          <Image
            className="w-[64rem] sm:w-[32rem] md:[8rem] max-w-none rounded-xl bg-gray-900 shadow-2xl ring-1 ring-gray-400/10"
            src={data.urls.raw}
            alt={`${title} a food for ${meal}.`}
            width={1024}
            height={672}
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:w-full lg:max-w-lg lg:gap-x-8 lg:px-8 flex flex-col">
          <h2>Instructions</h2>
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <ol>
                {instructions.map((item: any) => (
                  <li key={item}>{item.slice(3)}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
        <a href="/recipes" className="button primary mx-auto">
          Back to recipes
        </a>
      </div>
    </div>
  );
}
