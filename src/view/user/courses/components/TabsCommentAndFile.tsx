import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const TabsCommentAndFile = () => {
  return (
    <div className="w-full relative border-t rounded-tr-3xl">
      <div className="absolute  gap-2 border-y font-bold group border-x border-b-white rounded-t-3xl border-l w-36 lg:w-44 h-12 lg:h-16 -top-[48px] lg:-top-16 flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Icon
            icon={"mingcute:comment-line"}
            fontSize={16}
            className="hidden lg:flex"
          />
          <span className="text-sm lg:text-base">Comments</span>
          <span className="text-gray-600 font-light text-sm lg:text-base">
            4
          </span>
        </div>
      </div>
      <div className="absolute hover:bg-pink-600 hover:text-white group cursor-pointer w-36 lg:w-44 h-12 lg:h-16 rounded-t-3xl -top-[48px] lg:-top-16 left-36 lg:left-44 flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Icon icon={"mdi:files"} fontSize={16} className="hidden lg:flex" />
          <span className="text-sm lg:text-base">Files</span>
          <span className="text-gray-600 font-light group-hover:text-white text-sm lg:text-base">
            4
          </span>
        </div>
      </div>

      <div className="px-8 py-6 w-full border-x border-b rounded-b-3xl rounded-tr-3xl">
        <div className="flex flex-col gap-2  pb-10 pl-8 border-l rounded-bl-3xl">
          <div className="flex justify-between gap-4 items-center">
            <div className="flex gap-4 relative">
              <Avatar className="absolute -left-[52px]">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex gap-2 items-center justify-center">
                <h3 className="font-medium text-sm lg:text-base">Andrew, </h3>
                <span className="text-gray-500 text-sm lg:text-base">
                  at{" "}
                  <span className="underline text-sm lg:text-base">5:07pm</span>
                </span>
              </div>
            </div>
            <span className="text-gray-500 text-sm lg:text-base">2d ago</span>
          </div>
          <p className="text-sm lg:text-base">
            Hey guys, im having trouble understanding how to add function in
            javascript. any tips? thanks...
          </p>
          <div className="flex gap-3 ">
            <div className="flex items-center gap-1">
              <Icon icon={"twemoji:red-heart"} />
              <span className="text-sm lg:text-base">7</span>
            </div>
            {/* <div className="flex items-center">
            <Icon
              icon={"weui:like-outlined"}
              className="hover:text-red-600 text-lg"
            />
            <span>7</span>
          </div> */}
            <div className="flex items-center">
              <Icon icon={"solar:reply-bold"} />
              <span className="text-sm lg:text-base">2</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 pb-8 pl-8 border-l rounded-bl-3xl">
          <div className="w-full h-full -translate-y-3 flex flex-col gap-2">
            <div className="flex justify-between gap-4 items-center">
              <div className="flex gap-4 relative">
                <div className="flex gap-2 items-center justify-center">
                  <h3 className="font-medium text-sm lg:text-base">Emily, </h3>
                  <span className="text-gray-500 text-sm lg:text-base">
                    replied
                  </span>
                </div>
              </div>
              <span className="text-gray-500 text-sm lg:text-base">2d ago</span>
            </div>
            <p className="text-sm lg:text-base">
              Sure thing, Andrey! You can go to the Add" menu in Blender and
              select "Curve to add different types of curves.
            </p>
            <div className="flex gap-3">
              <div className="flex items-center">
                <Icon
                  icon={"weui:like-outlined"}
                  className="hover:text-red-600 text-lg"
                />
                <span className="text-sm lg:text-base">7</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 pb-8 pl-8  rounded-bl-3xl">
          <div className="w-full h-full -translate-y-3 flex flex-col gap-2">
            <div className="flex justify-between gap-4 items-center">
              <div className="flex gap-4 relative">
                <div className="flex gap-2 items-center justify-center">
                  <h3 className="font-medium text-sm lg:text-base">James, </h3>
                  <span className="text-gray-500 text-sm lg:text-base">
                    replied
                  </span>
                </div>
              </div>
              <span className="text-gray-500 text-sm lg:text-base">2d ago</span>
            </div>
            <p className="text-sm lg:text-base">
              Also, make sure youre in "Object Mode" before adding curves-
            </p>
            <div className="flex gap-3">
              <div className="flex items-center">
                <Icon
                  icon={"weui:like-outlined"}
                  className="hover:text-red-600 text-lg"
                />
                <span className="text-sm lg:text-base">7</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2  pb-10 pl-8 rounded-bl-3xl">
          <div className="flex justify-between gap-4 items-center">
            <div className="flex gap-4 relative">
              <Avatar className="absolute -left-[52px]">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex gap-2 items-center justify-center">
                <h3 className="font-medium text-sm lg:text-base">Andrew, </h3>
                <span className="text-gray-500 text-sm lg:text-base">
                  at{" "}
                  <span className="underline text-sm lg:text-base">5:07pm</span>
                </span>
              </div>
            </div>
            <span className="text-gray-500 text-sm lg:text-base">2d ago</span>
          </div>
          <p className="text-sm lg:text-base">
            Hey guys, im having trouble understanding how to add function in
            javascript. any tips? thanks...
          </p>
          <div className="flex gap-3">
            <div className="flex items-center gap-1">
              <Icon icon={"twemoji:red-heart"} />
              <span className="text-sm lg:text-base">7</span>
            </div>
            {/* <div className="flex items-center">
            <Icon
              icon={"weui:like-outlined"}
              className="hover:text-red-600 text-lg"
            />
            <span>7</span>
          </div> */}
            <div className="flex items-center">
              <Icon icon={"solar:reply-bold"} />
              <span className="text-sm lg:text-base">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsCommentAndFile;
