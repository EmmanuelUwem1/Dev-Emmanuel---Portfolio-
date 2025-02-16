"use client";

import { Variants } from "motion/react";
import * as motion from "motion/react-client";
import { useEffect, useRef, useState } from "react";

import React from "react";
import Link from "next/link";
import Socials from "./socials";
import { delay } from "motion";

const sidebarVariants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};


const navLinkVariants = (index) => ({
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 },
      delay: index * 0.2, // Increase delay based on index
      duration: 0.5, // Increase duration of the animation
    },
  },
  closed: {
    x: 50, // Animate from the right
    opacity: 0,
    transition: {
      x: { stiffness: 1000 },
      duration: 0.5, // Increase duration of the animation
    },
  },
});

const socialsVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50, // Animate from the bottom
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

function Nav(props) {
  const [location, setLocation] = useState("/");

  const containerRef = useRef(null);

  const navlinks = [
    { title: "Home", href: "/" },
    { title: "Services", href: "#services" },
    { title: "Portfolio", href: "#portfolio" },
    { title: "Contact", href: "#contact" },
    { title: "Blog", href: "blog" },
  ];

  const desktopLinks = navlinks.slice(0, 3);
  return (
    <>
      <nav className="hidden md:flex justify-between gap-16">
        {desktopLinks.map((link) => (
          <Link
            key={link.title}
            className={`${
              location == link.href ? "active-link" : "nav-link"
            } nav-link`}
            href={link.href}
            onClick={() => {
              setLocation(link.href);
              // props.onClick();
            }}
          >
            {link.title}
          </Link>
        ))}
      </nav>
      <motion.div
        initial={false}
        animate={props.state ? "open" : "closed"}
        ref={containerRef}
        variants={sidebarVariants}
        className={`side-nav flex justify-start ${props.state ? "open" : ""}`}
      >
        <a
          href="mailto: emmanueluwem560@gmail.com"
          className="hire"
       
  
        >
          Hire Me
        </a>
        {navlinks.map((link, index) => (
          <motion.div key={link.title} variants={navLinkVariants(index)}>
            <Link
              href={link.href}
              className={`${
                location == link.href
                  ? "active-link side-nav-link"
                  : "side-nav-link"
              }`}
              onClick={() => {
                setLocation(link.href);
                props.onClick();
              }}
            >
              {link.title}
            </Link>
          </motion.div>
        ))}
        <motion.div
          className="flex w-[80%] relative md:w-[40%] pt-6"
          variants={socialsVariants}
        >
          <Socials />
        </motion.div>
      </motion.div>
    </>
  );
}

export default Nav;
