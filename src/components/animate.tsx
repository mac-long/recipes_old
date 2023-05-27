"use client";

import {InView} from "react-intersection-observer";

export default function AnimateOnScroll({
  children,
  classNameInView
}: {
  children: React.ReactNode;
  classNameInView: string;
}) {
  return (
    <InView triggerOnce threshold={1}>
      {({inView, ref, entry}) => (
        <div ref={ref} className={inView ? classNameInView : "opacity-0"}>
          {children}
        </div>
      )}
    </InView>
  );
}
