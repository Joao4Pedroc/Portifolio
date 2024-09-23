import Image from "next/image";

function ProjectsCard() {
  return (
    <div className="flex flex-col">
      <ul>
        <li className="mb-12">
          <a
            href="#"
            className="grid grid-cols-[20%_80%] gap-4 grid-row-4 mt-24 hover:bg-zinc-600 rounded-md p-4 hover:shadow-md transition-all"
          >
            <Image
              src={"/fepecs.jpg"}
              width={150}
              height={48}
              className="rounded-md row-span-2"
              alt="FEPECS Agendamento de salas"
              loading="lazy"
            />
            <span className="font-bold">Intern, FEPECS</span>
            <p className="row-start-2 col-start-2 opacity-75 text-zinc-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
              sunt, reprehenderit illum suscipit iure corporis, unde aliquid
              nemo odio voluptatibus, eos tempore. Debitis fugiat magnam eum
              eius autem obcaecati. Nihil.
            </p>
            <ul className="flex flex-wrap gap-4 col-start-2 row-start-3">
              <li className="px-3 py-2 leading-5 text-xs font-medium rounded-full text-amber-300 bg-amber-400/10 ">
                Typescript
              </li>
              <li className="px-3 py-2 leading-5 text-xs font-medium rounded-full text-amber-300 bg-amber-400/10 ">
                Next.js
              </li>
              <li className="px-3 py-2 leading-5 text-xs font-medium rounded-full text-amber-300 bg-amber-400/10 ">
                Supabase
              </li>
            </ul>
          </a>
        </li>
      </ul>
      <a href="#">
        <span>View all projects</span>
      </a>
    </div>
  );
}

export default ProjectsCard;
