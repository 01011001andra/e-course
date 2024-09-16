import { Input } from "@/components/ui/input";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Card from "./components/Card";

const ArticlesPage = () => {
  return (
    <div className="container px-4 xl:px-0 py-8 flex flex-col gap-2">
      <h1 className="text-3xl font-black text-pink-600">Articles</h1>
      <p>Here is my articles</p>
      <Input type="text" placeholder="Search..." className="lg:h-12" />
      <div className="flex flex-wrap gap-2">
        <span>Choose topic: </span>
        <span className="bg-pink-600 text-gray-100 cursor-pointer text-sm font-medium transition-colors duration-200 hover:text-white py-0.5 px-1.5 rounded-lg">
          nextjs
        </span>
        <span className="bg-pink-600 text-gray-100 cursor-pointer text-sm font-medium transition-colors duration-200 hover:text-white py-0.5 px-1.5 rounded-lg">
          nextjs
        </span>
        <span className="bg-pink-600 text-gray-100 cursor-pointer text-sm font-medium transition-colors duration-200 hover:text-white py-0.5 px-1.5 rounded-lg">
          nextjs
        </span>
        <span className="bg-pink-600 text-gray-100 cursor-pointer text-sm font-medium transition-colors duration-200 hover:text-white py-0.5 px-1.5 rounded-lg">
          nextjs
        </span>
        <span className="bg-pink-600 text-gray-100 cursor-pointer text-sm font-medium transition-colors duration-200 hover:text-white py-0.5 px-1.5 rounded-lg">
          nextjs
        </span>
        <span className="bg-pink-600 text-gray-100 cursor-pointer text-sm font-medium transition-colors duration-200 hover:text-white py-0.5 px-1.5 rounded-lg">
          nextjs
        </span>
        <span className="bg-pink-600 text-gray-100 cursor-pointer text-sm font-medium transition-colors duration-200 hover:text-white py-0.5 px-1.5 rounded-lg">
          nextjs
        </span>
        <span className="bg-pink-600 text-gray-100 cursor-pointer text-sm font-medium transition-colors duration-200 hover:text-white py-0.5 px-1.5 rounded-lg">
          nextjs
        </span>
        <span className="bg-pink-600 text-gray-100 cursor-pointer text-sm font-medium transition-colors duration-200 hover:text-white py-0.5 px-1.5 rounded-lg">
          nextjs
        </span>
        <span className="bg-pink-600 text-gray-100 cursor-pointer text-sm font-medium transition-colors duration-200 hover:text-white py-0.5 px-1.5 rounded-lg">
          nextjs
        </span>
        <span className="bg-pink-600 text-gray-100 cursor-pointer text-sm font-medium transition-colors duration-200 hover:text-white py-0.5 px-1.5 rounded-lg">
          nextjs
        </span>
        <span className="bg-pink-600 text-gray-100 cursor-pointer text-sm font-medium transition-colors duration-200 hover:text-white py-0.5 px-1.5 rounded-lg">
          nextjs
        </span>
      </div>
      <div className="w-full flex justify-end">
        <Select defaultValue="apple">
          <SelectTrigger className="w-[180px] text-sm">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem className="text-sm" value="apple">
                Sort by date
              </SelectItem>
              <SelectItem className="text-sm" value="banana">
                Sort by views
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default ArticlesPage;
