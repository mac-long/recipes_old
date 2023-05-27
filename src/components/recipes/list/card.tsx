import Link from 'next/link';
import AnimateOnScroll from '../../animate';

export default function RecipeCard({
  id,
  title,
  summary,
  cuisine,
  meal,
  created_on,
  loading
}: any) {
  if (!loading) {
    return (
      <div className="flex flex-col justify-center p-2 pt-4 rounded-md lg:w-48 hover:bg-gray-200">
        <div className="flex items-center space-x-4 text-xs lg:items-start">
          <time
            dateTime={created_on?.toDateString()}
            className="text-slate-500"
          >
            {created_on?.toDateString()}
          </time>
          <div className="flex justify-center space-x-1 lg:flex-col lg:items-end lg:space-y-2 lg:space-x-0">
            <Link href={`#`} className="tag">
              {meal}
            </Link>
            <Link href={`#`} className="tag">
              {cuisine}
            </Link>
          </div>
        </div>
        <Link href={`/recipes/${id}`}>
          <div className="flex relative flex-col justify-between h-full cursor-pointer group">
            <h3 className="mt-3 text-lg font-semibold leading-6 group-hover:text-indigo-600">
              {title}
            </h3>
            <p className="text-sm leading-6 text-slate-600">
              <span className="lg:hidden">{summary}</span>
              <span className="hidden lg:block">
                {summary?.slice(0, 52)}...
              </span>
            </p>
          </div>
        </Link>
      </div>
    );
  } else {
    return (
      <AnimateOnScroll classNameInView="animate-fadeIn">
        <div className="flex flex-col justify-center p-2 pt-4 bg-gray-300 rounded-md animate-pulse lg:w-48">
          <div className="flex items-center space-x-4 text-xs">
            <time className="bg-gray-200 rounded-md animate-pulse text-slate-500 w-[94px] h-[16px] md:w-[75px] md:h-[32px]" />
            <div className="flex justify-center items-center space-x-1 sm:flex-col sm:space-y-2 sm:space-x-0">
              <div className="flex justify-center items-center space-x-1 bg-gray-200 rounded-full animate-pulse w-[62px] h-[28px]" />
              <div className="flex justify-center items-center space-x-1 bg-gray-200 rounded-full animate-pulse w-[62px] h-[28px]" />
            </div>
          </div>
          <div className="flex relative flex-col justify-between h-full">
            <h3 className="mt-3 text-lg font-semibold leading-6 bg-gray-200 rounded-md animate-pulse w-[200px] h-[20px] text-slate-200 md:w-[153px] md:h-[25px]" />
            <p className="text-sm leading-6 bg-gray-200 rounded-md animate-pulse text-slate-200 w-[350px] h-[20px] md:w-[153px] md:h-[45px]" />
          </div>
        </div>
      </AnimateOnScroll>
    );
  }
}
