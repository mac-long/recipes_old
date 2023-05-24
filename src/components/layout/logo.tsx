import { CakeIcon } from "@heroicons/react/24/outline";

export default function Logo() {
  return (
    <div className="flex lg:flex-1 hover:text-indigo-600 group transition-colors duration-300">
      <a href="/">
        <CakeIcon />
        <h1 className="text-xl m-0 font-bold group-hover:text-indigo-600 transition-colors duration-300">
          SSR
        </h1>
      </a>
    </div>
  );
}
