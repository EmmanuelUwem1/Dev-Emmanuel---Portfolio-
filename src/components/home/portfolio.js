"use client";
import React, { useEffect, useRef } from "react";
import projectsData from "./portfolioData";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Portfolio() {
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef(null);

  useEffect(() => {
    const items = document.querySelectorAll(".project-card");

    // Pin the section
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: () => `+=${window.innerHeight * items.length}`,
      pin: true,
    });

    // Animate each item one at a time
    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 100, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top center",
            end: "top center",
            toggleActions: "play none none reverse",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="px-4 flex flex-col gap-6 justify-center items-center h-fit w-full mt-28 flex-wrap md:flex-nowrap overflow-hidden relative mesh-gradient"
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

      <div className="flex flex-row gap-6 justify-center items-center h-fit w-full mt-28 flex-wrap md:flex-nowrap">
        {projectsData.map((project) => (
          <div
            key={project.title}
            className="project-card flex flex-col justify-between card rounded-2xl w-fit h-64 overflow-hidden p-4 relative opacity-0 transform translate-y-20"
          >
            <span className="relative h-full bg-slate-800 overflow-hidden rounded-lg z-[200]">
              <Image
                alt={project.title}
                src={project.image}
                width={320}
                height={240}
                className="rounded-lg"
              />
            </span>
            <div className="absolute bottom-[30%] flex w-full flex-col gap-1 justify-center items-start">
              <span className="montserrat-normal font-bold opacity-90 ">
                {project.title}
              </span>
              <span className="montserrat-normal font-normal text-base opacity-80">
                {project.description}
              </span>
            </div>
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
