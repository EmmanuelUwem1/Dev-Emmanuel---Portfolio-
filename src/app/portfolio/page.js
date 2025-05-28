"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import projectsData from "@/components/home/portfolioData";
function Portfolio() {
  return (
    <div className="px-4 flex flex-col gap-8 items-center justify-start md:px-20 py-20 md:pt-28 b-rounded-bottom overflow-hidden relative">
      <h1 className="montserrat-normal text-3xl md:text-4xl font-bold text-center">
        My Portfolio
      </h1>
     <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-6 relative h-full transition-class w-fit mt-0 ">
            {projectsData.map((project, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                }}
                key={project.title}
                className="project-card relative rounded-2xl w-full overflow-hidden h-[17rem] opacity-1 p-4 border-2 border-white transition-all animated-border"
              >
                <span className="relative block h-60 w-80 overflow-hidden rounded-lg z-[200]">
                  <Image
                    alt={project.title}
                    src={project.image}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                    className="rounded-lg"
                  />
                </span>
                <div className="relative pt-3 flex flex-col gap-1 justify-center items-start w-80">
                  <span className="montserrat-normal font-bold opacity-90 ">
                    {project.title}
                  </span>
                  <span className="montserrat-normal font-normal  opacity-60 text-xs">
                    {project.description}
                  </span>
                </div>
                <div className="relative pt-3 flex w-80 gap-2 justify-start items-center">
                  <span className="montserrat-normal text-sm font-bold opacity-90 ">
                    Built with :
                  </span>
                  <div className="max-h-12 opacity-80 my-2 flex relative overflow-hidden gap-2 rounded-full bg-[#4b4b7a3a] px-3 py-2">
                    {project.stack.map((stack, index) => (
                      <span
                        key={index}
                        className="relative flex h-6 w-6 items-center justify-center"
                      >
                        <Image
                          alt=" stack"
                          src={stack}
                          objectFit="contain"
                          layout="fill"
                          objectPosition="center"
                        ></Image>
                      </span>
                    ))}
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
              </motion.div>
            ))}
          </div>
    </div>
  );
}

export default Portfolio;
