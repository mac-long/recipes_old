"use client";
import { ArrowPathIcon, BugAntIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";

export default function Error({
  error,
  reset
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center">
        <BugAntIcon className="w-32 h-32" />
        <h2 className="mt-0">Something went wrong!</h2>
        <p>If problem persists contact me...</p>
      </div>
      <div className="buttons">
        <button className="primary flex items-center">
          <ArrowPathIcon className="w-6 h-6" />
          <span className="ml-2">Try again</span>
        </button>
        <a href="mailto:mac@3sidedcube.com">Contact Me</a>
      </div>
    </div>
  );
}
