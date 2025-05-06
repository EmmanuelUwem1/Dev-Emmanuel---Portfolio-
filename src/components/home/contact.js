import Image from "next/image";
import Socials from "../socials";

function Contact() {
  return (
    <section className="px-4 flex gap-4 flex-col items-center justify-start md:px-20 py-20 md:pt-28 b-rounded-bottom overflow-hidden relative" id="contact">
      <span className="text-sm montserrat-normal md:top-16 md:right-4 top-8 right-0 w-32 flex justify-center items-center text-justify border-2 border-transparent rounded-full px-1 py-2 bg-slate-800">
        Contact me
      </span>

      <div className="flex flex-col w-full justify-center items-center">
        <h2 className="montserrat-normal font-bold text-2xl md:text-4xl text-center opacity-90 w-[90%] md:w-[80%]">
          {`I'll be Glad to work with you on your project`}
        </h2>
        <span className="flex relative h-44 w-48 opacity-80">
          <Image
            alt="Handshake"
            src={"/handshake gif.gif"}
            layout="fill"
            unoptimized
          ></Image>
              </span>
              
              <div className="flex flex-col justify-between items-center card w-full sm:w-[50%] rounded-lg h-40 pb-8">
                  <h2 className="flex w-full text-center justify-center items-center py-4 h-fit text-3xl opacity-80 montserrat-normal font-bold text-gradient">Reach out to me on</h2>

                  <div className="w-2/3"><Socials/></div>
            </div>
      </div>
    </section>
  );
}

export default Contact;
