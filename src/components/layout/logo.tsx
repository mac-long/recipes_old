import { CakeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex transition-colors duration-300 lg:flex-1 hover:text-indigo-600 group">
      <Link href="/">
        <CakeIcon />
        <h1 className="m-0 text-xl font-bold transition-colors duration-300 group-hover:text-indigo-600">
          SSR
        </h1>
      </Link>
    </div>
  );
}
