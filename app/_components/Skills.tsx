import SkillsCard from "./SkillsCard";

function Skills() {
  return (
    <section id="skills" className="flex justify-center flex-col gap-12">
      <div className="text-center font-bold text-4xl lg:text-xl mt-16">
        My skills:
      </div>
      <SkillsCard />
    </section>
  );
}

export default Skills;
