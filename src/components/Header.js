"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import HamburgerMenu from "./hamburgerMenu";
import Nav from "./nav";
import Image from "next/image";

function Header() {
  const [HamMenuIsOpen, setHamMenu] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScrollTop = () => setScrollTop(window.scrollY);

    // Set initial value
    handleScrollTop();

    // Add event listener for window scroll
    window.addEventListener("scroll", handleScrollTop);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("scroll", handleScrollTop);
  }, []);

  function HandleHamMenu() {
    setHamMenu(!HamMenuIsOpen);
  }

  function handleNavLinkClick() {
    setHamMenu(false); // Close the menu when a nav link is clicked
  }
  const github = [
    {
      title: "GitHub",
      href: "https://github.com/EmmanuelUwem1",
      icon: "/github.png",
    },
  ];
  const social = github[0];

  return (
    <header
      className={`${
        scrollTop > 1 ? "active" : ""
      } flex justify-between items-center px-4 md:px-20 h-20 md:h-28 w-full fixed transition-width z-[1000]`}
    >
      <Link href={"/"}>
        <div className="logo">
          <span className="logo-">Emma</span>
          <span className="logo-yellow">.</span>
          <span className="logo-blue">Dev</span>
        </div>
      </Link>
      <Nav state={HamMenuIsOpen} onClick={handleNavLinkClick} />
      <div className="flex justify-center items-center gap-3 ">
        <a
                  href={social.href}
                  target="_blank"
                  className="flex relative h-6 w-6 overflow-hidden hover:bg-slate-800 transition-all p-4 rounded-full"
                  key={social.title}
                >
                  <Image alt={social.title} src={social.icon} layout="fill" objectPosition="center" objectFit="contain"></Image>
                </a>
        <HamburgerMenu state={HamMenuIsOpen} onClick={HandleHamMenu} />
      </div>
    </header>
  );
}

export default Header;
