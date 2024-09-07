"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Root } from "../courses.type";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

const TabsOviewAndInstructor = ({ course }: { course: Root }) => {
  const [tabMode, setTabMode] = React.useState<"overview" | "instructor">(
    "overview"
  );

  return (
    <div className="w-full h-full mt-16 ">
      <div
        className={`w-full relative ${
          tabMode === "overview" ? "border-t rounded-tr-3xl" : ""
        } `}
      >
        <div
          onClick={() => setTabMode("overview")}
          className={`${
            tabMode === "overview"
              ? "absolute  gap-2 border-y font-bold group border-x border-b-white rounded-t-3xl border-l w-28 xl:w-36 2xl:w-44 h-16 -top-16 flex items-center justify-center"
              : "absolute hover:bg-pink-600 hover:text-white group cursor-pointer w-28 xl:w-36 2xl:w-44 h-16 -top-16 rounded-t-3xl flex items-center justify-center"
          }`}
        >
          <div className="flex items-center gap-2">
            <Icon
              icon={"material-symbols:overview"}
              fontSize={16}
              className="hidden xl:flex"
            />
            <span className="text-sm xl:text-base">Overview</span>
          </div>
        </div>
        <div
          onClick={() => setTabMode("instructor")}
          className={`${
            tabMode === "instructor"
              ? "absolute  gap-2 border-y font-bold group border-x border-b-white rounded-t-3xl border-l w-28 xl:w-36 2xl:w-44 h-16 -top-[63px] left-28 xl:left-36 2xl:left-44 flex items-center justify-center"
              : "absolute hover:bg-pink-600 hover:text-white group cursor-pointer w-28 xl:w-36 2xl:w-44 h-16 rounded-t-3xl -top-16 left-28 xl:left-36 2xl:left-44 flex items-center justify-center"
          }`}
        >
          <div className="flex items-center gap-2">
            <Icon
              icon={"simple-icons:codementor"}
              fontSize={16}
              className="hidden xl:flex"
            />
            <span className="text-sm xl:text-base">Instructor</span>
          </div>
        </div>

        {tabMode === "overview" && (
          <div className="px-8 py-6 flex flex-col gap-4 w-full border-x border-b rounded-b-3xl rounded-tr-3xl">
            <span className="text-sm lg:text-base">
              Course by{" "}
              <span className="underline text-pink-600 font-bold text-sm lg:text-base">
                {course.instructor.name}
              </span>
            </span>
            <h2 className="font-semibold text-2xl lg:text-4xl ">
              {course.title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {course.tags.map((tag) => {
                return (
                  <span
                    key={tag}
                    className="rounded-full bg-pink-600 text-center  text-white text-xs p-1 px-3"
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
            <p className="text-sm lg:text-base">{course.description}</p>
            <h3 className="font-semibold">
              The course will have{" "}
              {course.stages.length > 1
                ? `${course.stages.length} stages`
                : `${course.stages.length} stage`}
            </h3>
            <div className="flex flex-col gap-2">
              {course.stages.map((stage, index) => {
                return (
                  <div className="flex gap-2" key={stage.id}>
                    <div className="relative">
                      <span className="size-5  border border-white absolute bg-slate-900 z-50 rounded-md text-xs text-white flex items-center justify-center">
                        {index + 1}
                      </span>
                      <span className="size-5 translate-y-0.5 -translate-x-0.5 bg-slate-900 rounded-md text-xs text-white flex items-center justify-center" />
                    </div>
                    <span className="text-sm lg:text-base">{stage.title}</span>
                  </div>
                );
              })}
              {/* <div className="flex gap-2">
                <div className="relative">
                  <span className="size-5 border border-white absolute bg-slate-900 z-50 rounded-md text-xs text-white flex items-center justify-center">
                    2
                  </span>
                  <span className="size-5 translate-y-0.5 -translate-x-0.5 bg-slate-900 rounded-md text-xs text-white flex items-center justify-center" />
                </div>
                <span className="text-sm lg:text-base">
                  It adheres to the WAI-ARIA design pattern.
                </span>
              </div> */}
            </div>
          </div>
        )}
        {tabMode === "instructor" && (
          <div className="p-8 flex flex-col gap-4 w-full border rounded-xl  items-center justify-center">
            <Avatar className="cursor-pointer hover:border-black border scale-150">
              <AvatarImage src={course.instructor.picture} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-center justify-center gap-2">
              <h3 className="text-2xl font-bold text-center">
                {course.instructor.name}
              </h3>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="max-w-xs w-full text-center line-clamp-1 text-xs">
                    {course.instructor.company} - {course.instructor.position}
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      {course.instructor.company} - {course.instructor.position}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <div className="flex items-start flex-col">
                {course.instructor.courses.map((course, index) => {
                  return (
                    <div className="flex gap-1" key={course.id}>
                      <span>{index + 1}. </span>
                      <Link
                        href={`/course/${course.slug}`}
                        className="text-sm max-w-xs underline hover:text-pink-600"
                      >
                        {course.name}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabsOviewAndInstructor;
