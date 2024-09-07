"use client";
import { DetailCourse } from "@/utils/constant";
import { afterDiscount, numberToRupiah } from "@/utils/helper";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Root } from "../courses.type";
import VideoPlayer from "../../components/VideoPlayer";

interface Props {
  course: Root;
  displayMode: "grid" | "list";
}

const CourseCard: React.FC<Props> = ({ course, displayMode }) => {
  if (displayMode === "list")
    return (
      <Link
        href={`/courses/${course.slug}`}
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
              {course.description} Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Dolor, iste fugiat ducimus assumenda molestiae
              esse molestias ratione rem, quia corrupti nobis consequuntur
              reiciendis dolorem in facere quo sunt quibusdam quidem culpa fugit
              necessitatibus impedit maxime nam. Laborum natus voluptatum
              consequuntur libero dolores sit, eos eligendi quaerat accusantium
              qui excepturi unde saepe id cupiditate necessitatibus quasi,
              consequatur pariatur aliquam quam. Id et omnis esse cumque alias
              vel autem fugiat aperiam, quibusdam consequuntur nam iste dolorum
              sunt maxime nisi eos? Dolores molestiae eum modi quia beatae
              accusantium suscipit est animi repellendus sed libero, nisi,
              itaque, vel minus voluptatibus facilis praesentium porro ducimus.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-4 items-start lg:items-center">
            <div className="flex gap-2 lg:items-center text-xs md:text-sm lg:text-base  flex-row items-start">
              <span className="text-pink-600">
                {numberToRupiah(course.price)}
              </span>
              <span className="line-through italic">
                {numberToRupiah(afterDiscount(course.price, course.discount))}
              </span>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                console.log("asd");
              }}
              className="bg-pink-600 w-full md:max-w-xs   text-white  rounded-lg lg:w-full py-1 lg:py-2 hover:bg-pink-700 transition-all duration-500"
            >
              Beli course
            </button>
          </div>
        </div>
      </Link>
    );

  return (
    <Link
      href={`/courses/${course.slug}`}
      className="flex flex-col bg-white rounded-t-2xl shadow-lg cursor-pointer"
      key={course.id}
    >
      <div className="flex flex-col rounded-2xl h-52  ">
        <Image
          alt={"asd"}
          src={
            "https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          width={500}
          height={500}
          className="w-full h-full object-cover object-center hover:object-top transition-all duration-500 rounded-t-2xl"
        />
      </div>
      <div className="p-4 flex flex-col space-y-4 lg:gap-4 hover:bg-black/10 ">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-base lg:text-lg line-clamp-2">
            {course.title}
          </h3>
          <p className="line-clamp-3 text-xs lg:text-sm text-start">
            {course.description}
          </p>
        </div>
        <div className="flex flex-col gap-4 text-xs md:text-sm lg:text-base ">
          <div className="flex gap-2 items-center">
            <span className="text-pink-600">
              {numberToRupiah(course.price)}
            </span>
            <span className="line-through italic">
              {numberToRupiah(afterDiscount(course.price, course.discount))}
            </span>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log("asd");
            }}
            className="bg-pink-600 text-white  rounded-lg w-full py-2 hover:bg-pink-700 transition-all duration-500"
          >
            Beli course
          </button>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
