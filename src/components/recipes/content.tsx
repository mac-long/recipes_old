import { CameraIcon, ClockIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default async function Content({
  meal,
  title,
  photographer_name,
  photographer_url,
  image_url,
  summary,
  ingredients,
  cooking_time,
  instructions
}: any) {
  return (
    <div className="overflow-hidden relative py-32 px-6 bg-white lg:overflow-visible lg:px-0 isolate">
      <div className="overflow-hidden absolute inset-0 -z-10">
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
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 mx-auto max-w-2xl lg:grid-cols-2 lg:gap-y-10 lg:items-start lg:mx-0 lg:max-w-none animate-slideLeft">
        <div className="lg:grid lg:grid-cols-2 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:gap-x-8 lg:px-8 lg:mx-auto lg:w-full lg:max-w-7xl">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <span className="text-base font-semibold leading-7 text-indigo-600">
                {meal}
              </span>
              <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">
                {title}
              </h1>
              <p className="mt-6 text-xl leading-8 text-slate-700">{summary}</p>
              <h2>Ingredients</h2>
              <ul>
                {ingredients.map((item: any) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h2>Creation Time</h2>
              <span className="flex items-center font-bold leading-8 text-slate-700">
                <ClockIcon className="mr-1 w-6 h-6" />
                {cooking_time}
              </span>
            </div>
          </div>
          <div className="flex flex-col lg:col-span-1 lg:col-start-1 lg:row-start-2 lg:gap-x-8 lg:px-0 lg:mx-auto lg:w-full lg:max-w-lg">
            <h2>Instructions</h2>
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 lg:max-w-lg text-slate-700">
                <ol className="md:p-0">
                  {instructions.map((item: any) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="p-12 -mt-12 -ml-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 animate-slideRight">
          <Image
            className="max-w-none bg-gray-900 rounded-xl ring-1 shadow-2xl w-[64rem] ring-gray-400/10 sm:w-[32rem]"
            src={image_url}
            alt={`${title} a food for ${meal}.`}
            width={1024}
            height={672}
            priority
            placeholder="blur"
            blurDataURL="https://placehold.co/1024x762"
          />
          <Link
            className="flex items-center w-64 text-xs font-extralight"
            href={
              photographer_url ||
              `https://unsplash.com/s/users/${photographer_name}`
            }
            target="_blank"
          >
            <CameraIcon className="mr-1 w-6 h-6" />
            {photographer_name}
          </Link>
        </div>
        <Link href="/recipes" className="mx-auto button primary">
          Back to recipes
        </Link>
      </div>
    </div>
  );
}
