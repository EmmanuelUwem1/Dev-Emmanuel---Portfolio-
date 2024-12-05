import React from "react";
import servicesData from "./servicesData";
import Image from "next/image";

function Services() {
  const data = servicesData.slice(0);
  return (
    <section className="px-4 flex flex-col gap-8 items-center justify-start md:px-20 py-20 md:pt-28 b-rounded-bottom overflow-hidden relative" id="services">
      <span className="text-sm montserrat-normal absolute md:top-16 md:left-4 top-8 left-0 -rotate-45 w-32 flex justify-center items-center text-justify border-2 border-transparent rounded-full px-1 py-2 bg-slate-800 ">
        Services
      </span>
      <h2 className="montserrat-normal font-bold text-2xl md:text-4xl text-center opacity-90 w-[90%] md:w-[80%]">
        Working together with brands and agencies to deliver{" "}
        <span className="text-gradient montserrat-normal font-bold md:text-4xl text-2xl text-transparent">
          impactful results
        </span>
      </h2>
      <div className="flex gap-6 mt-20 w-full sm:justify-center sm:items-center lg:w-[80%] flex-wrap md:flex-nowrap justify-start">
        {data.map((service) => (
          <div
            key={service.title}
            className="flex flex-col w-full sm:w-80  bg-slate-800 rounded-2xl h-96 overflow-hidden px-4 pt-4 pb-6"
          >
            <span className="relative h-[70%] sm:h-[60%] opacity-80">
              <Image
                alt={service.title}
                src={service.illustration}
                layout="fill"
                className="rounded-lg"
                unoptimized
              ></Image>
            </span>
            <span className="flex justify-start items-center text-left montserrat-normal font-bold pt-4">
              {service.title}
            </span>
            <span className="flex font-extralight montserrat-normal">{service.text}</span>
          </div>
        ))}
        
      </div>
    </section>
  );
}

export default Services;
