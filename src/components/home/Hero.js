"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function Hero() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Function to update the width state
    const handleResize = () => setWidth(window.innerWidth);

    // Set initial width
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const limit = 600;
  const name = "Emmanuel Uwem";
  const nameToArray = [...name];

  return (
    <section
      className="hero px-4 flex flex-col items-center justify-center md:px-20 py-20 md:pt-36 b-rounded-bottom overflow-hidden relative"
      id="hero"
    >
      <div className="flex justify-center items-center gap-2 rounded-full border border-gray-600 font-medium text-green-700 px-3 py-1 my-3 shimmer">
        {" "}
        <span className="h-2 w-2 rounded-full bg-green-700 "></span>
        Available for work
      </div>
      <span className="">
        {nameToArray.map((text, index) => (
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.2,
              delay: `${index == 0 ? 0.1 : Number(index) / 6}`,
            }}
            key={index}
            className={
              "font-audiowide text-4xl sm:text-5xl md:text-6xl cursor-pointer"
            }
          >
            {text}
          </motion.span>
        ))}
      </span>
      <div className="flex my-4 justify-center items-center border rounded-2xl px-3 py-2 font-semibold text-xl opacity-90 text-gradient">
        Frontend Engineer
      </div>
      <div className="text-xl opacity-55 w-full text-center md:w-[70%] turret-road-regular montserrat-normal">
        {width > limit
          ? `Building digital products, enhancing brands, and creating beautiful
          user experiences. Bringing creativity, precision, and technical excellence to every
          project.`
          : `Building digital products, enhancing brands, bringing creativity, precision, and technical excellence to every
          project.`}
      </div>
      <Link
        href={"#services"}
        className="px-10 py-3 mt-8 rounded-full bg-white text-black text-opacity-80 text-base font-semibold montserrat-normal transition-all hover:bg-slate-600"
      >
        Explore
      </Link>
    </section>
  );
}

export default Hero;
