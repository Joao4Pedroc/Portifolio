import ExperiencesCard from "./ExperiencesCard";

function Experiences() {
  return (
    <section id="experiences" className="flex-col flex gap-12">
      <div className="text-center font-bold text-4xl lg:text-xl mt-20">
        My Experiences:
      </div>
      <ExperiencesCard
        href="https://www.fepecs.edu.br/"
        imageData={{ src: "/logo-FEPECS.png", alt: "logo FEPECS" }}
        name="Intern FEPECS"
        duration={{ start: "2024", end: "CURRENT" }}
        description="Responsible for maintaining the institutional website, Developed a booking system for classrooms and
laboratories, allowing students and teachers to make
reservations online without needing to go directly to
the administration.
"
        tools={["JavaScript", "Typescript", "React", "WordPress", "Next.js"]}
      />

      <a href="#">
        <span className="font-semibold hover:text-amber-300">
          View full resume
        </span>
      </a>
    </section>
  );
}

export default Experiences;
