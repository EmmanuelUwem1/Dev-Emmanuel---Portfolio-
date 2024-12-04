import Image from "next/image";
import socialsData from "./socialsData";
function Socials() {
  const socials = socialsData.slice(0);
  return (
    <div className="flex w-full justify-between">
      {socials.map((social) => (
        <a
          href={social.href}
          target="_blank"
          className="flex relative h-6 w-6 overflow-hidden hover:bg-slate-800 transition-all p-4 rounded-full"
          key={social.title}
        >
          <Image alt={social.title} src={social.icon} layout="fill"></Image>
        </a>
      ))}
    </div>
  );
}

export default Socials;
