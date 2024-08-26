import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React from "react";

interface Props {
  params: {
    slug: string[];
  };
}

const BreadcrumbDetail: React.FC<Props> = ({ params }) => {
  console.log(params);
  return (
    <Breadcrumb className="py-2 lg:py-4 ">
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link
            href="/courses"
            className="text-xs lg:text-base flex items-center gap-1"
          >
            <Icon icon={"hugeicons:course"} />
            Courses
          </Link>
        </BreadcrumbItem>

        {params?.slug?.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <BreadcrumbSeparator />
              <BreadcrumbItem key={item}>
                <Link
                  href={`/courses/${item}`}
                  className="text-xs lg:text-base"
                >
                  {item}
                </Link>
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbDetail;
