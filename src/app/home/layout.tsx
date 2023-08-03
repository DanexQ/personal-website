import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
