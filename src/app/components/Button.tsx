import React from "react";

const ButtonGlobal = ({
  fill = false,
  children,
  rounded = "rounded-lg",
  backgroundColor = "bg-pink-600",
  textColor = "text-white",
}: {
  fill?: boolean;
  children: React.ReactNode;
  rounded?: "rounded-lg" | "rounded-xl" | "rounded-2xl" | "rounded-full";
  backgroundColor?: "bg-pink-600" | "bg-white";
  textColor?: "text-white" | "text-black" | "text-pink-600";
}) => {
  return (
    <button
      className={`px-5 py-3  lg:px-10 lg:py-[12px] whitespace-nowrap text-xs lg:text-base border text-pink-600 ${backgroundColor} ${textColor} border-pink-600 font-semibold relative ${
        rounded && rounded
      }`}
    >
      {children}
    </button>
  );
};

export default ButtonGlobal;
