import myStackData from "./myStackData";
import Image from "next/image";
function MyStack() {
  const stacks = myStackData.slice(0);
  return (
    <section className="px-4 flex flex-col items-center justify-start md:px-20 py-20 md:pt-28 b-rounded-bottom overflow-hidden relative">
      <span className="text-sm montserrat-normal absolute md:top-16 md:right-4 top-8 right-0 rotate-45 w-32 flex justify-center items-center text-justify border-2 border-transparent rounded-full px-1 py-2 bg-slate-800">
        My Stack
      </span>

      <div className="flex gap-4 md:gap-6 w-full flex-wrap justify-center">
        {stacks.map((stack) => (
          <div
            key={stack.title}
            className="flex w-2/5 sm:w-44 flex-col justify-start items-center gap-6 h-44 sm:h-60 bg-slate-900 rounded-md pb-2 opacity-90"
          >
            <span className="relative flex  h-[70%] w-full">
              <Image alt={stack.title} src={stack.icon} layout="fill" className="rounded-3xl"></Image>
            </span>
            <span className="montserrat-normal font-bold text-lg opacity-85">{stack.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyStack;
