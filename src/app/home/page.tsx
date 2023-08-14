import AboutMe from "@/components/AboutMe";
import NameAnimation from "@/components/NameAnimation";
import Projects from "@/components/Portfolio";

export default function Page() {
  return (
    <section className="p-3 w-[1200px] mx-auto flex h-full gap-10 items-center flex-col ">
      <NameAnimation />
      <AboutMe />
      <Projects />
    </section>
  );
}
