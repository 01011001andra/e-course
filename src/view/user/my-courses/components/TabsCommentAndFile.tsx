"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Detail } from "../../courses/courses.type";
import moment from "moment";
import Link from "next/link";

const TabsCommentAndFile = ({ course }: { course: Detail }) => {
  const [tabMode, setTabMode] = React.useState<"comments" | "files">(
    "comments"
  );
  return (
    <div
      className={`w-full relative ${
        tabMode === "comments" ? "border-t rounded-tr-3xl" : ""
      } `}
    >
      <div
        onClick={() => setTabMode("comments")}
        className={`${
          tabMode === "comments"
            ? "absolute  gap-2 border-y font-bold group border-x border-b-white rounded-t-3xl border-l  flex items-center justify-center w-36 lg:w-44 h-12 lg:h-16 -top-[48px] lg:-top-16"
            : "absolute hover:bg-pink-600 hover:text-white group cursor-pointer rounded-t-3xl w-36 lg:w-44 h-12 lg:h-16 -top-[48px] lg:-top-16 flex items-center justify-center"
        }`}
      >
        <div className="flex items-center gap-2">
          <Icon
            icon={"mingcute:comment-line"}
            fontSize={16}
            className="hidden lg:flex"
          />
          <span className="text-sm lg:text-base">Comments</span>
          <span
            className={`text-gray-600 ${
              tabMode === "files" && "group-hover:text-white"
            } font-light text-sm lg:text-base`}
          >
            {course.comments.length}
          </span>
        </div>
      </div>
      <div
        onClick={() => setTabMode("files")}
        className={`${
          tabMode === "files"
            ? "absolute  gap-2 border-y font-bold group border-x border-b-white w-36 lg:w-44 h-12 lg:h-16 rounded-t-3xl -top-[47px] lg:-top-[63px] left-36 lg:left-44 border-l  flex items-center justify-center"
            : "absolute hover:bg-pink-600 hover:text-white group cursor-pointer w-36 lg:w-44 h-12 lg:h-16 rounded-t-3xl -top-[48px] lg:-top-[63px] left-36 lg:left-44 flex items-center justify-center"
        }`}
      >
        <div className="flex items-center gap-2">
          <Icon icon={"mdi:files"} fontSize={16} className="hidden lg:flex" />
          <span className="text-sm lg:text-base">Files</span>
          <span
            className={`text-gray-600 font-light ${
              tabMode === "comments" && "group-hover:text-white"
            } text-sm lg:text-base`}
          >
            {course.files.length}
          </span>
        </div>
      </div>
      {tabMode === "comments" && (
        <div className="px-8 py-6 w-full border-x border-b rounded-b-3xl rounded-tr-3xl">
          {course.comments.map((comment, index) => {
            return (
              <React.Fragment key={comment.id}>
                <div
                  className={`flex flex-col gap-2  pb-10 pl-8 ${
                    comment.detail_replies &&
                    comment.detail_replies?.length > 0 &&
                    "border-l"
                  } rounded-bl-3xl`}
                >
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
                        <h3 className="font-medium text-sm lg:text-base">
                          {comment.name},{" "}
                        </h3>
                        <span className="text-gray-500 text-sm lg:text-base">
                          at{" "}
                          <span className="underline text-sm lg:text-base">
                            {moment(comment.createdAt).format("LT")}
                          </span>
                        </span>
                      </div>
                    </div>
                    <span className="text-gray-500 text-sm lg:text-base">
                      {moment(comment.createdAt).fromNow()}
                    </span>
                  </div>
                  <p className="text-sm lg:text-base">{comment.text}</p>
                  <div className="flex gap-3 ">
                    <div className="flex items-center gap-1">
                      <Icon icon={"twemoji:red-heart"} />
                      <span className="text-sm lg:text-base">
                        {comment.likes}
                      </span>
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
                      <span className="text-sm lg:text-base">
                        {comment.replies}
                      </span>
                    </div>
                  </div>
                </div>
                {comment.detail_replies?.map((reply, index) => {
                  return (
                    <div
                      key={reply.id}
                      className={`flex flex-col gap-2 pb-8 pl-8 ${
                        comment.detail_replies &&
                        index !== comment.detail_replies?.length - 1 &&
                        "border-l"
                      } rounded-bl-3xl`}
                    >
                      <div className="w-full h-full -translate-y-3 flex flex-col gap-2">
                        <div className="flex justify-between gap-4 items-center">
                          <div className="flex gap-4 relative">
                            <div className="flex gap-2 items-center justify-center">
                              <h3 className="font-medium text-sm lg:text-base">
                                {reply.name},{" "}
                              </h3>
                              <span className="text-gray-500 text-sm lg:text-base">
                                replied
                              </span>
                            </div>
                          </div>
                          <span className="text-gray-500 text-sm lg:text-base">
                            {moment(reply.createdAt).fromNow()}
                          </span>
                        </div>
                        <p className="text-sm lg:text-base">
                          Sure thing, Andrey! You can go to the Add" menu in
                          Blender and select "Curve to add different types of
                          curves.
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
                  );
                })}
              </React.Fragment>
            );
          })}
        </div>
      )}

      {tabMode === "files" && (
        <div className="px-8 py-6 w-full border rounded-3xl space-y-2">
          {course.files.map((file, index) => {
            if (file.type === "ppt") {
              return (
                <div
                  className="flex justify-between items-start p-2"
                  key={index}
                >
                  <div className="flex gap-4 items-start">
                    <div>
                      <Icon
                        icon={"vscode-icons:file-type-powerpoint2"}
                        className=" text-2xl lg:text-4xl"
                      />
                    </div>
                    <p className="text-sm lg:text-base">{file.title}</p>
                  </div>
                  <Link download href={file.url}>
                    <Icon
                      icon={"material-symbols:download"}
                      className=" text-2xl lg:text-3xl  cursor-pointer hover:text-pink-600 text-black"
                    />
                  </Link>
                </div>
              );
            }

            return (
              <div
                className="flex justify-between items-start p-2 "
                key={index}
              >
                <div className="flex gap-4 items-start w-full">
                  <Icon
                    icon={"uiw:file-pdf"}
                    className=" text-2xl lg:text-4xl text-red-600"
                  />
                  <p className="text-sm lg:text-base">{file.title}</p>
                </div>
                <Link download href={file.url}>
                  <Icon
                    icon={"material-symbols:download"}
                    className=" text-2xl lg:text-3xl  cursor-pointer hover:text-pink-600 text-black"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TabsCommentAndFile;
{
  /* <div className="flex flex-col gap-2  pb-10 pl-8 border-l rounded-bl-3xl">
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
        <span className="underline text-sm lg:text-base">
          5:07pm
        </span>
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
  <div className="flex items-center">
<Icon
  icon={"weui:like-outlined"}
  className="hover:text-red-600 text-lg"
/>
<span>7</span>
</div>
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
        <h3 className="font-medium text-sm lg:text-base">
          Emily,{" "}
        </h3>
        <span className="text-gray-500 text-sm lg:text-base">
          replied
        </span>
      </div>
    </div>
    <span className="text-gray-500 text-sm lg:text-base">
      2d ago
    </span>
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
        <h3 className="font-medium text-sm lg:text-base">
          James,{" "}
        </h3>
        <span className="text-gray-500 text-sm lg:text-base">
          replied
        </span>
      </div>
    </div>
    <span className="text-gray-500 text-sm lg:text-base">
      2d ago
    </span>
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
        <span className="underline text-sm lg:text-base">
          5:07pm
        </span>
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
  <div className="flex items-center">
<Icon
  icon={"weui:like-outlined"}
  className="hover:text-red-600 text-lg"
/>
<span>7</span>
</div>
  <div className="flex items-center">
    <Icon icon={"solar:reply-bold"} />
    <span className="text-sm lg:text-base">0</span>
  </div>
</div>
</div> */
}
