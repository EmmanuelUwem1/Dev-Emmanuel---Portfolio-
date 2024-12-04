
import Link from "next/link";

function Footer() {
  return (
    <footer className="px-4 md:px-20 flex sm:justify-center justify-between items-center md:gap-20 montserrat-normal font-extralight ">
      <span className="text-sm flex items-center justify-between align-middle gap-4">
        <span className="align-middle">&copy; 2024 </span>
        <Link href={"/"}>
          <div className="logo align-middle">
            <span className="text-sm opacity-80">Emma</span>
            <span className="logo-yellow text-sm">.</span>
            <span className="logo-blue text-sm">Dev</span>
          </div>
        </Link>{" "}
      </span>
      <span className="text-sm">Built with &#128153; from Nigeria</span>
    </footer>
  );
}

export default Footer