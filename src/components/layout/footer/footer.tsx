import Developer from "./developer";
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
          <Developer />
        </div>
      </div>
    </footer>
  );
}
