import React from "react";
import VideoPlayer from "./components/VideoPlayer";
import AccordionList from "./components/AccordionList";
import TabsCommentAndFile from "./components/TabsCommentAndFile";
import TabsOviewAndInstructor from "./components/TabsOviewAndInstructor";
import CourseDetail from "./components/CourseDetail";

const Slug0 = () => {
  return (
    <div className="grid grid-cols-12 gap-5">
      {/* 1 */}
      <div className="col-span-12 w-full lg:col-span-3 hidden lg:flex">
        <AccordionList />
      </div>

      {/* 2 */}
      <div className="col-span-12 lg:col-span-6 flex flex-col ">
        <div className="h-72 sm:h-96 lg:h-[300px] xl:h-[500px]">
          <VideoPlayer />
        </div>
        {/* 1 */}
        <div className="col-span-12 lg:col-span-3 flex lg:hidden mt-4">
          <AccordionList />
        </div>
        <div className="w-full mt-16 lg:mt-20 ">
          <TabsCommentAndFile />
        </div>
      </div>

      {/* 3 */}
      <div className="col-span-3 hidden lg:flex flex-col gap-4 ">
        <CourseDetail />

        <TabsOviewAndInstructor />
      </div>
    </div>
  );
};

export default Slug0;
