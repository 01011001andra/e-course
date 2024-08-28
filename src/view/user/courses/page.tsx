import React from "react";
import BreadcrumbDetail from "./components/BreadcrumbDetail";
import Slug0 from "./Slug0";
import Default from "./Default";
import { DetailCourse } from "@/utils/constant";
import { Root } from "./courses.type";

interface Props {
  params: {
    slug: string[];
  };
}

const CoursesPage: React.FC<Props> = ({ params }) => {
  return (
    <div className="p-4 flex flex-col gap-4">
      <BreadcrumbDetail params={params} />

      {!params.slug && <Default params={params} />}
      {params.slug && params?.slug[0] && <Slug0 params={params} />}
    </div>
  );
};

export default CoursesPage;
