import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import Education from "@/components/Education";
import NameAnimation from "@/components/NameAnimation";
import Projects from "@/components/Portfolio";

export default function Page() {
  return (
    <main className="px-3 md:px-0 max-w-[1200px] mx-auto flex gap-20 items-center flex-col ">
      <NameAnimation />
      <AboutMe />
      <Projects />
      <Education />
      <ContactMe />
    </main>
  );
}
