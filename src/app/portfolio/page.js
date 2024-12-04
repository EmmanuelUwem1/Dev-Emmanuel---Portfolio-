import Image from "next/image";
function Portfolio() {
  return (
    <div className="px-4 flex flex-col gap-8 items-center justify-start md:px-20 py-20 md:pt-28 b-rounded-bottom overflow-hidden relative">
      <div className="relative flex h-52 sm:h-96 w-[80%] lg:w-1/2 overflow-hidden rounded-2xl opacity-80">
        <Image
          alt="under construction"
          src={"/under construction.jpg"}
          layout="fill"
        ></Image>
      </div>
      <div className="flex justify-center items-center montserrat-normal font-extrabold text-xl md:text-3xl opacity-80">
        This page is under construction
      </div>
    </div>
  );
}

export default Portfolio;
