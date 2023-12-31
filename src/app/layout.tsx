import Particles from "@/components/Particles";
import "./globals.css";
import { Chakra_Petch } from "next/font/google";
import Icon from "../../public/favicon.ico";

export const metadata = {
  title: "Daniel aka DanexQ",
};

const roboto = Chakra_Petch({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="w-full h-full">
      <head>
        <link rel="icon" type="image/x-icon" href={Icon.src} />
      </head>
      <body className={`relative w-full bg-background ${roboto.className}`}>
        {children}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <Particles />
        </div>
      </body>
    </html>
  );
}
