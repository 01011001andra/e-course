"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import ButtonGlobal from "@/components/Button";
import DotPattern from "@/components/DotPattern";
import { cn } from "@/lib/utils";
import BoxReveal from "@/components/BoxReveal";
import Meteors from "@/components/Meteors";

const Hero = () => {
  const constraintsRef1 = React.useRef(null);

  return (
    <div
      className="container flex flex-col lg:flex-row-reverse min-h-[87vh] md:min-h-[60vh] xl:min-h-[80vh] "
      draggable={false}
      onDragStart={(e) => e.preventDefault()}
    >
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
      <div
        className="w-full lg:w-1/2 items-center justify-center flex "
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
      >
        <div
          className="relative"
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
        >
          <Image
            loading="lazy"
            src={"/images/hero.png"}
            alt="hero"
            width={1000}
            height={1000}
            className="w-96 lg:w-[550px] h-96 lg:h-[550px] select-none pointer-events-none"
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
          />
          {/* <motion.img src={"/images/hero_vid1.png"} /> */}
          <motion.div
            className="absolute w-full h-full top-0  cursor-pointer"
            ref={constraintsRef1}
          >
            <motion.div
              drag
              dragConstraints={constraintsRef1}
              className="absolute bottom-10 right-10 sm:right-20 w-16 sm:w-20 lg:w-28"
              animate={{
                y: ["0%", "-20%", "0%"], // Adjust these values for the desired floating effect
              }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <Image
                loading="lazy"
                draggable
                className="w-full h-full pointer-events-none"
                src="/images/hero_vid1.png"
                alt="hero"
                width={100}
                height={100}
              />
            </motion.div>
            <motion.div
              drag
              dragConstraints={constraintsRef1}
              className="absolute bottom-28 left-5 sm:left-0  w-16 sm:w-20 lg:w-28"
              animate={{
                y: ["0%", "-20%", "0%"], // Adjust these values for the desired floating effect
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <Image
                loading="lazy"
                draggable
                className="w-full h-full pointer-events-none"
                src={"/images/hero_vid2.png"}
                alt="hero"
                width={100}
                height={100}
              />
            </motion.div>
            <motion.div
              drag
              dragConstraints={constraintsRef1}
              className="absolute top-10 sm:top-0 right-16 sm:right-0  w-16 sm:w-20 lg:w-28"
              animate={{
                y: ["0%", "-20%", "0%"], // Adjust these values for the desired floating effect
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <Image
                loading="lazy"
                draggable
                className="w-full h-full pointer-events-none"
                src={"/images/hero_vid3.png"}
                alt="hero"
                width={100}
                height={100}
              />
            </motion.div>
            <motion.div
              drag
              dragConstraints={constraintsRef1}
              className="absolute bottom-48 right-5  w-16 sm:w-20 lg:w-28"
              animate={{
                y: ["0%", "-20%", "0%"], // Adjust these values for the desired floating effect
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <Image
                loading="lazy"
                draggable
                className="w-full h-full pointer-events-none"
                src={"/images/hero_book.png"}
                alt="hero"
                width={80}
                height={80}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex gap-4 md:gap-6 lg:gap-8 flex-col justify-center md:items-center xl:items-start px-4 lg:px-0">
        <BoxReveal boxColor={"#db2777"} duration={0.2}>
          <div className="flex flex-col">
            <Meteors number={20} />
            <h1 className="text-2xl md:text-3xl lg:text-[68px] font-bold lg:leading-[80px] z-50">
              Learn Any Skills to advance your career path
            </h1>
          </div>
        </BoxReveal>
        <BoxReveal boxColor={"#db2777"} duration={0.4}>
          <p className="text-base lg:text-xl max-w-lg">
            Want to improve your work skills? You need to study harder with the
            help of a great mentor to improve your performance at work
          </p>
        </BoxReveal>
        <div className="flex flex-col md:flex-row-reverse gap-6 md:items-center">
          <div className="flex gap-6 items-center">
            <div className="flex ">
              <div className="size-12 border border-pink-600 -mr-4 bg-red-600 rounded-full"></div>
              <div className="size-12 border border-pink-600 -mr-4 bg-green-600 rounded-full"></div>
              <div className="size-12 border border-pink-600 -mr-4 bg-blue-600 rounded-full"></div>
            </div>
            {/* RATING */}
            <div className="flex flex-col gap-1">
              {/* STAR */}
              <div className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4"
                  viewBox="0 0 32 32"
                >
                  <defs>
                    <linearGradient id="rate_1">
                      <stop offset="50%" stopColor="orange" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#grad)"
                    d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
  l11.547-1.2L16.026,0.6L20.388,10.918z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4"
                  viewBox="0 0 32 32"
                >
                  <defs>
                    <linearGradient id="rate_2">
                      <stop offset="50%" stopColor="orange" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#grad)"
                    d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
  l11.547-1.2L16.026,0.6L20.388,10.918z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4"
                  viewBox="0 0 32 32"
                >
                  <defs>
                    <linearGradient id="grad">
                      <stop offset="50%" stopColor="orange" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#grad)"
                    d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
  l11.547-1.2L16.026,0.6L20.388,10.918z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4"
                  viewBox="0 0 32 32"
                >
                  <defs>
                    <linearGradient id="grad">
                      <stop offset="50%" stopColor="orange" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#grad)"
                    d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
  l11.547-1.2L16.026,0.6L20.388,10.918z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4"
                  viewBox="0 0 32 32"
                >
                  <defs>
                    <linearGradient id="grad">
                      <stop offset="50%" stopColor="orange" />
                      <stop offset="50%" stopColor="grey" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#grad)"
                    d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
  l11.547-1.2L16.026,0.6L20.388,10.918z"
                  />
                </svg>
              </div>

              <BoxReveal boxColor={"#db2777"} duration={0.5}>
                <small className="font-semibold text-xs">
                  (5/5 dari 10k Alumni)
                </small>
              </BoxReveal>
            </div>
          </div>
          <div>
            <ButtonGlobal fill>Explore Path</ButtonGlobal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
