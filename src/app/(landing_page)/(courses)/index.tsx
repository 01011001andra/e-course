import { ButtonGlobal } from "@/app/components";
import React from "react";
import BoxReveal from "@/components/BoxReveal";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { CourseType } from "./components";

const Courses = () => {
  return (
    <div className="container flex flex-col min-h-screen py-8 px-4">
      <div className="flex flex-col gap-8 pb-8">
        <div className="flex justify-between w-full items-center">
          <BoxReveal boxColor={"#db2777"} duration={0.5}>
            <h2 className="font-bold text-xl lg:text-4xl">Discover Course</h2>
          </BoxReveal>
          <ButtonGlobal>Show All</ButtonGlobal>
        </div>
        <CourseType />
        <hr />
      </div>
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="flex flex-col border rounded-2xl shadow-lg">
          <div className="w-full h-52 relative">
            <Image
              alt="About US"
              src={
                "https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              width={500}
              height={500}
              className="w-full h-full object-cover object-center hover:object-top transition-all duration-500 rounded-t-2xl"
            />
            <div className="absolute text-sm  items-center bottom-4 left-4 px-4 py-1 rounded-full text-pink-600 bg-white flex font-medium">
              <Icon
                icon="material-symbols:person"
                className="text-sm hover:text-primary transition-all duration-300 text-gray-600 "
              />
              120
            </div>
          </div>
          <div className="p-6 flex flex-col justify-between gap-4 h-full">
            <div className="flex flex-col gap-4">
              <div className="flex items-center">
                <small className="text-gray-600">19 Bagian</small>
                <Icon icon={"mdi:dot"} />
                <small className="text-gray-600">290 Pelajaran</small>
                <Icon icon={"mdi:dot"} />
                <small className="text-gray-600">28j 37m</small>
              </div>
              <span className="text-base lg:text-xl font-bold md:text-lg">
                Product Management Basic - Course
              </span>
              <p className="text-gray-500 text-sm line-clamp-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="text-pink-600 font-bold text-lg whitespace-nowrap">
                  Rp. 200.000
                </span>
                <span className="text-gray-400 text-xs line-through whitespace-nowrap">
                  Rp. 300.000
                </span>
              </div>
              <button
                className={`py-2 px-8 whitespace-nowrap text-sm border  bg-pink-600 text-white border-pink-600 font-semibold relative rounded-lg`}
              >
                Detail
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
