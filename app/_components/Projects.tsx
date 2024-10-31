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
        description="Booking system for classrooms and
laboratories, allowing students and teachers to make
reservations online without needing to go directly to
the administration, build and design by me."
        tools={["Typescript", "Next.js", "Tailwind", "Supabase"]}
      />
      <a href="#">
        <span className="font-semibold hover:text-amber-300">
          View all projects
        </span>
      </a>
    </section>
  );
}

export default Projects;
