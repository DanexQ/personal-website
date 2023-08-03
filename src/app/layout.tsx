import Particles from "@/components/Particles";
import "./globals.css";

export const metadata = {
  title: "Daniel.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="w-full h-full">
      <body className="relative w-full h-full bg-background">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <Particles />
        </div>
        {children}
      </body>
    </html>
  );
}
