"use client";
import { navigation } from "@/utils/navigation";
import Link from "next/link";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { menuSlide } from "@/utils/animation";
import Curve from "./Curve";
import Auth from "./auth/Auth";

const NavigationActive = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className={`h-full w-full fixed flex items-end justify-end z-0`}>
      <div className="w-full h-full flex justify-between">
        <div className="flex-1 " onClick={onClose}></div>
        <motion.div
          variants={menuSlide}
          animate="enter"
          exit="exit"
          initial="initial"
          className="flex flex-col items-center h-full w-full md:w-1/2 xl:w-1/3 bg-black/85  py-20"
        >
          {[...navigation]?.map((item) => {
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
          <Auth isMobile />
          <Curve />
        </motion.div>
      </div>
    </div>
  );
};

const FixedNav = () => {
  const [fixed, setFixed] = useState(false);
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

  const handleClose = () => {
    setIsActive(false);
    setTimeout(() => {
      setFixed(false);
    }, 2000);
  };

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
      <AnimatePresence mode="wait">
        {isActive && <NavigationActive onClose={() => handleClose()} />}
      </AnimatePresence>
    </div>
  );
};

export default FixedNav;
