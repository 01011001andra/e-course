"use client";

import React from "react";
import BreadcrumbDetail from "./components/BreadcrumbDetail";
import Slug0 from "./Default";
import Slug1 from "./Slug0";
import Default from "./Default";

interface Props {
  params: {
    slug: string[];
  };
}

const CoursesPage: React.FC<Props> = ({ params }) => {

  return (
    <div className="p-4 flex flex-col gap-4">
      <BreadcrumbDetail params={params} />

      {!params.slug && <Default />}
      {params.slug && params?.slug[0] && <Slug1 />}
    </div>
  );
};

export default CoursesPage;
