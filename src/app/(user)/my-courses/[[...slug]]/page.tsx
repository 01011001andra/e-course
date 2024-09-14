import MyCourses from "@/view/user/my-courses/page";
import React from "react";

interface Props {
  params: {
    slug: string[];
  };
}

const Courses: React.FC<Props> = ({ params }) => {
  return <MyCourses params={params} />;
};

export default Courses;
