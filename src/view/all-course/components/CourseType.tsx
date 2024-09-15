"use client";

import React from "react";
import ButtonGlobal from "@/components/Button";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import BoxReveal from "@/components/BoxReveal";

const courses = [
  {
    name: "All Program",
    is_active: true,
  },
  {
    name: "UI/UX Design",
    is_active: false,
  },
  {
    name: "ReactJS Fundamentals",
    is_active: false,
  },
  {
    name: "Advanced JavaScript",
    is_active: false,
  },
  {
    name: "Node.js and Express",
    is_active: false,
  },
  {
    name: "Front-End Development with HTML and CSS",
    is_active: false,
  },
  {
    name: "Full-Stack Web Development",
    is_active: false,
  },
  {
    name: "Data Structures and Algorithms",
    is_active: false,
  },
  {
    name: "Machine Learning Basics",
    is_active: false,
  },
  {
    name: "Python for Data Science",
    is_active: false,
  },
  {
    name: "Mobile App Development with React Native",
    is_active: false,
  },
  {
    name: "Database Management with SQL",
    is_active: false,
  },
  {
    name: "Cloud Computing with AWS",
    is_active: false,
  },
];

const CourseType = () => {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={20}
      freeMode={true}
      modules={[FreeMode, Pagination]}
      className="w-full h-full"
    >
      {courses.map((course, index) => (
        <SwiperSlide
          key={index}
          className={`px-5 py-3 lg:px-10 lg:py-[12px] text-xs lg:text-base border ${
            course.is_active
              ? "bg-pink-600 text-white"
              : "border-gray-300 text-slate-600 "
          }  font-semibold  relative text-center rounded-full cursor-pointer hover:bg-pink-600 hover:transition-all hover:duration-500 hover:text-white`}
          style={{ width: "auto", display: "inline-block" }}
        >
          <BoxReveal boxColor={"#db2777"} duration={0.5}>
            <div className="whitespace-nowrap">{course.name}</div>
          </BoxReveal>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CourseType;
