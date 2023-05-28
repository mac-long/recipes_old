import Header from "@/components/layout/Header";
import Footer from "@/components/layout/footer/Footer";
import "./global.css";

export const metadata = {
  title: "Super Simple Recipes",
  metadataBase: "https://recipe-sands.vercel.app",
  description:
    "SSR is a super simple recipe blog that utilises ChatGPT to generate recipes and skips out on the 4 page story before getting to the instructions, try making some of these crazy good meals.",
  openGraph: {
    images: ["/og.webp"],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
