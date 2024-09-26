"use client";

import { useEffect, useState } from "react";

const sections = ["#experiences", "#projects", "#skills"];

function NavBar() {
  const [activeSection, setActiveSection] = useState();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // get scroll postion
      const buffer = 100; // Buffer to trigger the section change slightly before reaching the exact top

      // Loop through each section to find which one is currently in view
      sections.forEach((section) => {
        const sectionEl = document.querySelector(section);
        if (sectionEl) {
          const sectionTop = sectionEl.offsetTop - buffer;
          const sectionHeight = sectionEl.offsetHeight;

          console.log(sectionTop, sectionHeight);
          // Check if the scroll position is within this section's top and bottom
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(section); // Set this section as active
          }
        }
      });
    };
    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="lg:flex flex-col hidden">
      <ul>
        {sections.map((section) => (
          <li className="my-2" key={section}>
            <a
              href={section}
              className={`group inline-flex items-center ${
                activeSection === section ? "text-white" : "text-zinc-400"
              } `}
            >
              <span
                className={`w-12 group-hover:w-20 border-t-2 mr-2 transition-all ${
                  activeSection === section ? "border-white" : "border-zinc-400"
                }`}
              ></span>
              <span className="uppercase opacity-50 text-sm group-hover:opacity-100">
                {section.replace("#", "")}
              </span>
            </a>
          </li>
        ))}
        {/* <li className="my-2">
          <a href="#experiences" className="group inline-flex items-center">
            <span className="w-12 group-hover:w-20 border-t-2 border-zinc-400 mr-2 group-hover:border-zinc-300 transition-all motion-reduce:transition-none"></span>
            <span className="uppercase opacity-50 text-sm group-hover:opacity-100">
              Experiences
            </span>
          </a>
        </li>
        <li className="my-2">
          <a href="#projects" className="group inline-flex items-center">
            <span className="w-12 group-hover:w-20 border-t-2 border-zinc-400 mr-2 group-hover:border-zinc-300 transition-all motion-reduce:transition-none"></span>
            <span className="uppercase opacity-50 text-sm group-hover:opacity-100">
              Projects
            </span>
          </a>
        </li>
        <li className="my-2">
          <a href="#skills" className="group inline-flex items-center">
            <span className="w-12 group-hover:w-20 border-t-2 border-zinc-400 mr-2 group-hover:border-zinc-300 transition-all motion-reduce:transition-none"></span>
            <span className="uppercase opacity-50 text-sm group-hover:opacity-100">
              Skills
            </span>
          </a>
        </li> */}
      </ul>
    </nav>
  );
}

export default NavBar;
