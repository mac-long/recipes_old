import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header";
import "./globals.css";

export const metadata = {
  title: "Super Simple Recipes",
  description:
    "SSR is a super simple recipe blog that utilises ChatGPT to generate recipes using various prompts, try making some of these crazy good meals. You can also sign in, like and comment on recipes and save them to favourites.",
  metadataBase: "https://recipe-sands.vercel.app",
  openGraph: {
    images: ["/og.webp"]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
