"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { DetailCourse } from "@/utils/constant";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  params: {
    slug: string[];
  };
}

const BreadcrumbDetail: React.FC<Props> = ({ params }) => {
  const pathname = usePathname();
  const pageName = pathname.split("/")[1];

  let breadList;

  if (!params.slug) {
    breadList = [pageName];
  }
  if (params.slug) {
    breadList = [pageName, ...params?.slug];
  }
  console.log(params.slug);

  return (
    <Breadcrumb className="py-2 lg:py-4 ">
      <BreadcrumbList>
        {breadList?.map((param, index) => {
          console.log(param);
          if (index === 0) {
            return (
              <BreadcrumbItem key={index}>
                <Link
                  href={`/${param}`}
                  className="text-xs lg:text-base flex items-center gap-1 capitalize"
                >
                  <Icon icon={"hugeicons:course"} />
                  {param}
                </Link>
              </BreadcrumbItem>
            );
          }
          if (index === 1) {
            return (
              <React.Fragment key={index}>
                <BreadcrumbSeparator />
                <BreadcrumbItem key={param}>
                  <Link href={``} className="text-xs lg:text-base">
                    {DetailCourse.find((item) => item.slug === param)?.title}
                  </Link>
                </BreadcrumbItem>
              </React.Fragment>
            );
          }

          if (index === 2) {
            return (
              <React.Fragment key={index}>
                <BreadcrumbSeparator />
                <BreadcrumbItem key={param}>
                  <Link
                    // href={`/${pageName}/${params?.slug[0]}/${params?.slug[1]}`}
                    href={``}
                    className="text-xs lg:text-base"
                  >
                    {/* {DetailCourse.find((item) => item.slug === param)?.title} */}
                    {
                      DetailCourse.find(
                        (item) => item.slug === params?.slug[0]
                      )?.stages.find((stage) => stage.slug === params?.slug[1])
                        ?.title
                    }
                  </Link>
                </BreadcrumbItem>
              </React.Fragment>
            );
          }

          return (
            <React.Fragment key={index}>
              <BreadcrumbSeparator />
              <BreadcrumbItem key={param}>
                <Link href={``} className="text-xs lg:text-base">
                  {/* {DetailCourse.find((item) => item.slug === param)?.title} */}
                  {
                    DetailCourse.find((item) => item.slug === params?.slug[0])
                      ?.stages.find((stage) => stage.slug === params?.slug[1])
                      ?.details.find(
                        (detail) => detail.slug === params?.slug[2]
                      )?.title
                  }
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
