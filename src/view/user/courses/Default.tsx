import React from "react";
import BreadcrumbDetail from "./components/BreadcrumbDetail";

interface Props {
  params: {
    slug: string[];
  };
}

const Default: React.FC<Props> = ({ params }) => {
  return (
    <div>
      {/* <BreadcrumbDetail params={params} /> */}
    </div>
  );
};

export default Default;
