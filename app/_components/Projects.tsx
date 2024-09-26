import ProjectsCard from "./ProjectsCard";

function Projects() {
  return (
    <section id="projects" className="flex flex-col gap-12">
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
    </section>
  );
}

export default Projects;
