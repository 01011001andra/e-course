import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import React from "react";

interface CardType {
  imageSrc: string;
  altText: string;
  parts: number;
  lessons: number;
  duration: string;
  title: string;
  description: string;
  price: string;
  originalPrice: string;
  students: number;
}

const CourseCard: React.FC<CardType> = ({
  imageSrc,
  altText,
  parts,
  lessons,
  duration,
  title,
  description,
  price,
  originalPrice,
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
          <Icon
            icon="material-symbols:person"
            className="text-sm hover:text-primary transition-all duration-300 text-gray-600 "
          />
          {students}
        </div>
      </div>
      <div className="p-6 flex flex-col justify-between gap-4 h-full">
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <small className="text-gray-600">{parts} Bagian</small>
            <Icon icon={"mdi:dot"} />
            <small className="text-gray-600">{lessons} Pelajaran</small>
            <Icon icon={"mdi:dot"} />
            <small className="text-gray-600">{duration}</small>
          </div>
          <span className="text-base lg:text-xl font-bold md:text-lg">
            {title}
          </span>
          <p className="text-gray-500 text-sm line-clamp-5">{description}</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="text-pink-600 font-bold text-lg whitespace-nowrap">
              Rp. {price}
            </span>
            {originalPrice && (
              <span className="text-gray-400 text-xs line-through whitespace-nowrap">
                Rp. {originalPrice}
              </span>
            )}
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
