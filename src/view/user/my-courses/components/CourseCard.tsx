"use client";
import { DetailCourse } from "@/utils/constant";
import { afterDiscount, numberToRupiah } from "@/utils/helper";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import VideoPlayer from "../../components/VideoPlayer";
import { Root } from "../myCourses.type";
import { Icon } from "@iconify/react/dist/iconify.js";

interface Props {
  course: Root;
  displayMode: "grid" | "list";
}

const CourseCard: React.FC<Props> = ({ course, displayMode }) => {
  if (displayMode === "list")
    return (
      <Link
        href={`/my-courses/mastering-python-for-data-science/intermediate-python-programming/object-oriented-programming`}
        className="flex bg-white rounded-2xl border shadow-sm cursor-pointer h-full rounded-l-2xl hover:bg-black/10 transition-all duration-500"
        key={course.id}
      >
        <div className="hidden md:flex flex-col rounded-2xl w-28 md:w-52 lg:w-80 ">
          <Image
            alt={"asd"}
            src={
              "https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={500}
            height={500}
            className="w-full h-full object-cover object-center transition-all duration-500 rounded-l-2xl"
          />
        </div>
        <div className="flex flex-col space-y-2 lg:space-y-0 justify-between  p-3 lg:p-4 lg:py-6 flex-1">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-base lg:text-lg line-clamp-2">
              {course.title}
            </h3>
            <p className="line-clamp-2 lg:line-clamp-3   text-xs lg:text-sm text-start">
              {course.description}
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-4 items-start lg:items-center">
            <button
              onClick={(e) => {
                e.preventDefault();
                console.log("asd");
              }}
              className="bg-pink-600 w-full md:max-w-xs  text-xs md:text-sm lg:text-base  text-white  rounded-lg lg:w-full py-2 hover:bg-pink-700 transition-all duration-500"
            >
              Lanjut
            </button>
            {/* <Icon icon={"mdi:lecture"} /> */}
          </div>
        </div>
      </Link>
    );

  return (
    <Link
      href={`/my-courses/mastering-python-for-data-science/intermediate-python-programming/object-oriented-programming`}
      className="flex flex-col bg-white rounded-2xl hover:scale-[101%] transition-all duration-300 shadow-lg cursor-pointer"
      key={course.id}
    >
      <div className="p-4 flex flex-col space-y-4 hover:bg-black/10 rounded-2xl">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-base lg:text-lg line-clamp-2">
            {course.title}
          </h3>
          <p className="line-clamp-3 text-xs lg:text-sm text-start">
            {course.description}
          </p>
        </div>
        <div className="flex flex-col rounded-2xl h-32 sm:h-36 md:h-40 lg:h-52  ">
          <Image
            alt={"asd"}
            src={
              "https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={500}
            height={500}
            className="w-full h-full object-cover object-center  transition-all duration-500 rounded-2xl"
          />
        </div>
        <div className="flex flex-col  items-center justify-center  gap-4 text-xs md:text-sm lg:text-base relative">
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log("asd");
            }}
            className="bg-pink-600 text-white  rounded-lg w-full py-2 hover:bg-pink-700 transition-all duration-500"
          >
            Lanjut
          </button>
          {/* <Icon
            icon={"ph:play-duotone"}
            className="absolute left-24 text-white"
          /> */}
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
