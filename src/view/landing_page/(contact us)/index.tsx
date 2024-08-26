import BoxReveal from "@/components/BoxReveal";
import PulsatingButton from "@/components/PulsatingButton";
import SparklesText from "@/components/Sparkles";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-pink-600 max-h-fit" id="contact">
      <div className="container flex w-full h-full px-4">
        <div className="md:w-1/2 w-full py-20 flex flex-col gap-8 lg:gap-16">
          <BoxReveal boxColor={"#ffffff"} duration={0.5}>
            <SparklesText
              className="text-white font-bold text-xl md:text-2xl xl:text-6xl"
              text="Still confused about your career choice? consult with our experts"
            />
          </BoxReveal>
          {/* <h3 className="text-white font-bold text-xl md:text-2xl xl:text-6xl">
              Still confused about your career choice? consult with our experts
            </h3> */}
          <Link href={"/#contact"}>
            <PulsatingButton
              className="px-4 py-2 md:px-6 md:py-4 font-bold text-pink-600"
              pulseColor="#ffffff"
            >
              Contact Us
            </PulsatingButton>
          </Link>
        </div>
        <div className="w-1/2 max-h-fit overflow-hidden  items-center justify-center hidden md:flex">
          <div className="w-full h-full relative flex items-end justify-center">
            <div className="absolute translate-y-20 bg-pink-700/50 size-80 xl:size-[500px] rounded-full mx-auto" />
            <Image
              src={"/images/student_learning.png"}
              alt="contact us"
              width={1000}
              height={1000}
              className=" w-[550px] z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
