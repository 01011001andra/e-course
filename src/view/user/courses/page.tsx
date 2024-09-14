import React from "react";
import BreadcrumbDetail from "./components/BreadcrumbDetail";
import Slug2 from "../my-courses/Slug2";
import Default from "./Default";
import Slug0 from "./Slug0";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string[];
  };
}

const CoursesPage: React.FC<Props> = ({ params }) => {
  if (params.slug && params.slug.length === 2) return notFound();

  return (
    <div className="p-4 flex flex-col">
      <BreadcrumbDetail params={params} />

      {!params.slug && <Default params={params} />}
      {params.slug && params.slug.length === 1 && <Slug0 params={params} />}
    </div>
  );
};

export default CoursesPage;
