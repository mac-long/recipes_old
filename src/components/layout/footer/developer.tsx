import Link from "next/link";

export default function Developer() {
  return (
    <div className="absolute bottom-1 w-full flex text-gray-600 items-center justify-center">
      <Link href="https://mac-long.vercel.app" target="_blank" rel="norefferer">
        Developer{" "}
      </Link>
      <span className="mx-2">|</span>
      <Link
        href="https://github.com/mac-long/recipes"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </Link>
    </div>
  );
}
