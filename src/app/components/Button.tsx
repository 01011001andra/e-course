import React from "react";

const ButtonGlobal = ({
  fill = false,
  children,
}: {
  fill?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <button
      className={`px-5 py-3  lg:px-10 lg:py-[12px] whitespace-nowrap text-xs lg:text-base border text-pink-600 ${
        fill && "bg-pink-600 text-white"
      } border-pink-600 font-semibold rounded-lg `}
    >
      {children}
    </button>
  );
};

export default ButtonGlobal;
