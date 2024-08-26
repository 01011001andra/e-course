import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const AccordionList = () => {
  const [openAccordion, setOpenAccordion] = React.useState("");

  const handleOpenAccordion = (value: string) => {
    if (openAccordion === value) return setOpenAccordion("");
    setOpenAccordion(value);
  };

  return (
    <Accordion
      type="single"
      collapsible
      className="flex flex-col gap-4 lg:gap-6 w-full"
    >
      <AccordionItem value="item-1">
        <div
          className={`${openAccordion === "item-1" && "border-x"} rounded-3xl`}
        >
          <AccordionTrigger
            className={`px-5 py-4 ${
              openAccordion === "item-1"
                ? " text-black  border-t bg-slate-200 rounded-3xl"
                : "border rounded-3xl"
            }   hover:bg-pink-500 hover:text-white`}
            onClick={() => handleOpenAccordion("item-1")}
          >
            <div className="flex flex-col flex-1 items-start justify-start">
              <small className="font-normal text-[12px] lg:text-sm">
                Is it accessible?
              </small>
              <span className="text-start text-sm lg:text-base">
                Is it accessible?s it accessible?s it accessible?s it
                accessible?s it accessible?
              </span>
              <div className="w-full  items-center justify-center  mt-2 flex gap-4">
                <Progress value={90} className="h-2" />
                <span>90%</span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className=" border-b h-full w-full rounded-b-3xl gap-8 p-8 flex ">
            <div className="h-auto border border-dashed"></div>
            <div className="flex flex-col gap-4 w-full">
              <div className="w-full">
                <div className="size-6 bg-pink-600 rounded-full absolute flex items-center justify-center -translate-x-[45px]">
                  <Icon icon={"uim:check"} color="white" />
                </div>
                <div className="xl:gap-2 w-full sm:flex-row lg:flex-col xl:flex-row sm:justify-between flex flex-col">
                  <span className=" text-sm lg:text-base">
                    Yes. It adheres to the WAI-ARIA design pattern. Yes. It
                    adheres to the WAI-ARIA design pattern.
                  </span>
                  <span className="font-thin text-gray-400">22:15</span>
                </div>
              </div>
              {openAccordion === "item-1" && (
                <div>
                  <div className="size-6 bg-pink-200 rounded-full absolute flex items-center justify-center -translate-x-[45px]">
                    <Icon icon={"weui:play-filled"} className="text-pink-600" />
                  </div>
                  <div className="xl:gap-2 w-full sm:flex-row lg:flex-col xl:flex-row sm:justify-between flex flex-col">
                    <span className=" text-sm lg:text-base">
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </span>
                    <span className="font-thin text-gray-400">22:15</span>
                  </div>
                </div>
              )}
              {openAccordion === "item-1" && (
                <div>
                  <div className="size-6 border-2 bg-white rounded-full absolute flex items-center justify-center -translate-x-[45px]">
                    <Icon
                      icon={"material-symbols:lock-outline"}
                      className="text-gray-400"
                    />
                  </div>
                  <div className="xl:gap-2 w-full sm:flex-row lg:flex-col xl:flex-row sm:justify-between flex flex-col">
                    <span className=" text-sm lg:text-base">
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </span>
                    <span className="font-thin text-gray-400">22:15</span>
                  </div>
                </div>
              )}
              {openAccordion === "item-1" && (
                <div>
                  <div className="size-6 border-2 bg-white rounded-full absolute flex items-center justify-center -translate-x-[45px]">
                    <Icon
                      icon={"material-symbols:lock-outline"}
                      className="text-gray-400"
                    />
                  </div>
                  <div className="xl:gap-2 w-full sm:flex-row lg:flex-col xl:flex-row sm:justify-between flex flex-col">
                    <span className=" text-sm lg:text-base">
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </span>
                    <span className="font-thin text-gray-400">22:15</span>
                  </div>
                </div>
              )}
              {openAccordion === "item-1" && (
                <div>
                  <div className="size-6 border-2 bg-white rounded-full absolute flex items-center justify-center -translate-x-[45px]">
                    <Icon
                      icon={"material-symbols:lock-outline"}
                      className="text-gray-400"
                    />
                  </div>
                  <div className="xl:gap-2 w-full sm:flex-row lg:flex-col xl:flex-row sm:justify-between flex flex-col">
                    <span className=" text-sm lg:text-base">
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </span>
                    <span className="font-thin text-gray-400">22:15</span>
                  </div>
                </div>
              )}

              {/* Item terakhir beda styling, lebih custom */}
              {openAccordion === "item-1" && (
                <div className="flex relative">
                  <div className="flex flex-col z-30">
                    <div className="size-6 border-2 bg-white rounded-full absolute flex items-center justify-center -translate-x-[45px]">
                      <Icon
                        icon={"material-symbols:lock-outline"}
                        className="text-gray-400"
                      />
                    </div>
                  </div>
                  <div className="gap-5 w-full flex h-full">
                    <div className="bg-white h-full absolute z-20 -translate-x-[35px] rounded-full w-1"></div>
                    {/* <div className="flex flex-col h-full absolute z-20">
                  </div> */}
                    <div className="xl:gap-2 w-full sm:flex-row lg:flex-col xl:flex-row sm:justify-between flex flex-col">
                      <span className=" text-sm lg:text-base">
                        Yes. It adheres to the WAI-ARIA design pattern.
                      </span>
                      <span className="font-thin text-gray-400">22:15</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </AccordionContent>
        </div>
      </AccordionItem>
      <AccordionItem value="item-2">
        <div
          className={`${openAccordion === "item-2" && "border-x"} rounded-3xl`}
        >
          <AccordionTrigger
            className={`px-5 py-4 ${
              openAccordion === "item-2"
                ? " text-black  border-t bg-slate-200 rounded-3xl"
                : "border rounded-3xl"
            }   hover:bg-pink-500 hover:text-white`}
            onClick={() => handleOpenAccordion("item-2")}
          >
            <div className="flex flex-col flex-1 items-start justify-start">
              <small className="font-normal text-[12px] lg:text-sm">
                Is it accessible?
              </small>
              <span className="text-start text-sm lg:text-base">
                Is it accessible?s it accessible?s it accessible?s it
                accessible?s it accessible?
              </span>
              <div className="w-full  items-center justify-center  mt-2 flex gap-4">
                <Progress value={100} className="h-2" isCompleted />
                <span>100%</span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className=" border-b h-full w-full rounded-b-3xl gap-8 p-8 flex ">
            <div className="h-auto border border-dashed"></div>
            <div className="flex flex-col gap-4 w-full">
              <div className="w-full">
                <div className="size-6 bg-pink-600 rounded-full absolute flex items-center justify-center -translate-x-[45px]">
                  <Icon icon={"uim:check"} color="white" />
                </div>
                <div className="xl:gap-2 w-full sm:flex-row lg:flex-col xl:flex-row sm:justify-between flex flex-col">
                  <span className=" text-sm lg:text-base ">
                    Yes. It adheres to the WAI-ARIA design pattern. Yes. It
                    adheres to the WAI-ARIA design pattern.
                  </span>
                  <span className="font-thin text-gray-400">22:15</span>
                </div>
              </div>
              {openAccordion === "item-2" && (
                <div>
                  <div className="size-6 bg-pink-200 rounded-full absolute flex items-center justify-center -translate-x-[45px]">
                    <Icon icon={"weui:play-filled"} className="text-pink-600" />
                  </div>
                  <div className="xl:gap-2 w-full sm:flex-row lg:flex-col xl:flex-row sm:justify-between flex flex-col">
                    <span className=" text-sm lg:text-base">
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </span>
                    <span className="font-thin text-gray-400">22:15</span>
                  </div>
                </div>
              )}
              {openAccordion === "item-2" && (
                <div>
                  <div className="size-6 border-2 bg-white rounded-full absolute flex items-center justify-center -translate-x-[45px]">
                    <Icon
                      icon={"material-symbols:lock-outline"}
                      className="text-gray-400"
                    />
                  </div>
                  <div className="xl:gap-2 w-full sm:flex-row lg:flex-col xl:flex-row sm:justify-between flex flex-col">
                    <span className=" text-sm lg:text-base">
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </span>
                    <span className="font-thin text-gray-400">22:15</span>
                  </div>
                </div>
              )}
              {openAccordion === "item-2" && (
                <div>
                  <div className="size-6 border-2 bg-white rounded-full absolute flex items-center justify-center -translate-x-[45px]">
                    <Icon
                      icon={"material-symbols:lock-outline"}
                      className="text-gray-400"
                    />
                  </div>
                  <div className="xl:gap-2 w-full sm:flex-row lg:flex-col xl:flex-row sm:justify-between flex flex-col">
                    <span className=" text-sm lg:text-base">
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </span>
                    <span className="font-thin text-gray-400">22:15</span>
                  </div>
                </div>
              )}
              {openAccordion === "item-2" && (
                <div>
                  <div className="size-6 border-2 bg-white rounded-full absolute flex items-center justify-center -translate-x-[45px]">
                    <Icon
                      icon={"material-symbols:lock-outline"}
                      className="text-gray-400"
                    />
                  </div>
                  <div className="xl:gap-2 w-full sm:flex-row lg:flex-col xl:flex-row sm:justify-between flex flex-col">
                    <span className=" text-sm lg:text-base">
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </span>
                    <span className="font-thin text-gray-400">22:15</span>
                  </div>
                </div>
              )}

              {/* Item terakhir beda styling, lebih custom */}
              {openAccordion === "item-2" && (
                <div className="flex relative">
                  <div className="flex flex-col z-30">
                    <div className="size-6 border-2 bg-white rounded-full absolute flex items-center justify-center -translate-x-[45px]">
                      <Icon
                        icon={"material-symbols:lock-outline"}
                        className="text-gray-400"
                      />
                    </div>
                  </div>
                  <div className="gap-5 w-full flex h-full">
                    <div className="bg-white h-full absolute z-20 -translate-x-[35px] rounded-full w-1"></div>
                    {/* <div className="flex flex-col h-full absolute z-20">
                  </div> */}
                    <div className="xl:gap-2 w-full sm:flex-row lg:flex-col xl:flex-row sm:justify-between flex flex-col">
                      <span className=" text-sm lg:text-base">
                        Yes. It adheres to the WAI-ARIA design pattern.
                      </span>
                      <span className="font-thin text-gray-400">22:15</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </AccordionContent>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionList;
