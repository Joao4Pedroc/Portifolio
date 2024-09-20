import Icons from "./Icons";
import SkillsCard from "./SkillsCard";

function LeftSidebar() {
  return (
    <div className="lg:fixed top-0 left-0 h-screen pl-[10%] pt-12 lg:pt-16 grid gap-4 ">
      <div>
        <h1 className="text-4xl font-bold mb-4">João Pedro</h1>
        <h2 className="text-xl font-bold">Web Developer</h2>
        {/* <p className="mt-2 text-xs text-zinc-600">
        I'm a passionate web developer who loves learning new technologies and
        constantly improving my skills.
        </p> */}
        {/* <p className="mt-2 text-sm w-32 ">
        Here, you can explore my expertise, favorite tools, and a selection of
        my best projects. To see all of my work, feel free to visit my GitHub
        </p> */}
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
