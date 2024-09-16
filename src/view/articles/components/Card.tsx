"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <Link
      href={"/articles/gradient-border-is-unexpectedly-hard"}
      className="w-full hover:scale-[103%] transition-all duration-300 h-full border rounded-lg"
    >
      <AspectRatio ratio={16 / 6} className="relative">
        <Image
          src="/images/hero.png"
          alt="Photo by Drew Beamer"
          fill
          className="h-full w-full rounded-md object-cover"
        />
        <div className="absolute bottom-2 px-2 w-full items-end justify-end flex gap-2">
          <span className="bg-black/60 text-sm py-0.5 px-1.5 rounded-lg text-white">
            nextjs
          </span>
          <span className="bg-black/60 text-sm py-0.5 px-1.5 rounded-lg text-white">
            nextjs
          </span>
          <span className="bg-black/60 text-sm py-0.5 px-1.5 rounded-lg text-white">
            nextjs
          </span>
        </div>
      </AspectRatio>
      <div className="flex flex-col gap-2 p-4">
        <h2 className="text-lg font-bold line-clamp-2">
          Gradient border is unexpectedly Hard
        </h2>
        <div className="flex gap-2">
          <div className="flex gap-1">
            <Icon icon={"carbon:time"} />
            <span className="text-xs text-pink-600 font-medium">
              21 min read
            </span>
          </div>
          <div className="flex gap-1">
            <Icon icon={"ep:view"} />
            <span className="text-xs text-pink-600 font-medium">
              1000 views
            </span>
          </div>
        </div>
        <span className="font-medium text-sm">July 14, 2024</span>
        <p className="text-sm">
          A simple gradient border is not as simple as it seems.
        </p>
      </div>
    </Link>
  );
};

export default Card;
