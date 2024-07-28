"use client";
import { navigation } from "@/utils/navigation";
import Link from "next/link";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { menuSlide } from "@/utils/animation";
import Curve from "./Curve";

const NavigationActive = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="w-full h-full flex justify-between">
      <div className="flex-1 " onClick={onClose}></div>
      <motion.div
        variants={menuSlide}
        animate="enter"
        exit="exit"
        initial="initial"
        className="flex flex-col items-center h-full w-full md:w-1/2 xl:w-1/3 bg-black  py-20"
      >
        {[...navigation, { name: "Login", href: "/login" }]?.map((item) => {
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`w-full px-4 py-3 text-center hover:bg-pink-600 text-white transition-all duration-300 font-medium ${
                item.name === "Login"
                  ? "bg-primary text-center text-white bg-pink-600"
                  : ""
              }`}
            >
              {item.name}
            </Link>
          );
        })}
        <Curve />
      </motion.div>
    </div>
  );
};

const FixedNav = () => {
  const [isActive, setIsActive] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const { scrollY } = useScroll();
  scrollY.onChange((y) => {
    setScrollPosition(y);
    if (y < 100) {
      setIsActive(false);
    }
  });
  const handleIconClick = (event: React.MouseEvent) => {
    setIsActive(!isActive);
  };

  // if (!isActive) return null;
  return (
    <div className="w-full h-full relative z-50">
      <div
        className={`fixed ${
          scrollPosition > 100 ? "top-5" : "top-5 md:-top-20"
        }  transition-all duration-500 right-5 z-50 bg-white rounded-full cursor-pointer border shadow-xl`}
        onClick={handleIconClick}
      >
        <div className="flex justify-end items-center p-4">
          {isActive ? (
            <Icon
              icon="ic:sharp-close"
              className="text-2xl hover:text-primary transition-all duration-300 text-gray-600"
            />
          ) : (
            <Icon
              icon="mdi:hamburger-menu"
              className="text-2xl hover:text-primary transition-all duration-300 text-gray-600"
            />
          )}
        </div>
      </div>
      <div className={`fixed h-full w-full flex items-end justify-end`}>
        <AnimatePresence mode="wait">
          {isActive && <NavigationActive onClose={() => setIsActive(false)} />}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FixedNav;
