import React from "react";
import projectsData from "./portfolioData";
import Image from "next/image";
import Link from "next/link";
function Portfolio() {
  const projects = projectsData.slice(0);
  return (
    <section
      className="px-4 flex flex-col items-center justify-start md:px-20 py-20 md:pt-28 b-rounded-bottom overflow-hidden relative mesh-gradient"
      id="portfolio"
    >
      <span className="text-sm montserrat-normal absolute md:top-16 md:left-4 top-8 left-0 -rotate-45 w-32 flex justify-center items-center text-justify border-2 border-transparent rounded-full px-1 py-2 bg-slate-800">
        Portfolio
      </span>

      <h2 className="montserrat-normal font-bold text-4xl text-center opacity-90 w-full md:w-[90%]">
        <span className="text-gradient montserrat-normal font-bold md:text-4xl text-2xl text-transparent">
          Some of my Projects
        </span>
      </h2>

      <div className="flex flex-row gap-6 justify-center items-center h-full w-full mt-28 flex-wrap md:flex-nowrap">
        {projects.map((project) => (
          <div
            target="_blank"
            href={project.href}
            key={project.title}
            className="project-card flex flex-col   bg-slate-800 rounded-2xl w-fit h-64 overflow-hidden p-4 relative "
          >
            <span className="relative h-full bg-slate-800 overflow-hidden rounded-lg z-[200]">
              <Image
                alt={project.title}
                src={project.image}
                // layout="fill"
                width={320}
                height={240}
                className="rounded-lg"
              ></Image>
            </span>
            <div className="flex justify-center items-center gap-8 w-full h-8 absolute bottom-6 left-0 z-[1]">
              <a
                href={project.github}
                target="_blank"
                className="px-6 py-2 rounded-full bg-white text-black text-opacity-80 text-base font-semibold montserrat-normal flex justify-center items-center transition-all hover:bg-slate-600"
              >
                GitHub
              </a>
              <a
                href={project.href}
                target="_blank"
                className="px-6 py-2 rounded-full border-2 border-white text-white text-opacity-80 text-base font-semibold montserrat-normal flex justify-center items-center transition-all hover:bg-slate-600"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-4">
        <Link
          href="/portfolio"
          className="px-10 py-3 mt-8 rounded-full bg-white text-black text-opacity-80 text-base font-semibold montserrat-normal flex justify-center items-center transition-all hover:bg-slate-600"
        >
          See More
        </Link>
      </div>
    </section>
  );
}

export default Portfolio;
