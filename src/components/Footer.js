
import Link from "next/link";

function Footer() {
  return (
    <footer className="px-4 md:px-20 flex sm:justify-center justify-between items-center gap-0 sm:gap-8 montserrat-normal font-extralight">
      <span className="text-sm flex items-center justify-between align-middle gap-4">
        <span className="align-middle">&copy; 2025 </span>
        <Link href={"/"}>
          <div className="logo align-middle">
            <span className="opacity-80">Emma</span>
            <span className="logo-yellow">.</span>
            <span className="logo-blue">Dev</span>
          </div>
        </Link>{" "}
      </span>
      <span className="text-sm">Built with &#128153; from Nigeria</span>
    </footer>
  );
}

export default Footer