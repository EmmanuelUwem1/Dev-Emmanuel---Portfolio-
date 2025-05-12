"use client";
import React, { useEffect, useRef } from "react";
import projectsData from "./portfolioData";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Portfolio() {
  // gsap.registerPlugin(ScrollTrigger);
  // const containerRef = useRef(null);

  // useEffect(() => {
  //   const items = document.querySelectorAll(".project-card");

  

  //   // Mobile-specific animation
  //   if (window.innerWidth > 768) {
     

  //     // Pin the portfolio section
  //     ScrollTrigger.create({
  //       trigger: containerRef.current,
  //       start: "top top",
  //       end: () => `+=${window.innerHeight * items.length}`,
  //       pin: true,
  //     });
  //     // Desktop animation (original)
  //     items.forEach((item, index) => {
  //       gsap.fromTo(
  //         item,
  //         { height: "20rem", opacity: 0, y: 100 },
  //         {
  //           height: "30rem",
  //           opacity: 1,
  //           y: 0,
  //           duration: 0.5,
  //           ease: "power2.out",
  //           scrollTrigger: {
  //             trigger: item,
  //             start: `top+=${index * window.innerHeight * 0.4} center`, // Dynamically adjust spacing based on viewport height
  //             end: "bottom center",
  //             toggleActions: "play none none reverse", // Prevents all items from animating together
  //           },
  //         }
  //       );
  //     });
  //   }
  // }, []);

  return (
    <section
      // ref={containerRef}
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

      <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-4 relative items-center h-full w-full mt-0 ">
        {projectsData.map((project) => (
          <Link
            href={project.href}
            key={project.title}
            className="project-card relative flex flex-col justify-between rounded-2xl w-fit opacity-1 overflow-hidden p-4 border-2 border-white transition-all animated-border"
          >
            <span className="relative h-fit bg-slate-800 overflow-hidden rounded-lg z-[200]">
              <Image
                alt={project.title}
                src={project.image}
                width={320}
                height={240}
                className="rounded-lg"
              />
            </span>
            <div className="absolute flex w-full flex-col gap-1 justify-center items-start">
              <span className="montserrat-normal font-bold opacity-90 ">
                {project.title}
              </span>
              <span className="montserrat-normal font-normal text-base opacity-80">
                {project.description}
              </span>
            </div>
            {/* <div className="flex justify-center items-center gap-8 w-full h-8 absolute bottom-6 left-0 z-[1]">
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
            </div> */}
          </Link>
        ))}
      </div>
      {/* <div className="pt-4">
        <Link
          href="/portfolio"
          className="px-10 py-3 mt-8 rounded-full bg-white text-black text-opacity-80 text-base font-semibold montserrat-normal flex justify-center items-center transition-all hover:bg-slate-600"
        >
          See More
        </Link>
      </div> */}
    </section>
  );
}

export default Portfolio;
