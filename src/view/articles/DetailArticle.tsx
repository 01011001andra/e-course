"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import React from "react";

interface Props {
  params: {
    slug: string;
  };
}

const DetailArticle: React.FC<Props> = ({ params }) => {
  React.useEffect(() => {
    document
      .querySelectorAll("h2")
      .forEach((e) => e.setAttribute("id", e.innerText));
  }, []);

  return (
    <div className="container px-4 xl:px-0 py-8 md:pt-0">
      <div className="w-full h-full flex sm:hidden">
        <AspectRatio ratio={16 / 8}>
          <Image
            src="/images/hero.png"
            alt="Photo by Drew Beamer"
            fill
            className="h-full w-full rounded-md object-cover"
          />
        </AspectRatio>
      </div>
      <div className="w-full h-full hidden sm:flex">
        <AspectRatio ratio={16 / 5}>
          <Image
            src="/images/hero.png"
            alt="Photo by Drew Beamer"
            fill
            className="h-full w-full rounded-md object-cover"
          />
        </AspectRatio>
      </div>
      <h1 className="text-2xl lg:text-3xl font-bold mt-4 ">
        Gradient Border is Unexpectedly Hard
      </h1>
      <p className="text-sm mt-2">Written on July 14, 2024 by Yandra Muslim.</p>
      <div className="flex gap-2 mt-6">
        <div className="flex gap-1 items-center justify-center">
          <Icon icon={"carbon:time"} />
          <span className="text-sm lg:text-base text-pink-600 font-medium">
            21 min read
          </span>
        </div>
        <div className="flex gap-1 items-center justify-center">
          <Icon icon={"ep:view"} />
          <span className="text-sm lg:text-base text-pink-600 font-medium">
            1000 views
          </span>
        </div>
      </div>
      <hr className="border-black w-full my-4" />
      <section className="lg:grid lg:grid-cols-[auto,250px] lg:gap-8">
        <article className="prose  prose-h2:text-xl prose-p:text-base lg:prose-h2:text-2xl lg:prose-p:text-lg max-w-[70rem] mt-4 w-full">
          <h2>Attribution</h2>
          <p>
            This post is originally made for LogRocket, check the original post
            here .
          </p>
          <h2 id="introduction">Introduction</h2>
          <p>
            Are you tired of installing libraries at the start of every Next.js
            project? Next.js boilerplates are what you need! By using a
            boilerplate, you can take advantage of great libraries and
            development features to help you build your next projects.
            Boilerplates save you the time you spend finding tutorials for how
            to set up a library, as well as integrate multiple libraries into
            your project.
          </p>
          <p>
            In this article, we’ll explore the top Next.js boilerplates from
            several tech stacks to match with your needs.
          </p>
          <p>We’ll cover:</p>
          <ul>
            <li>NextJS Starter Boilerplate</li>
            <li>Next.js + Tailwind CSS + TypeScript Starter</li>
            <li>Nextarter Chakra</li>
            <li>Superplate</li>
            <li>TailwindBlog</li>
            <li>Prisma + tRPC</li>
            <li>create-t3-app</li>
            <li>Next.js MongoDB App</li>
            <li>Precedent</li>
            <li>RAN</li>
          </ul>
          <pre>{`npm install @nextjs-boilerplate/nextjs-starter-boilerplate`}</pre>
        </article>
        <aside className="py-4">
          <div className="sticky top-36 flex flex-col gap-2">
            {/* <TableOfContents
              toc={toc}
              minLevel={minLevel}
              activeSection={activeSection}
            /> */}
            <span>Attribution</span>
            <span>Introduction</span>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default DetailArticle;
