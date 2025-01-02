"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion'
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
        className="hero px-4 flex flex-col items-center justify-center md:px-20 py-20 md:pt-28 b-rounded-bottom overflow-hidden relative"
        id="hero"
      >
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-full bg-gray-800 h-40 w-40 mb-8 overflow-hidden relative flex justify-center items-center object-cover"
        >
          <Image
            className="flex h-full w-full"
            alt="Emmanuel Uwem"
            src={"/Emmanuel Uwem.jpg"}
            height={1500}
            width={1500}
          />
        </motion.span>
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
              className={"font-audiowide text-4xl sm:text-6xl md:text-7xl cursor-pointer"}
            >
              {text}
            </motion.span>
          ))}
        </span>
        <div className="text-xl pt-6 opacity-55 w-full text-center md:w-[70%] turret-road-regular montserrat-normal">
          {width > limit
            ? `Building digital products, enhancing brands, and creating beautiful
          user experiences. Bringing creativity and technical expertise to every
          project to ensure your digital presence stands out.`
            : `Building digital products, enhancing brands, and creating beautiful
          user experiences.`}
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
