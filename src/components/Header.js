"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import HamburgerMenu from "./hamburgerMenu";
import Nav from "./nav";

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
    setHamMenu(!HamMenuIsOpen); // Close the menu when a nav link is clicked
  }

  return (
    <header
      className={`${
        scrollTop > 1 ? "active" : ""
      } flex justify-between items-center px-4 md:px-20 h-20 md:h-28 w-full fixed z-[1000]`}
    >
      <Link href={"/"}>
        <div className="logo">
          <span className="logo-">Emma</span>
          <span className="logo-yellow">.</span>
          <span className="logo-blue">Dev</span>
        </div>
      </Link>
      <Nav state={HamMenuIsOpen} onClick={handleNavLinkClick} />
      <HamburgerMenu state={HamMenuIsOpen} onClick={handleNavLinkClick} />
    </header>
  );
}

export default Header;
