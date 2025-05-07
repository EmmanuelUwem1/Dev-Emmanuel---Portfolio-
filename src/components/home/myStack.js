import myStackData from "./myStackData";
import Image from "next/image";
import Marquee from "react-fast-marquee";
function MyStack() {
  const stacks = myStackData.slice(0);
  return (
    <div className="px-4 flex flex-col gap-16 h-fit items-center justify-center md:px-20 py-20 md:pt-28 b-rounded-bottom overflow-hidden relative">
      <span className="text-sm montserrat-normal md:top-16 right-4 top-8 w-32 flex justify-center items-center text-justify border-2 border-transparent rounded-full px-1 py-2 bg-slate-800">
        My Stack
      </span>

      <Marquee
        play={true}
        pauseOnHover={false}
        pauseOnClick={false}
        direction="right"
        speed={40}
        loop={0}
        autoFill={true}
        gradient={true}
        gradientColor="#03001a"
        gradientWidth={20}
        className="flex w-full flex-nowrap justify-between"
      >
        {stacks.map((stack) => (
          <div
            key={stack.title}
            className="flex flex-col justify-between ml-5 items-center gap-6 h-48 sm:h-52 w-36 sm:w-40 md:h-56 md:w-44 card rounded-md pb-2 opacity-90"
          >
            <span className="relative flex w-full h-full">
              <Image
                alt={stack.title}
                src={stack.icon}
                layout="fill"
                className="rounded-3xl"
              ></Image>
            </span>
            <span className="montserrat-normal font-bold text-lg opacity-85">
              {stack.title}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default MyStack;
