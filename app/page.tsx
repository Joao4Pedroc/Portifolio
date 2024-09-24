import ProjectsCard from "./_components/ProjectsCard";
import ExperiencesCard from "./_components/ExperiencesCard";

export default function Home() {
  // animation gets up and shadow when hover, change the select color, create sections: experiences and projects
  return (
    <div className="lg:pb-28 pb-16">
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

      <div className="flex-col flex gap-12">
        <div className="text-center font-bold text-4xl lg:text-xl mt-20">
          My Experiences:
        </div>
        <ExperiencesCard
          href="#"
          imageData={{ src: "/logo-FEPECS.png", alt: "logo FEPECS" }}
          name="Intern FEPECS"
          duration={{ start: "2024", end: "CURRENT" }}
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
          sunt, reprehenderit illum suscipit iure corporis, unde aliquid
          nemo odio voluptatibus, eos tempore. Debitis fugiat magnam eum
          eius autem obcaecati. Nihil."
          tools={["WordPress", "Javascript", "Typescript", "React", "Next.js"]}
        />

        <a href="#">
          <span className="font-semibold">View full résumé</span>
        </a>
      </div>
      <div className="flex flex-col gap-12">
        <div className="text-center font-bold text-4xl lg:text-xl mt-20">
          My Projects:{" "}
        </div>
        <ProjectsCard
          href="#"
          imageData={{
            src: "/Agendamento-de-salas.jpeg",
            alt: 'Home of my website "Agendamento de salas FEPECS"',
          }}
          name="Agendamento de salas FEPECS"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
          sunt, reprehenderit illum suscipit iure corporis, unde aliquid
          nemo odio voluptatibus, eos tempore. Debitis fugiat magnam eum
          eius autem obcaecati. Nihil."
          tools={["Typescript", "Next.js", "Tailwind", "Supabase"]}
        />

        <a href="#">
          <span className="font-semibold">View all projects</span>
        </a>
      </div>
    </div>
  );
}
