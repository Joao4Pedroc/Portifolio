import ExperiencesCard from "./ExperiencesCard";

function Experiences() {
  return (
    <section id="experiences" className="flex-col flex gap-12">
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
        tools={["JavaScript", "Typescript", "React", "WordPress", "Next.js"]}
      />

      <a href="#">
        <span className="font-semibold hover:text-amber-300">
          View full résumé
        </span>
      </a>
    </section>
  );
}

export default Experiences;
