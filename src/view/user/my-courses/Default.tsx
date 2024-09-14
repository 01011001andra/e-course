"use client";

import React from "react";
import { DetailCourse } from "@/utils/constant";
import { Input } from "@/components/ui/input";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Search } from "lucide-react";
import { Root } from "./myCourses.type";
import CourseCard from "./components/CourseCard";

interface Props {
  params: {
    slug: string[];
  };
}

const Default: React.FC<Props> = ({ params }) => {
  const [displayMode, setDisplayMode] = React.useState<"grid" | "list">("grid");

  const course = DetailCourse.map((item) => item) as Root[];

  const handleChangeDisplay = () => {
    if (displayMode === "grid") {
      setDisplayMode("list");
    }
    if (displayMode === "list") {
      setDisplayMode("grid");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full flex items-center justify-end gap-2">
        <div className="relative sm:max-w-xs w-full">
          <Search className="absolute left-2.5  top-3 h-4 w-4 text-muted-foreground" />

          <Input
            type="search"
            placeholder="Search..."
            className="pl-8 py-4 w-full rounded-full"
          />
        </div>
        {displayMode !== "grid" ? (
          <div
            className="p-2 bg-white shadow rounded-full cursor-pointer hover:scale-[101%] transition-all duration-100"
            onClick={handleChangeDisplay}
          >
            <Icon icon={"f7:rectangle-grid-1x2-fill"} className="text-lg" />
          </div>
        ) : (
          <div
            className="p-2 bg-white shadow rounded-full cursor-pointer hover:scale-[101%] transition-all duration-100"
            onClick={handleChangeDisplay}
          >
            <Icon icon={"vaadin:grid-small"} className="text-lg" />
          </div>
        )}
      </div>
      <div
        className={`${
          displayMode === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4"
            : "grid grid-cols-1 gap-4"
        }`}
      >
        {course.map((item) => {
          return (
            <CourseCard course={item} key={item.id} displayMode={displayMode} />
          );
        })}
      </div>
    </div>
  );
};

export default Default;
