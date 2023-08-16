import Particles from "@/components/Particles";
import "./globals.css";
import { Roboto } from "next/font/google";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Daniel.",
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="w-full h-full">
      <body className={`relative w-full bg-background ${roboto.className}`}>
        {children}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <Particles />
        </div>
      </body>
    </html>
  );
}
