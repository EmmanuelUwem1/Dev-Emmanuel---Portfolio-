"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Sling as HamburgerSling } from "hamburger-react";
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
      <Nav state={ HamMenuIsOpen}/>
      
      <div className="relative z-[2500] rounded-md" onClick={HandleHamMenu}>
        <HamburgerSling
          size={25}
          direction="right"
          duration={0.8}
          distance="lg"
          rounded
          label="Show menu"
          color="#ffff"
          easing="ease-in"
        />
      </div>
     
    </header>
  );
}

export default Header;
