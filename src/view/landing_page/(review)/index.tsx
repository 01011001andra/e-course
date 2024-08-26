import BoxReveal from "@/components/BoxReveal";
import React from "react";
import SparklesText from "@/components/Sparkles";
import DotPattern from "@/components/DotPattern";
import { cn } from "@/lib/utils";
import ReviewCarousel from "./components/ReviewCarousel";

const Review = () => {
  return (
    <div className="w-full md:min-h-screen py-8 flex items-center justify-center">
      <div className="container relative px-4 lg:px-0 flex gap-8 flex-col lg:flex-row">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
          )}
        />
        <div className="flex md:hidden">
          <BoxReveal boxColor={"#db2777"} duration={0.5}>
            <SparklesText
              text="What did they say?"
              className="font-bold text-xl md:text-2xl xl:text-[40px] md:leading-[40px] lg:leading-[50px] text-start"
            />
          </BoxReveal>
        </div>
        <ReviewCarousel />
      </div>
    </div>
  );
};

export default Review;
