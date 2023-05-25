import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer>
      <div className="overflow-hidden relative py-16 bg-gray-900 sm:py-24 lg:py-32 isolate">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 mx-auto max-w-2xl lg:grid-cols-2 lg:max-w-none">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Subscribe to our newsletter.
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Be notified of our most recent recipes every week, so you
                constantly have new ideas flowing through you.
              </p>
              <div className="flex gap-x-4 mt-6 max-w-md">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="flex-auto py-2 px-3.5 min-w-0 text-white rounded-md border-0 ring-1 ring-inset shadow-sm sm:text-sm sm:leading-6 focus:ring-2 focus:ring-inset focus:ring-indigo-500 bg-white/5 ring-white/10"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="flex-none py-2.5 px-3.5 text-sm font-semibold text-white bg-indigo-500 rounded-md shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="p-2 rounded-md ring-1 bg-white/5 ring-white/10">
                  <CalendarDaysIcon
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <dt className="mt-4 font-semibold text-white">
                  Weekly articles
                </dt>
                <dd className="mt-2 leading-7 text-gray-400">
                  Regular meal updates is great for your health, both mental and
                  physical. So enjoy recieving a variety of recipes.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="p-2 rounded-md ring-1 bg-white/5 ring-white/10">
                  <HandRaisedIcon
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <dt className="mt-4 font-semibold text-white">No spam</dt>
                <dd className="mt-2 leading-7 text-gray-400">
                  Only the highest quality recipes and nothing more from these
                  newsletters. No spam to worry about.
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 xl:-top-6 -z-10 blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            }}
          />
        </div>
      </div>
    </footer>
  );
}
