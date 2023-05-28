"use client";
import { ReactNode } from "react";
import { InView } from "react-intersection-observer";

export default function AnimateOnScroll({
  children,
  classNameInView,
  classNameNotInView,
}: {
  children: ReactNode;
  classNameInView: string;
  classNameNotInView?: string;
}) {
  return (
    <InView triggerOnce threshold={1}>
      {({ inView, ref, entry }) => (
        <div
          ref={ref}
          className={
            inView ? classNameInView : classNameNotInView || "opacity-0"
          }
        >
          {children}
        </div>
      )}
    </InView>
  );
}
