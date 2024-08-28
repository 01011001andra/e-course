"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Detail, Stages } from "../courses.type";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  stages: Stages[];
}

const DetailCard = ({
  index,
  detail,
  stageSlug,
  mainSlug,
}: {
  index: "first" | "last" | "middle";
  detail: Detail;
  stageSlug: string;
  mainSlug: string;
}) => {
  let detailStatus;

  if (detail.is_watched) {
    detailStatus = (
      <div className="size-6 bg-pink-600 rounded-full absolute flex items-center justify-center -translate-x-[45px]">
        <Icon icon={"uim:check"} color="white" />
      </div>
    );
  }
  if (detail.is_locked) {
    detailStatus = (
      <div className="size-6 border-2 bg-white rounded-full absolute flex items-center justify-center -translate-x-[45px]">
        <Icon
          icon={"material-symbols:lock-outline"}
          className="text-gray-400"
        />
      </div>
    );
  }
  if (detail.is_playing) {
    detailStatus = (
      <div className="size-6 bg-pink-200 rounded-full absolute flex items-center justify-center -translate-x-[45px]">
        <Icon icon={"weui:play-filled"} className="text-pink-600" />
      </div>
    );
  }

  if (index === "last") {
    return (
      <div className="flex relative">
        <div className="flex flex-col z-30">{detailStatus}</div>
        <div className="gap-5 w-full flex h-full">
          <div className="bg-white h-full absolute z-20 -translate-x-[35px] rounded-full w-1"></div>

          <div className="xl:gap-2 w-full sm:flex-row lg:flex-col xl:flex-row sm:justify-between flex flex-col">
            <Link
              href={
                detail.is_locked
                  ? ""
                  : `/${mainSlug}/${stageSlug}/${detail.slug}`
              }
              className=" text-sm lg:text-base hover:text-pink-600"
            >
              {detail.title}
            </Link>
            <span className="font-thin text-gray-400">{detail.duration}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {detailStatus}
      <div className="xl:gap-2 w-full sm:flex-row lg:flex-col xl:flex-row sm:justify-between flex flex-col">
        <Link
          href={
            detail.is_locked ? "" : `/${mainSlug}/${stageSlug}/${detail.slug}`
          }
          className=" text-sm lg:text-base hover:text-pink-600"
        >
          {detail.title}
        </Link>
        <span className="font-thin text-gray-400">{detail.duration}</span>
      </div>
    </div>
  );
};

const AccordionList: React.FC<Props> = ({ stages }) => {
  const pathname = usePathname();
  const pageName = pathname.split("/")[1] + "/" + pathname.split("/")[2];
  const [openAccordion, setOpenAccordion] = React.useState(
    pathname?.split("/")[3]
  );
  const handleOpenAccordion = (value: string) => {
    if (openAccordion === value) return setOpenAccordion("");
    setOpenAccordion(value);
  };
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={pathname?.split("/")[3]}
      className="flex flex-col gap-4 lg:gap-6 w-full"
    >
      {stages.map((stage, index) => {
        return (
          <AccordionItem key={stage.id} value={stage.slug}>
            <div
              className={`${
                openAccordion === stage.slug && "border-x"
              } rounded-3xl`}
            >
              <AccordionTrigger
                className={`px-5 py-4 ${
                  openAccordion === stage.slug
                    ? " text-black  border-t bg-slate-200 rounded-3xl"
                    : "border rounded-3xl"
                }   hover:bg-pink-500 hover:text-white`}
                onClick={() => handleOpenAccordion(stage.slug)}
              >
                <div className="flex flex-col flex-1 items-start justify-start">
                  <small className="font-normal text-[12px] lg:text-sm">
                    Stage {index + 1}
                  </small>
                  <span className="text-start text-sm lg:text-base">
                    {stage.title}
                  </span>
                  <div className="w-full  items-center justify-center  mt-2 flex gap-4">
                    <Progress
                      value={stage.progress}
                      className="h-2"
                      isCompleted={stage.progress === 100}
                    />
                    <span>{stage.progress}%</span>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className=" border-b h-full w-full rounded-b-3xl gap-8 p-8 flex ">
                <div className="h-auto border border-dashed"></div>
                <div className="flex flex-col gap-4 w-full">
                  {stage.details.map((detail, index) => {
                    if (index === 0) {
                      return (
                        <DetailCard
                          mainSlug={pageName}
                          stageSlug={stage.slug}
                          index="first"
                          detail={detail}
                          key={detail.id}
                        />
                      );
                    }
                    if (index === stage.details.length - 1) {
                      return (
                        <DetailCard
                          mainSlug={pageName}
                          stageSlug={stage.slug}
                          index="last"
                          detail={detail}
                          key={detail.id}
                        />
                      );
                    }
                    // isLastDetail={index === stage.details.length - 1}
                    return (
                      openAccordion === stage.slug && (
                        <DetailCard
                          mainSlug={pageName}
                          stageSlug={stage.slug}
                          index="middle"
                          detail={detail}
                          key={detail.id}
                        />
                      )
                    );
                  })}
                </div>
              </AccordionContent>
            </div>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default AccordionList;
