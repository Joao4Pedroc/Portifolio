import ProjectsCard from "./_components/ProjectsCard";
import ExperiencesCard from "./_components/ExperiencesCard";

export default function Home() {
  return (
    <div className="">
      <span>
        Hello, my name is João Pedro, and I&apos;m a passionate web developer
        who loves learning new technologies and constantly improving my skills.
        <br />
        <br />
        Here, you can explore my expertise, favorite tools, and a selection of
        my best projects. To see all of my work, feel free to visit my GitHub.
      </span>
      <div>
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
      </div>
    </div>
  );
}
// imagedata, name, duration {start, end}, description, tools

// [href, src: {src.src, src.alt}, name, description, tools: [...]]
