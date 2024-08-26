import BoxReveal from "@/components/BoxReveal";
import Image from "next/image";
import React from "react";
import { MarqueeDemo } from "./components/MarqueeDemo";
import SparklesText from "@/components/Sparkles";
import ButtonGlobal from "@/components/Button";

const AboutUs = () => {
  return (
    <>
      <div className="container p-4 flex items-center flex-col md:flex-row">
        <BoxReveal boxColor={"#db2777"} duration={0.5}>
          <SparklesText
            text="Our Mentors"
            className="font-bold text-xl md:text-2xl xl:text-[40px] md:leading-[40px] lg:leading-[50px] text-start"
          />
        </BoxReveal>

        <MarqueeDemo />
      </div>
      <div className="container px-4 lg:px-0 flex gap-8 flex-col md:flex-row">
        <div className="w-full lg:w-1/2">
          <Image
            alt="About US"
            src={
              "https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={500}
            height={500}
            className="w-full  h-full md:h-full object-cover object-center hover:object-top transition-all duration-500 rounded-2xl"
          />
        </div>
        <div className="w-full lg:w-1/2 flex gap-4 md:gap-8 flex-col">
          <BoxReveal boxColor={"#db2777"} duration={0.5}>
            <SparklesText
              text="Tukang Koding helps you Become Experienced"
              className="font-bold text-xl md:text-2xl xl:text-[40px] md:leading-[40px] lg:leading-[50px] text-start"
            />
          </BoxReveal>
          <BoxReveal boxColor={"#db2777"} duration={0.3}>
            <p className="font-medium text-[#230F0F] text-base md:text-lg lg:text-xl ">
              Owlearn provides e-learning solutions for companies, universities
              and individual professionals. It allows users to create courses,
              and provides an integrated learning management system. Its
              offerings include digital course tools, study materials, IT
              infrastructure and other operations.
            </p>
          </BoxReveal>
          <div>
            <ButtonGlobal fill>Become a Member</ButtonGlobal>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
