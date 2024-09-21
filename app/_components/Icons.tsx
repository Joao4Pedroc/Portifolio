import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Icons() {
  return (
    <div className="flex gap-2">
      <a
        href="https://www.linkedin.com/in/jo%C3%A3o-pedro-de-castro-silva-40232a2a4/"
        target="_blank"
        className="lg:text-3xl text-2xl"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/Joao4Pedroc"
        target="_blank"
        className="lg:text-3xl text-2xl "
      >
        <FaGithub />
      </a>
      <a
        href="https://instagram.com/jotape_castro4"
        target="_blank"
        className="lg:text-3xl text-2xl "
      >
        <FaInstagram />
      </a>
    </div>
  );
}

export default Icons;
