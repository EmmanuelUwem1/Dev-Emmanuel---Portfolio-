import React from "react";
import Link from "next/link";
import { useState } from "react";
import Socials from "./socials";

function Nav(props) {
  const [location, setLocation] = useState("/");



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
              location == link.href ? "active-link" : "nav-Link"
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
      <div
        className={`side-nav flex justify-start ${
          props.state == true ? "open" : ""
        }`}
      >
        <a href="mailto: emmanueluwem560@gmail.com" className="hire">
          Hire Me
        </a>
        {navlinks.map((link) => (
          <Link
            href={link.href}
            key={link.title}
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
        ))}
        <div className="flex w-[80%] relative md:w-[40%] pt-6">
          <Socials />
        </div>
      </div>
    </>
  );
}

export default Nav;
