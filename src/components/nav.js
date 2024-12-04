import React from 'react'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

function Nav(props) {
    const path = usePathname();
    
 
    const navlinks = [
  { title: "Home", href:"/" },
  { title: "Services", href:"services" },
  { title: "Portfolio" , href:"portfolio" },
  { title: "Contact", href:"contact" },
    ];
    
   
   
    
    const desktopLinks = navlinks.slice(0, 3);
    return (
      <>
        <nav className="hidden md:flex justify-between gap-16">
          {desktopLinks.map((link) => (
            <Link
              key={link.title}
              className={`${
                path == link.href ? "active-link" : "nav-Link"
              } nav-link`}
              href={link.href}
            >
              {link.title}
            </Link>
          ))}
        </nav>
        <div
          className={`side-nav flex   gap-16 ${
            props.state == true ? "open" : ""
          }`}
        >
          <a href="mailto: name@email.com" className="hire">
            Hire Me
          </a>
          {navlinks.map((link, index) => (
            <Link
              href={link.href}
              key={link.title}
              className={`${
                path == link.href
                  ? "active-link side-nav-link"
                  : "side-nav-link"
              } ""`}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </>
    );
    
 
}

export default Nav