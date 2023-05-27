import AnimateOnScroll from "../animate";

export default function Stats() {
  const stats = [
    {id: 1, name: "Users signed up", value: "0"},
    {id: 2, name: "Recipes and counting", value: "10"},
    {id: 3, name: "Comments made", value: "0"}
  ];
  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <AnimateOnScroll key={stat.id} classNameInView="animate-fadeIn">
              <div className="flex flex-col gap-y-4 mx-auto max-w-xs">
                <dt className="text-base leading-7 text-slate-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl text-slate-900">
                  {stat.value}
                </dd>
              </div>
            </AnimateOnScroll>
          ))}
        </dl>
      </div>
    </div>
  );
}
