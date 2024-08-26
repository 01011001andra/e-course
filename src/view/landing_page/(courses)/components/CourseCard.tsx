import BoxReveal from "@/components/BoxReveal";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import React from "react";

interface CardType {
  imageSrc: string;
  altText: string;
  parts: string;
  lessons: string;
  duration: string;
  title: string;
  description: string;
  oldPrice: string;
  newPrice: string;
  students: string;
}

const CourseCard: React.FC<CardType> = ({
  imageSrc,
  altText,
  parts,
  lessons,
  duration,
  title,
  description,
  oldPrice,
  newPrice,
  students,
}) => {
  return (
    <div className="flex flex-col border rounded-2xl shadow-lg">
      <div className="w-full h-52 relative">
        <Image
          alt={altText}
          src={imageSrc}
          width={500}
          height={500}
          className="w-full h-full object-cover object-center hover:object-top transition-all duration-500 rounded-t-2xl"
        />
        <div className="absolute text-sm items-center bottom-4 left-4 px-4 py-1 rounded-full text-pink-600 bg-white flex font-medium">
          <BoxReveal boxColor={"#db2777"} duration={0.5}>
            <div className="flex items-center">
              <Icon
                icon="material-symbols:person"
                className="text-sm hover:text-primary transition-all duration-300 text-gray-600 "
              />
              {students}
            </div>
          </BoxReveal>
        </div>
      </div>
      <div className="p-6 flex flex-col justify-between gap-4 h-full">
        <div className="flex flex-col gap-4">
          <BoxReveal boxColor={"#db2777"} duration={0.5}>
            <div className="flex items-center">
              <small className="text-gray-600">{parts} Bagian</small>
              <Icon icon={"mdi:dot"} />
              <small className="text-gray-600">{lessons} Pelajaran</small>
              <Icon icon={"mdi:dot"} />
              <small className="text-gray-600">{duration}</small>
            </div>
          </BoxReveal>
          <BoxReveal boxColor={"#db2777"} duration={0.5}>
            <span className="text-base lg:text-xl font-bold md:text-lg">
              {title}
            </span>
          </BoxReveal>
          <BoxReveal boxColor={"#db2777"} duration={0.5}>
            <p className="text-gray-500 text-sm line-clamp-5">{description}</p>
          </BoxReveal>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <BoxReveal boxColor={"#db2777"} duration={1}>
              <span className="text-pink-600 font-bold text-lg whitespace-nowrap">
                Rp. {oldPrice}
              </span>
            </BoxReveal>
            <BoxReveal boxColor={"#db2777"} duration={0.5}>
              <>
                {newPrice && (
                  <span className="text-gray-400 text-xs line-through whitespace-nowrap">
                    Rp. {newPrice}
                  </span>
                )}
              </>
            </BoxReveal>
          </div>
          <button
            className={`py-2 px-8 whitespace-nowrap text-sm border bg-pink-600 text-white border-pink-600 font-semibold relative rounded-lg`}
          >
            Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
