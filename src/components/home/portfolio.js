"use client";
import projectsData from "./portfolioData";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";


function Portfolio() {
 

  return (
    <section
      className="px-4 py-8 flex flex-col gap-6 md:justify-center justify-start items-center min-h-screen w-full mt-28 flex-wrap md:flex-nowrap overflow-hidden mesh-gradient relative"
      id="portfolio"
    >
      <span className="text-sm montserrat-normal md:top-16 md:left-4 top-8 left-0 w-32 flex justify-center items-center text-justify border-2 border-transparent rounded-full px-1 py-2 bg-slate-800">
        Portfolio
      </span>

      <h2 className="montserrat-normal font-bold text-4xl text-center opacity-90 w-full md:w-[90%]">
        <span className="text-gradient montserrat-normal font-bold md:text-4xl text-2xl text-transparent">
          Some of my Works
        </span>
      </h2>

      <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-6 relative calc-height w-fit mt-0 ">
        {projectsData.map((project) => (
          <div
            key={project.title}
            className="project-card relative rounded-2xl w-fit overflow-hidden h-[17rem] opacity-1 p-4 border-2 border-white transition-all animated-border"
          >
            <span className="relative block h-60 w-80 overflow-hidden rounded-lg z-[200]">
              <Image
                alt={project.title}
                src={project.image}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="rounded-lg overflow-hidden"
              />
            </span>
            <div className="relative pt-6 flex w-full flex-col gap-1 justify-center items-start">
              <span className="montserrat-normal font-bold opacity-90 ">
                {project.title}
              </span>
              <span className="montserrat-normal font-normal text-base opacity-80">
                {project.description}
              </span>
            </div>
            <div className="relative pt-6 flex w-full gap-2 justify-start items-center">
              <span className="montserrat-normal font-bold opacity-90 ">
                Built with :
              </span>
              <div className="max-h-12 relative overflow-hidden">
                  <Marquee
                        play={true}
                        pauseOnHover={false}
                        pauseOnClick={false}
                        direction="left"
                        speed={70}
                        loop={0}
                        autoFill={true}
                        gradient={true}
                        gradientColor="#03001a"
                        gradientWidth={10}
                        className="flex w-full flex-nowrap justify-between"
                      >
                        {project.stack.map((stack, index) => (
                          <span key={index} className="relative flex h-8 w-8 items-center justify-center"><Image alt=" stack" src={stack}
                            objectFit="contain"
                            layout="fill"
                          objectPosition="center"></Image></span>
                        ))}
                      </Marquee>
              </div>
            </div>
            <div className="flex justify-start items-center gap-8 w-full h-8 relative py-6">
              <a
                href={project.github}
                target="_blank"
                className="px-6 py-2 rounded-full bg-white opacity-80 text-black text-opacity-80 text-base font-semibold montserrat-normal flex justify-center items-center transition-all hover:bg-slate-600"
              >
                GitHub
              </a>
              <a
                href={project.href}
                target="_blank"
                className="px-6 py-2 rounded-full border border-white text-white text-opacity-80 text-base font-semibold montserrat-normal flex justify-center items-center transition-all hover:bg-slate-600"
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
