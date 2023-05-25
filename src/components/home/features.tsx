import {
  AcademicCapIcon,
  ChatBubbleBottomCenterIcon,
  FunnelIcon,
  ShareIcon
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Share your favourites",
    description:
      "Send the recipe to the whole family so everyone can try out the amazing recipes you discover and enjoy.",
    icon: ShareIcon
  },
  {
    name: "Learn new dishes",
    description:
      "Enhance your culinary ability by exploring food from all over the world. Incredible for your taste buds and your mind.",
    icon: AcademicCapIcon
  },
  {
    name: "Discuss with the community",
    description:
      "Chat with other readers of the site to learn what other people have improvised with when low on ingredients.",
    icon: ChatBubbleBottomCenterIcon
  },
  {
    name: "Exquisite filters for fine tuning your meal",
    description:
      "Search for recipes by meal, cuisine, difficulty, diet and more! Ensuring you get the exact meal you're after.",
    icon: FunnelIcon
  }
];

export default function Features() {
  return (
    <div id="features" className="py-24 bg-white sm:py-32 animate-slideLeft">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Tasty Meals
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Create incredibly flavourful meals
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Make sure you remember to save your favourite recipes for quick and
            easy access whenever you are in the mood to cook them again.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 max-w-xl lg:grid-cols-2 lg:gap-y-16 lg:max-w-none">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="flex absolute top-0 left-0 justify-center items-center w-10 h-10 bg-indigo-600 rounded-lg">
                    <feature.icon
                      className="w-6 h-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
