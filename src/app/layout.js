// ./app/layout.js
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
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
        <link rel="icon" href="/favicon.ico" />
        <title>emma.dev</title>
      </head>
      <body className="antialiased">
        <Header />
        <main className="overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
