"use client";
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
    <div>
      <h2>Something went wrong!</h2>
      <p>If problem persists contact me...</p>
      <button className="primary bg-red-500" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
