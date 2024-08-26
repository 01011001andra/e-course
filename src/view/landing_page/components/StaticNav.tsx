"use client";
import ButtonGlobal from "@/components/Button";
import { navigation } from "@/utils/navigation";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Auth from "./auth/Auth";

const StaticNav = () => {
  const pathname = usePathname();
  return (
    <div className="md:flex justify-between container py-4 hidden px-4 xl:px-0">
      <div className="flex gap-2 items-center">
        <Image
          alt="logo"
          src="/images/logo.png"
          width={50}
          height={50}
          className=""
        />
        <span className="font-semibold text-xl text-[#313273]">
          Tukang Koding
        </span>
      </div>
      <div className="flex items-center gap-0 lg:gap-4">
        {navigation.map((item) => {
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`w-full px-4 py-3 text-center transition-all duration-500 font-medium hover:border-b border-black ${
                pathname === item.href ? "border-b font-bold" : ""
              }`}
            >
              {item.name}
            </Link>
          );
        })}
        <div className="flex gap-1">
          <Auth />
          {/* <button
            className={`w-full px-4 py-3 text-center transition-all duration-500 font-medium text-pink-600 hover:text-pink-400 border-black`}
          >
            <span>LOGIN</span>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default StaticNav;
