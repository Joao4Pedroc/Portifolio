import ExperiencesCard from "./ExperiencesCard";

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
        <ExperiencesCard />
      </div>
    </div>
  );
}
