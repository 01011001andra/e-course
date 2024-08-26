import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const CourseDetail = () => {
  return (
    <div className="w-full rounded-3xl border p-6 flex flex-col gap-4">
      <div className="flex justify-between flex-col xl:flex-row">
        <div className="flex gap-2 items-center">
          <Icon icon={"mdi:lecture"} fontSize={24} />
          <span className="font-semibold text-sm lg:text-base">
            Lecture Type
          </span>
        </div>
        <span className="text-sm lg:text-base">Pre-recorded</span>
      </div>
      <div className="flex justify-between flex-col xl:flex-row">
        <div className="flex gap-2 items-center">
          <Icon icon={"game-icons:skills"} fontSize={24} />
          <span className="font-semibold text-sm lg:text-base">
            Skills Level
          </span>
        </div>
        <span className="text-sm lg:text-base">Beginner</span>
      </div>
      <div className="flex justify-between flex-col xl:flex-row">
        <div className="flex gap-2 items-center">
          <Icon icon={"game-icons:duration"} fontSize={24} />
          <span className="font-semibold text-sm lg:text-base">Duration</span>
        </div>
        <span className="text-sm lg:text-base">2 Stages, 16 Hours</span>
      </div>
    </div>
  );
};

export default CourseDetail;
