import DetailArticle from "@/view/articles/DetailArticle";
import React from "react";

interface Props {
  params: {
    slug: string;
  };
}

const Articles: React.FC<Props> = ({ params }) => {
  return <DetailArticle params={params} />;
};

export default Articles;
