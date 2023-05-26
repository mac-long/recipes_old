import Link from "next/link";

export default function RecipeCard({
  id,
  title,
  summary,
  meal,
  created_on,
  loading
}: any) {
  if (!loading) {
    return (
      <Link
        href={`/recipes/${id}`}
        key={id}
        className="flex flex-col justify-start p-2 max-w-xl rounded-md hover:bg-gray-200"
      >
        <div className="flex gap-x-4 items-center text-xs">
          <time dateTime={created_on?.toDateString()} className="text-gray-500">
            {created_on?.toDateString()}
          </time>
          <div className="flex justify-center items-center space-x-1">
            <Link href={`/recipes/meal/${meal?.toLowerCase()}`} className="tag">
              {meal}
            </Link>
          </div>
        </div>
        <div className="flex relative flex-col justify-between h-full cursor-pointer group">
          <h3 className="mt-3 text-lg font-semibold leading-6 group-hover:text-indigo-600">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            {summary?.slice(0, 52)}
          </p>
        </div>
      </Link>
    );
  } else {
    return (
      <div className="flex flex-col justify-start p-2 max-w-xl rounded-md bg-gray-400 animate-pulse h-[144px]">
        <div className="flex gap-x-4 items-center text-xs">
          <time className="text-gray-500 w-[94px] h-[16px] bg-gray-200 animate-pulse rounded-md md:w-[75px] md:h-[32px]" />
          <div className="flex justify-center items-center space-x-1 w-[62px] h-[28px] bg-gray-200 animate-pulse rounded-full" />
        </div>
        <div className="flex relative flex-col justify-between h-full">
          <h3 className="mt-3 text-lg font-semibold leading-6 bg-gray-200 w-[200px] h-[20px] text-gray-200 rounded-md animate-pulse md:w-[153px] md:h-[25px]" />
          <p className="text-sm leading-6 text-gray-200 w-[350px] h-[20px] bg-gray-200 rounded-md animate-pulse md:w-[153px] md:h-[45px]" />
        </div>
      </div>
    );
  }
}
