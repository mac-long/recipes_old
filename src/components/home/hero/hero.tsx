import Link from 'next/link';
import Gradient from './Gradient';

export default function Hero() {
  return (
    <div className="relative px-6 pt-28 pb-40 lg:px-8 isolate animate-fadeIn">
      <Gradient />
      <div className="py-32 mx-auto max-w-2xl sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-tr from-teal-500 to-blue-500">
            Fun Recipes To Try At Home
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            SSR is a super simple recipe blog that skips out on the 4 page story
            before getting to the instructions, try making some of these crazy
            good meals.
          </p>
          <div className="flex gap-x-6 justify-center items-center mt-10">
            <Link href="/recipes" className="button primary">
              Get Cooking
            </Link>
            <Link
              href="#"
              className="text-sm font-semibold leading-6 text-slate-900"
            >
              Create an account <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
