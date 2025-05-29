"use client";

import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Bungee_Hairline,
  Audiowide,
  Montserrat,
  Lato,
  Funnel_Display,
  Monoton,
  Turret_Road,
} from "next/font/google";
import { useEffect } from "react";

const bungeeHairline = Bungee_Hairline({ subsets: ["latin"], weight: "400" });
const audiowide = Audiowide({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
});
const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
});
const monoton = Monoton({ subsets: ["latin"], weight: "400" });
const turretRoad = Turret_Road({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700", "800"],
});

export default function RootLayout({ children }) {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Explore the portfolio of a visionary front-end developer, where creativity meets cutting-edge technology. Discover innovative web designs, seamless user experiences, and a mastery of HTML, CSS, JavaScript, and React. Elevate your digital presence with a developer who transforms ideas into interactive art, delivering exceptional results that captivate and inspire."
        />
        <meta
          name="keywords"
          content="Front-End Developer, Web Developer, HTML, CSS, JavaScript, React Developer, UI/UX Design, Responsive Web Design, Web Development Portfolio, Interactive Web Design, Creative Web Solutions, Modern Web Technologies, Front-End Development Services, Innovative Web Design, Professional Web Developer, Custom Web Applications, User Experience Design, Web Animation, Web Performance Optimization, Cross-Browser Compatibility"
        />
        <meta name="author" content="Emmanuel Uwem" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <title>Dev Emmanuel || Portfolio</title>
        <style jsx global>{`
          :root {
            --bungee-hairline: ${bungeeHairline.style.fontFamily};
            --audiowide: ${audiowide.style.fontFamily};
            --montserrat: ${montserrat.style.fontFamily};
            --lato: ${lato.style.fontFamily};
            --funnel-display: ${funnelDisplay.style.fontFamily};
            --monoton: ${monoton.style.fontFamily};
            --turret-road: ${turretRoad.style.fontFamily};
          }
        `}</style>
      </head>
      <body className="antialiased">
        <Header />
        <main className="overflow-hidden min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
