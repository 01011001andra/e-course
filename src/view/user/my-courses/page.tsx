import React from "react";
import Default from "./Default";
import BreadcrumbDetail from "./components/BreadcrumbDetail";
import Slug2 from "./Slug2";

interface Props {
  params: {
    slug: string[];
  };
}

const MyCourses: React.FC<Props> = ({ params }) => {
  console.log(params.slug);
  return (
    <div>
      <div className="p-4 flex flex-col">
        <BreadcrumbDetail params={params} />
        {!params?.slug && <Default params={params} />}
        {params.slug && params.slug.length === 3 && <Slug2 params={params} />}
      </div>
    </div>
  );
};

export default MyCourses;
