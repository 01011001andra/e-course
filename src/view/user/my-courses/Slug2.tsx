// "use server";

import React from "react";
import VideoPlayer from "./components/VideoPlayer";
import AccordionList from "./components/AccordionList";
import TabsCommentAndFile from "./components/TabsCommentAndFile";
import TabsOviewAndInstructor from "./components/TabsOviewAndInstructor";
import CourseDetail from "../courses/components/CourseDetail";
import { DetailCourse } from "@/utils/constant";
import { notFound } from "next/navigation";
import { Detail, Root, Stages } from "../courses/courses.type";

interface Props {
  params: {
    slug: string[];
  };
}

const Slug2: React.FC<Props> = ({ params }) => {
  const course = DetailCourse.find(
    (item) => item.slug === params.slug[0]
  ) as Root;
  const detailCourse = course?.stages
    .find((stage) => stage.slug === params?.slug[1])
    ?.details.find((detail) => detail.slug === params?.slug[2]) as Detail;

  if (!course) return notFound();
  if (
    DetailCourse?.find((item) => item.slug === params?.slug[0])
      ?.stages.find((stage) => stage.slug === params?.slug[1])
      ?.details.find((detail) => detail.slug === params?.slug[2])?.is_locked
  )
    return notFound();
  if (
    !DetailCourse?.find((item) => item.slug === params?.slug[0])
      ?.stages.find((stage) => stage.slug === params?.slug[1])
      ?.details.find((detail) => detail.slug === params?.slug[2])?.slug
  )
    return notFound();
  return (
    <div className="grid grid-cols-12 gap-5">
      {/* 1 */}
      <div className="col-span-12 w-full lg:col-span-3 hidden lg:flex">
        <AccordionList stages={course.stages} />
      </div>

      {/* 2 */}
      <div className="col-span-12 lg:col-span-6 flex flex-col ">
        <div className="h-72 sm:h-96 lg:h-[300px] xl:h-[500px]">
          <VideoPlayer course={detailCourse} />
        </div>
        {/* 1 */}
        <div className="col-span-12 lg:col-span-3 flex lg:hidden mt-4">
          <AccordionList stages={course.stages} />
        </div>
        <div className="w-full mt-16 lg:mt-20 ">
          <TabsCommentAndFile course={detailCourse} />
        </div>
      </div>

      {/* 3 */}
      <div className="col-span-3 hidden lg:flex flex-col gap-4 ">
        <CourseDetail course={course} />

        <TabsOviewAndInstructor course={course} />
      </div>
    </div>
  );
};

export default Slug2;
