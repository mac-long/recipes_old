import {FaceFrownIcon, HomeIcon} from "@heroicons/react/24/outline";
import Link from "next/link";

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
      <Link href="/" className="flex items-center button primary">
        <HomeIcon className="w-6 h-6" />
        <span className="ml-2">Head on home</span>
      </Link>
    </div>
  );
}
