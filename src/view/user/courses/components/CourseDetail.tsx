import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Root } from "../courses.type";
import { secondToTime, secondToTimeText } from "@/utils/helper";

const CourseDetail = ({ course }: { course: Root }) => {
  console.log(course);
  return (
    <div className="w-full rounded-3xl border p-6 flex flex-col gap-4">
      <div className="flex justify-between flex-col xl:flex-row">
        <div className="flex gap-2 items-center">
          <Icon icon={"mdi:lecture"} fontSize={24} />
          <span className="font-semibold text-sm lg:text-base">
            Lecture Type
          </span>
        </div>
        <span className="text-sm lg:text-base capitalize">
          {course.lecture_type}
        </span>
      </div>
      <div className="flex justify-between flex-col xl:flex-row">
        <div className="flex gap-2 items-center">
          <Icon icon={"game-icons:skills"} fontSize={24} />
          <span className="font-semibold text-sm lg:text-base capitalize">
            Skills Level
          </span>
        </div>
        <span className="text-sm lg:text-base">{course.level}</span>
      </div>
      <div className="flex justify-between flex-col xl:flex-row">
        <div className="flex gap-2 items-center">
          <Icon icon={"game-icons:duration"} fontSize={24} />
          <span className="font-semibold text-sm lg:text-base">Duration</span>
        </div>
        <span className="text-sm lg:text-base">
          {course.stages.length} {course.stages.length > 1 ? "Stages" : "Stage"}, {secondToTimeText(course.duration)}
        </span>
      </div>
    </div>
  );
};

export default CourseDetail;
