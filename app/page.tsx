import Projects from "./_components/Projects";
import Experiences from "./_components/Experiences";
import Skills from "./_components/Skills";

export default function Home() {
  // animation gets up and shadow when hover, change the select color, create sections: experiences and projects
  return (
    <div className="mb-16 scroll-mt-16 md:mb-16 lg:mb-16 lg:scroll-mt-24">
      <div className="">
        <span>
          Hello, my name is João Pedro, and I&apos;m a passionate web developer
          who loves learning new technologies and constantly improving my
          skills.
          <br />
          <br />
          Here, you can explore my expertise, favorite tools, and a selection of
          my best projects. To see all of my work, feel free to visit my GitHub.
        </span>
      </div>

      <main>
        <Experiences />
        <Projects />
        <Skills />
      </main>
    </div>
  );
}
