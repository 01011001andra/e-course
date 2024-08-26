import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const BreadcrumbDetail = () => {
  return (
    <Breadcrumb className="py-2 lg:py-4 ">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            href="/"
            className="flex items-center justify-center gap-1 text-xs lg:text-base"
          >
            <Icon icon={"hugeicons:course"} />
            Courses
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components" className="text-xs lg:text-base">
            Javascript
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbDetail;
