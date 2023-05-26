import Link from "next/link";

export default function Developer() {
  return (
    <div className="flex absolute bottom-2 justify-center items-center  text-slate-600">
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
