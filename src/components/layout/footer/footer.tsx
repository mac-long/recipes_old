import Link from "next/link";
import FooterFeatures from "./features";
import NewsletterForm from "./form";
import FooterHeading from "./heading";

export default function Footer() {
  return (
    <footer>
      <div className="overflow-hidden relative py-16 bg-gray-900 sm:py-24 lg:py-32 isolate">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 mx-auto max-w-2xl lg:grid-cols-2 lg:max-w-none">
            <FooterHeading />
            <NewsletterForm />
            <FooterFeatures />
          </div>
        </div>
        <div className="absolute bottom-1 w-full flex font-light items-center justify-center">
          <Link
            href="https://mac-long.vercel.app"
            target="_blank"
            rel="norefferer"
          >
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
      </div>
    </footer>
  );
}
