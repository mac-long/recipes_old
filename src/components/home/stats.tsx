import AnimationOnScroll from "../animate";

export default function Stats() {
  const stats = [
    { id: 1, name: "Users signed up", value: "0" },
    { id: 2, name: "Recipes and counting", value: "10" },
    { id: 3, name: "Comments made", value: "0" }
  ];
  return (
    <AnimationOnScroll
      classNameInView="animate-fadeIn"
      classNameNotInView="opacity-0"
    >
      <div className="py-24 bg-white sm:py-32">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col gap-y-4 mx-auto max-w-xs"
              >
                <dt className="text-base leading-7 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </AnimationOnScroll>
  );
}
