import CoursesPage from "@/view/user/courses/page";
import React from "react";
interface Props {
  params: {
    slug: string[];
  };
}

const Courses: React.FC<Props> = ({ params }) => {
  return <CoursesPage params={params} />;
};

export default Courses;
