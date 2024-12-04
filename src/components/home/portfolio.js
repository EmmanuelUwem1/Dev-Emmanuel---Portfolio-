import React from "react";
import projectsData from "./portfolioData";
import Image from "next/image";
import Link from "next/link";
function Portfolio() {
  const projects = projectsData.slice(0);
  return (
    <section className="px-4 flex flex-col items-center justify-start md:px-20 py-20 md:pt-28 b-rounded-bottom overflow-hidden relative mesh-gradient" id="portfolio">
      <span className="text-sm montserrat-normal absolute md:top-16 md:left-4 top-8 left-0 -rotate-45 w-32 flex justify-center items-center text-justify border-2 border-transparent rounded-full px-1 py-2 bg-slate-800">
        Portfolio
      </span>

      <h2 className="montserrat-normal font-bold text-4xl text-center opacity-90 w-full md:w-[90%]">
        <span className="text-gradient montserrat-normal font-bold md:text-4xl text-2xl text-transparent">
          Some of my Latest Projects
        </span>
      </h2>

      <div className="flex flex-row gap-6 justify-center items-center  w-full mt-28 flex-wrap md:flex-nowrap">
        {projects.map((project) => (
          <a
            target="_blank"
            href={project.href}
            key={project.title}
            className="flex flex-col w-96 sm:w-96   bg-slate-800 rounded-2xl h-60 md:h-72 overflow-hidden "
          >
            <span className="relative h-full">
              <Image
                alt={project.title}
                src={project.image}
                layout="fill"
                className="rounded-lg"
              ></Image>
            </span>
          </a>
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
