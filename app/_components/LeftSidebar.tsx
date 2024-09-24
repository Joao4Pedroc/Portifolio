import Icons from "./Icons";
import SkillsCard from "./SkillsCard";

function LeftSidebar() {
  return (
    <div className="lg:fixed top-0 left-[15%]  h-screen lg:pl-[10%] pl-0 pt-12 lg:pt-16 grid gap-4 ">
      <div className="text-left">
        <h1 className="text-4xl font-bold mb-4">João Pedro</h1>
        <h2 className="text-xl font-bold">Web Developer</h2>
      </div>
      <div className="col-span-2">
        <SkillsCard />
      </div>
      <div className="col-start-2 row-start-1 lg:col-start-1 lg:row-start-3 justify-self-end lg:justify-self-start">
        <Icons />
      </div>
    </div>
  );
}

export default LeftSidebar;
