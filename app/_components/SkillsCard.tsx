import Image from "next/image";

function SkillsCard() {
  return (
    <div className="text-center py-12">
      <span className="">My skills:</span>
      <div className="grid grid-cols-6 lg:grid-cols-4 py-4 gap-4 items-center ">
        <a href="https://getbootstrap.com/docs/3.4/javascript/" target="_blank">
          <Image
            src="https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg"
            alt="Bootstrap"
            height="50"
            width={50}
          />
        </a>
        <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank">
          <Image
            src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg"
            alt="HTML5"
            height="50"
            width={50}
          />
        </a>
        <a href="https://www.tailwindcss.com/" target="_blank">
          <Image
            src="https://profilinator.rishav.dev/skills-assets/tailwindcss.svg"
            alt="Tailwind CSS"
            height="50"
            width={50}
          />
        </a>
        <a href="https://nextjs.org/" target="_blank">
          <Image
            src="https://profilinator.rishav.dev/skills-assets/nextjs.png"
            alt="NextJS"
            height="50"
            width={50}
          />
        </a>
        <a href="https://www.javascript.com/" target="_blank">
          <Image
            src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg"
            alt="JavaScript"
            height="50"
            width={50}
          />
        </a>
        <a href="https://reactjs.org/" target="_blank">
          <Image
            src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg"
            alt="React"
            height="50"
            width={50}
          />
        </a>
        <a href="https://www.w3schools.com/css/" target="_blank">
          <Image
            src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg"
            alt="CSS3"
            height="50"
            width={50}
          />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank">
          <Image
            src="https://profilinator.rishav.dev/skills-assets/typescript-original.svg"
            alt="TypeScript"
            height="50"
            width={50}
          />
        </a>
        <a href="https://sass-lang.com/" target="_blank">
          <Image
            src="https://profilinator.rishav.dev/skills-assets/sass-original.svg"
            alt="Sass"
            height="50"
            width={50}
          />
        </a>
        <a href="https://www.chartjs.org/" target="_blank">
          <Image
            src="https://profilinator.rishav.dev/skills-assets/logo-title.svg"
            alt="Chart.js"
            height="50"
            width={50}
          />
        </a>
        <a href="https://styled-components.com/" target="_blank">
          <Image
            src="https://stylifycss.com/images/brands/styled-components.png"
            alt="styled Components"
            height="50"
            width={50}
          />
        </a>
        <a href="https://www.mongodb.com/" target="_blank">
          <Image
            src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_plain_wordmark_logo_icon_146423.png"
            alt="MongoDB"
            height="50"
            width={50}
          />
        </a>
        <a href="https://nodejs.org/" target="_blank">
          <Image
            src="https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/10/node-icon.png"
            alt="Node.js"
            height="50"
            width={35}
          />
        </a>
        <a href="https://expressjs.com/" target="_blank">
          <Image
            src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png"
            alt="Express.js"
            height="50"
            width={45}
          />
        </a>
        <a href="https://www.mysql.com/" target="_blank">
          <Image
            src="https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg"
            alt="MySQL"
            height="50"
            width={50}
          />
        </a>
        <a href="https://supabase.com/" target="_blank">
          <Image
            src="https://cf.appdrag.com/dashboard-openvm-clo-b2d42c/uploads/supabase-TAiY.png"
            alt="Supabase"
            height="50"
            width={50}
          />
        </a>
        <a href="https://firebase/" target="_blank">
          <Image
            src="https://miro.medium.com/v2/resize:fit:300/1*R4c8lHBHuH5qyqOtZb3h-w.png"
            alt="Firebase"
            height="50"
            width={50}
          />
        </a>
        <a href="https://aws.amazon.com/" target="_blank">
          <Image
            src="https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Logo.png"
            alt="AWS"
            height="50"
            width={50}
          />
        </a>
      </div>
    </div>
  );
}

export default SkillsCard;
