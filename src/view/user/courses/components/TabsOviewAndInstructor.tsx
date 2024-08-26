import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const TabsOviewAndInstructor = () => {
  return (
    <div className="w-full h-full mt-16 ">
      <div className="w-full h-full relative border-t rounded-tr-3xl">
        <div className="absolute  gap-2 border-y font-bold group border-x border-b-white rounded-t-3xl border-l w-44 h-16 -top-16 flex items-center justify-center">
          <div className="flex items-center gap-2">
            <Icon icon={"material-symbols:overview"} fontSize={16} />
            <span className="text-sm lg:text-base">Overview</span>
          </div>
        </div>
        <div className="absolute hover:bg-pink-600 hover:text-white group cursor-pointer w-44 h-16 rounded-t-3xl -top-16 left-44 flex items-center justify-center">
          <div className="flex items-center gap-2">
            <Icon icon={"simple-icons:codementor"} fontSize={16} />
            <span className="text-sm lg:text-base">Instructor</span>
          </div>
        </div>

        <div className="px-8 py-6 flex flex-col gap-4 w-full border-x border-b rounded-b-3xl rounded-tr-3xl">
          <span className="text-sm lg:text-base">
            Course by{" "}
            <span className="underline text-pink-600 font-bold text-sm lg:text-base">
              Yandra Muslim
            </span>
          </span>
          <h2 className="font-semibold text-2xl lg:text-4xl ">Javascript</h2>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-pink-600 text-center  text-white text-xs p-1 px-3">
              Javascript
            </span>
            <span className="rounded-full bg-pink-600 text-center text-white text-xs p-1 px-3">
              Frontend
            </span>
            <span className="rounded-full bg-pink-600 text-center text-white text-xs p-1 px-3">
              Backend
            </span>
            <span className="rounded-full bg-pink-600 text-center text-white text-xs p-1 px-3">
              Fullstack
            </span>
            <span className="rounded-full bg-pink-600 text-center text-white text-xs p-1 px-3">
              Reactjs
            </span>
            <span className="rounded-full bg-pink-600 text-center text-white text-xs p-1 px-3">
              Strapi
            </span>
          </div>
          <p className="text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            ab atque cupiditate inventore expedita deleniti reiciendis,
            similique dicta fugiat beatae dolore, dolor debitis odit? Doloribus
            eos vero adipisci sequi maiores blanditiis ipsam inventore
            voluptatibus ullam debitis libero illo nihil provident mollitia
            necessitatibus, ex amet minus fugit voluptates! Iure, rem magnam.
          </p>
          <h3 className="font-semibold">The course will have two stages</h3>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <div className="relative">
                <span className="size-5  border border-white absolute bg-slate-900 z-50 rounded-md text-xs text-white flex items-center justify-center">
                  1
                </span>
                <span className="size-5 translate-y-0.5 -translate-x-0.5 bg-slate-900 rounded-md text-xs text-white flex items-center justify-center" />
              </div>
              <span className="text-sm lg:text-base">
                It adheres to the WAI-ARIA design pattern.
              </span>
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <span className="size-5 border border-white absolute bg-slate-900 z-50 rounded-md text-xs text-white flex items-center justify-center">
                  2
                </span>
                <span className="size-5 translate-y-0.5 -translate-x-0.5 bg-slate-900 rounded-md text-xs text-white flex items-center justify-center" />
              </div>
              <span className="text-sm lg:text-base">
                It adheres to the WAI-ARIA design pattern.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsOviewAndInstructor;
