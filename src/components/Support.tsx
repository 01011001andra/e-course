"use client";
import React from "react";
import { Input } from "./ui/input";
import { Icon } from "@iconify/react/dist/iconify.js";

const Support = () => {
  const [open, setOpen] = React.useState(false);

  let component;

  if (!open) {
    component = (
      <Icon
        icon={"healthicons:contact-support"}
        className="fixed bottom-10 right-10 z-50 bg-pink-600 size-12 cursor-pointer hover:scale-[105%] transition-all duration-200 text-white rounded-full"
        onClick={() => setOpen(true)}
      />
    );
  }
  if (open) {
    component = (
      <div className="fixed bottom-10 z-50 rounded-2xlthe shadow-2xl right-1/2 md:right-10 max-w-sm w-full transform translate-x-1/2 md:translate-x-0 md:transform-none">
        <div className="bg-pink-600 p-4 rounded-t-2xl flex justify-between">
          <span className="text-white font-bold">Support</span>
          <Icon
            icon={"ic:round-close"}
            onClick={() => setOpen(false)}
            className="text-white border rounded-full size-6 cursor-pointer hover:scale-[105%] transition-all duration-200"
          />
        </div>
        <div className="bg-white p-4 border-x border-b rounded-b-2xl w-full flex flex-col gap-2">
          {/* <div className="flex gap-2"> */}
          <div className="flex flex-col gap-1">
            <label htmlFor="pesan" className="text-sm">
              Nama
            </label>
            <input type="text" className="border-b outline-none" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="pesan" className="text-sm">
              Email
            </label>
            <input type="text" className="border-b outline-none" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="pesan" className="text-sm">
              Subject
            </label>
            <input type="text" className="border-b outline-none" />
          </div>
          {/* </div> */}
          <div className="flex flex-col gap-1">
            <label htmlFor="pesan" className="text-sm">
              Pesan
            </label>
            <textarea className="border p-2 rounded-lg"></textarea>
          </div>
          <button className="bg-pink-600 hover:bg-pink-700 transition-all duration-300 text-white font-medium rounded-2xl p-2">
            Submit
          </button>
        </div>
      </div>
    );
  }

  return component;
};

export default Support;
