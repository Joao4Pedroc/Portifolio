import Image from "next/image";

function ExperiencesCard() {
  return (
    <div className="flex flex-col">
      <ul>
        <li className="mb-12">
          <a
            href="#"
            className="group grid grid-cols-[20%_80%] place-content-center gap-8 grid-row-4 mt-24  hover:bg-zinc-600 rounded-lg p-4 pl-12 lg:pl-16 hover:shadow-lg transition-all"
          >
            <Image
              src={"/logo-FEPECS.png"}
              width={150}
              height={50}
              className="rounded-lg row-span-2 row-start-4 col-span-2  lg:row-span-2 lg:col-start-1 lg:row-start-1 lg:col-span-1 border-2 group-hover:border-2 transition-all group-hover:border-zinc-400 bg-white "
              alt="FEPECS Agendamento de salas"
              loading="lazy"
              layout="responsive"
              objectFit="contain"
              decoding="async"
            />
            <span className="font-bold col-span-2 lg:col-start-2">
              Intern, FEPECS
              <span className="opacity-50 text-zinc-400">
                {" "}
                (2024 - PRESENT)
              </span>
            </span>
            <p className="row-start-2 col-start-1 col-span-2 opacity-75 text-zinc-400 lg:col-start-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
              sunt, reprehenderit illum suscipit iure corporis, unde aliquid
              nemo odio voluptatibus, eos tempore. Debitis fugiat magnam eum
              eius autem obcaecati. Nihil.
            </p>
            <ul className="flex flex-wrap gap-4 col-start-1 col-span-3 row-start-3 lg:col-start-2">
              <li className="px-3 py-2 leading-5 text-xs font-medium rounded-full text-amber-300 bg-amber-400/10 ">
                WordPress
              </li>
              <li className="px-3 py-2 leading-5 text-xs font-medium rounded-full text-amber-300 bg-amber-400/10 ">
                Javascript
              </li>
              <li className="px-3 py-2 leading-5 text-xs font-medium rounded-full text-amber-300 bg-amber-400/10 ">
                Typescript
              </li>
              <li className="px-3 py-2 leading-5 text-xs font-medium rounded-full text-amber-300 bg-amber-400/10 ">
                React
              </li>
              <li className="px-3 py-2 leading-5 text-xs font-medium rounded-full text-amber-300 bg-amber-400/10 ">
                Next.js
              </li>
            </ul>
          </a>
        </li>
      </ul>
      <a href="#">
        <span>View full résumé</span>
      </a>
    </div>
  );
}

export default ExperiencesCard;
