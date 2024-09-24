import Image from "next/image";

function ProjectsCard({
  href,
  imageData,
  name,
  description,
  tools,
}: {
  href: string;
  imageData: { src: string; alt: string };
  name: string;
  description: string;
  tools: Array<string>;
}) {
  return (
    <div className="flex flex-col">
      <ul>
        <li className="">
          <a
            href={href}
            className="group grid grid-cols-[20%_80%] place-content-center gap-8 grid-row-4   hover:bg-zinc-600 rounded-lg p-4 pl-12 lg:pl-16 hover:shadow-lg transition-all"
          >
            <Image
              src={imageData.src}
              alt={imageData.alt}
              width={200}
              height={50}
              className="rounded-lg row-span-2 row-start-4 col-span-2  lg:row-span-2 lg:col-start-1 lg:row-start-1 lg:col-span-1 border-2  group-hover:border-2 transition-all group-hover:border-zinc-400 "
              loading="lazy"
              layout="responsive"
              objectFit="contain"
              decoding="async"
            />
            <span className="font-bold col-span-2 lg:col-start-2">{name}</span>
            <p className="row-start-2 col-start-1 col-span-2 opacity-75 text-zinc-400 lg:col-start-2">
              {description}
            </p>
            <ul className="flex flex-wrap gap-4 col-start-1 col-span-3 row-start-3 lg:col-start-2">
              {tools.map((tool, index) => {
                return (
                  <li
                    className="px-3 py-2 leading-5 text-xs font-medium rounded-full text-amber-300 bg-amber-400/10 "
                    key={`${name}-${tool}-${index}`}
                  >
                    {tool}
                  </li>
                );
              })}
            </ul>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ProjectsCard;
