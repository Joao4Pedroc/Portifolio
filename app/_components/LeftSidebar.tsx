import Icons from "./Icons";
import NavBar from "./NavBar";

function LeftSidebar() {
  return (
    <div className="grid lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div className="text-left">
        <h1 className="text-4xl font-bold mb-4">João Pedro</h1>
        <h2 className="text-xl font-bold mb-4">Web Developer</h2>
        <h3 className="text-xs opacity-400 text-zinc-400 mb-20">
          nana eu te amoo❤️
        </h3>
        <NavBar />
      </div>

      <div className="col-start-2 row-start-1 lg:col-start-1 lg:row-start-3 justify-self-end lg:justify-self-start">
        <Icons />
      </div>
    </div>
  );
}

export default LeftSidebar;
