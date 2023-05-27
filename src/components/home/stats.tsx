'use client';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import AnimateOnScroll from '../animate';

export default function Stats() {
  const stats = [
    { name: 'Users signed up', value: 500 },
    { name: 'Recipes and counting', value: 5000 },
    { name: 'Comments made', value: 400 }
  ];

  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <>
      <h3>Some Interesting Numbers</h3>
      <div className="bg-white sm:py-32 py-18">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.name}
                ref={ref}
                className="flex flex-col gap-y-4 mx-auto max-w-xs"
              >
                {inView && (
                  <>
                    <AnimateOnScroll classNameInView="animate-fadeIn">
                      <dt className="text-base leading-7 text-slate-600">
                        {stat.name}
                      </dt>
                      <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl text-slate-900">
                        <CountUp
                          end={stat.value}
                          duration={Math.random() * 3}
                        />
                      </dd>
                    </AnimateOnScroll>
                  </>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
}
