import { FaceFrownIcon, HomeIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <div className="container">
      <div className="flex flex-col">
        <FaceFrownIcon />
        <h2 className="m-0">Not Found</h2>
      </div>
      <p>
        Whoops, we couldn{"'"}t seem to find that page, double check your url.
      </p>
      <button className="flex items-center primary">
        <HomeIcon className="w-6 h-6" />
        <span className="ml-2">Head on home</span>
      </button>
    </div>
  );
}
