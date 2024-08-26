"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";

// import required modules
import { EffectCreative, Navigation } from "swiper/modules";
import DotPattern from "@/components/DotPattern";
import { cn } from "@/lib/utils";
import BoxReveal from "@/components/BoxReveal";
import SparklesText from "@/components/Sparkles";
import { Icon } from "@iconify/react/dist/iconify.js";

const reviewCard = [
  {
    name: "John Smith",
    job: "Frontend Developer",
    image:
      "https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    message:
      "The user interface design principles I learned here significantly improved my skills and boosted my career. The user interface design principles I learned here significantly improved my skills and boosted my careerThe user interface design principles I learned here significantly improved my skills and boosted my careerThe user interface design principles I learned here significantly improved my skills and boosted my careerThe user interface design principles I learned here significantly improved my skills and boosted my careerThe user interface design principles I learned here significantly improved my skills and boosted my careerThe user interface design principles I learned here significantly improved my skills and boosted my careerThe user interface design principles I learned here significantly improved my skills and boosted my careerThe user interface design principles I learned here significantly improved my skills and boosted my careerThe user interface design principles I learned here significantly improved my skills and boosted my career",
  },
  {
    name: "Yandra Muslim",
    job: "Frontend Developer",
    image:
      "https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    message:
      "The courses provided practical insights and hands-on experience that were directly applicable to my job.",
  },
  {
    name: "Alex Smith",
    job: "Frontend Developer",
    image:
      "https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    message:
      "The support from the community and the comprehensive resources made learning new technologies much easier.",
  },
  {
    name: "Emily Johnson",
    job: "Backend Developer",
    image:
      "https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    message:
      "This platform has been a game changer for my career. The resources available are top-notch and the community is incredibly supportive.",
  },
  {
    name: "Michael Brown",
    job: "Full Stack Developer",
    image:
      "https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    message:
      "I've been able to enhance my skills and learn new technologies thanks to the excellent content and courses offered here.",
  },
  {
    name: "Sarah Davis",
    job: "Data Scientist",
    image:
      "https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    message:
      "The practical examples and hands-on projects have really helped me to understand and apply the concepts in real-world scenarios.",
  },
  {
    name: "David Wilson",
    job: "DevOps Engineer",
    image:
      "https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    message:
      "The comprehensive coverage of topics and the in-depth tutorials have been invaluable to my professional growth.",
  },
  {
    name: "Jessica Taylor",
    job: "Product Manager",
    image:
      "https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    message:
      "The insights and knowledge I've gained here have been instrumental in successfully managing my team and projects.",
  },
  {
    name: "Liam Anderson",
    job: "Software Engineer",
    image:
      "https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    message:
      "The courses here have helped me stay up-to-date with the latest industry trends and best practices.",
  },
];

const ReviewCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [disableButton, setDisableButton] = useState(true);

  return (
    <>
      <div className="w-full lg:w-1/2">
        <Swiper
          grabCursor={true}
          effect={"creative"}
          onActiveIndexChange={(index) => {
            setActiveIndex(index.activeIndex);
            // setDisableButton(index);
            // console.log(index.next);
          }}
          navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
            disabledClass: "swiper-button-disabled",
          }}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[EffectCreative, Navigation]}
          className="mySwiper"
        >
          {reviewCard?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Image
                  alt={item.name}
                  src={item.image}
                  width={500}
                  height={500}
                  className="w-full  h-full md:h-full object-cover object-center hover:object-top transition-all duration-500 rounded-2xl"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="w-full lg:w-1/2 flex gap-4 md:gap-8 flex-col">
        <div className="hidden md:flex">
          <BoxReveal boxColor={"#db2777"} duration={0.5}>
            <SparklesText
              text="What did they say?"
              className="font-bold text-xl md:text-2xl xl:text-[40px] md:leading-[40px] lg:leading-[50px] text-start"
            />
          </BoxReveal>
        </div>
        <BoxReveal boxColor={"#db2777"} duration={0.3}>
          <p className="text-gray-500 text-base md:text-lg lg:text-xl font-medium line-clamp-6">
            {reviewCard[activeIndex].message}
          </p>
        </BoxReveal>
        <hr />
        <div className="flex justify-between">
          <div className="flex flex-col gap-2 md:gap-4">
            <BoxReveal boxColor={"#db2777"} duration={0.3}>
              <span className="text-black font-bold text-xl md:text-2xl lg:text-3xl ">
                {reviewCard[activeIndex].name}
              </span>
            </BoxReveal>
            <BoxReveal boxColor={"#db2777"} duration={0.3}>
              <span className="text-gray-500 text-sm md:text-base lg:text-lg ">
                {reviewCard[activeIndex].job}
              </span>
            </BoxReveal>
          </div>
          <div className="flex gap-4">
            <div
              className={`size-12 md:size-20 rounded-full cursor-pointer ${
                activeIndex === 0 ? "cursor-not-allowed" : " border"
              } hover:border-pink-600 flex items-center justify-center image-swiper-button-prev group`}
            >
              <Icon
                icon={"icon-park-outline:arrow-left"}
                className={`text-xl md:text-4xl text-gray-600 group-hover:text-pink-600 ${
                  activeIndex === 0 ? "text-gray-200" : "text-gray-600"
                }`}
              />
            </div>
            <div
              className={`size-12 md:size-20 rounded-full  cursor-pointer ${
                activeIndex === reviewCard?.length - 1
                  ? "cursor-not-allowed"
                  : "border"
              } hover:border-pink-600 flex items-center justify-center image-swiper-button-next group`}
            >
              <Icon
                icon={"icon-park-outline:arrow-right"}
                className={`text-xl md:text-4xl  group-hover:text-pink-600 ${
                  activeIndex === reviewCard?.length - 1
                    ? "text-gray-200"
                    : "text-gray-600"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCarousel;
