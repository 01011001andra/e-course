import React from "react";
import BoxReveal from "@/components/BoxReveal";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { CourseCard, CourseType } from "./components";
import SparklesText from "@/components/Sparkles";
import ButtonGlobal from "@/components/Button";

const coursesData = [
  {
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "Product Management",
    parts: "19",
    lessons: "290",
    duration: "28j 37m",
    title: "Product Management Basic - Course",
    description:
      "Learn the fundamentals of product management with hands-on examples and real-world case studies.",
    oldPrice: "300.000",
    newPrice: "200.000",
    students: "120",
  },
  {
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "UI/UX Design",
    parts: "12",
    lessons: "180",
    duration: "20j 15m",
    title: "UI/UX Design - Course",
    description:
      "Master the art of UI/UX design with comprehensive lessons and practical projects.",
    oldPrice: "250.000",
    newPrice: "150.000",
    students: "85",
  },
  {
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "ReactJS Fundamentals",
    parts: "15",
    lessons: "210",
    duration: "25j 10m",
    title: "ReactJS Fundamentals - Course",
    description:
      "Dive into the world of ReactJS with detailed lessons and interactive coding exercises.",
    oldPrice: "280.000",
    newPrice: "180.000",
    students: "95",
  },
  {
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "Advanced JavaScript",
    parts: "20",
    lessons: "250",
    duration: "30j 20m",
    title: "Advanced JavaScript - Course",
    description:
      "Enhance your JavaScript skills with advanced concepts and real-world applications.",
    oldPrice: "320.000",
    newPrice: "220.000",
    students: "110",
  },
  {
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "Product Management",
    parts: "19",
    lessons: "290",
    duration: "28j 37m",
    title: "Product Management Basic - Course",
    description:
      "Learn the fundamentals of product management with hands-on examples and real-world case studies.",
    oldPrice: "300.000",
    newPrice: "200.000",
    students: "120",
  },
  {
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "UI/UX Design",
    parts: "12",
    lessons: "180",
    duration: "20j 15m",
    title: "UI/UX Design - Course",
    description:
      "Master the art of UI/UX design with comprehensive lessons and practical projects.",
    oldPrice: "250.000",
    newPrice: "150.000",
    students: "85",
  },
  {
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "ReactJS Fundamentals",
    parts: "15",
    lessons: "210",
    duration: "25j 10m",
    title: "ReactJS Fundamentals - Course",
    description:
      "Dive into the world of ReactJS with detailed lessons and interactive coding exercises.",
    oldPrice: "280.000",
    newPrice: "180.000",
    students: "95",
  },
  {
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "Advanced JavaScript",
    parts: "20",
    lessons: "250",
    duration: "30j 20m",
    title: "Advanced JavaScript - Course",
    description:
      "Enhance your JavaScript skills with advanced concepts and real-world applications.",
    oldPrice: "320.000",
    newPrice: "220.000",
    students: "110",
  },
];

const Courses = () => {
  return (
    <div className="container flex flex-col py-8 px-4 " id="courses">
      <div className="flex flex-col gap-8 pb-8">
        <div className="flex justify-between w-full items-center">
          <BoxReveal boxColor={"#db2777"} duration={0.5}>
            <SparklesText
              text="Discover Course"
              className="font-bold text-xl md:text-2xl xl:text-[40px] md:leading-[40px] lg:leading-[50px] text-start"
            />
          </BoxReveal>
          {/* <h2 className="font-bold text-xl lg:text-4xl">Discover Course</h2> */}
          <ButtonGlobal>Show All</ButtonGlobal>
        </div>
        <CourseType />
        <hr />
      </div>
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {coursesData.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
