import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import React from "react";

interface Props {
  params: {
    slug: string;
  };
}

const DetailArticle: React.FC<Props> = ({ params }) => {
  console.log(params);
  return (
    <div className="container px-4 xl:px-0 py-8 md:pt-0">
      <div className="w-full h-full flex sm:hidden">
        <AspectRatio ratio={16 / 8}>
          <Image
            src="/images/hero.png"
            alt="Photo by Drew Beamer"
            fill
            className="h-full w-full rounded-md object-cover"
          />
        </AspectRatio>
      </div>
      <div className="w-full h-full hidden sm:flex">
        <AspectRatio ratio={16 / 5}>
          <Image
            src="/images/hero.png"
            alt="Photo by Drew Beamer"
            fill
            className="h-full w-full rounded-md object-cover"
          />
        </AspectRatio>
      </div>
      <h1 className="text-2xl lg:text-3xl font-bold mt-4">
        Gradient Border is Unexpectedly Hard
      </h1>
      <p className="text-sm mt-2">Written on July 14, 2024 by Yandra Muslim.</p>
      <div className="flex gap-2 mt-6">
        <div className="flex gap-1 items-center justify-center">
          <Icon icon={"carbon:time"} />
          <span className="text-sm lg:text-base text-pink-600 font-medium">
            21 min read
          </span>
        </div>
        <div className="flex gap-1 items-center justify-center">
          <Icon icon={"ep:view"} />
          <span className="text-sm lg:text-base text-pink-600 font-medium">
            1000 views
          </span>
        </div>
      </div>
      <hr className="border-black w-full my-4" />
    </div>
  );
};

export default DetailArticle;
