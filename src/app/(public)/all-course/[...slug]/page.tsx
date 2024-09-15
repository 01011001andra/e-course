import Slug0 from "@/view/all-course/Slug0";
import React from "react";

interface Props {
  params: {
    slug: string[];
  };
}

const DetailCourse: React.FC<Props> = ({ params }) => {
  return <Slug0 params={params} />;
};

export default DetailCourse;
