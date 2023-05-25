export default function Hero() {
  return (
    <div className="relative px-6 pt-14 lg:px-8 isolate animate-fadeIn">
      <div
        className="overflow-hidden absolute inset-x-0 -top-40 transform-gpu sm:-top-80 -z-10 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          }}
        />
      </div>
      <div className="py-32 mx-auto max-w-2xl sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-tr from-indigo-600 to-pink-500">
            Fun Recipes To Try At Home
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            SSR is a super simple recipe blog that utilises ChatGPT to generate
            recipes and skips out on the 4 page story before getting to the
            instructions, try making some of these crazy good meals.
          </p>
          <div className="flex gap-x-6 justify-center items-center mt-10">
            <a href="/recipes" className="button primary">
              Get Cooking
            </a>
            <a
              href="#features"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
