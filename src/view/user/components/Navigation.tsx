"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CircleUser, Menu, Package2, Search } from "lucide-react";
import { CommandDialogDemo } from "./CommandDialogDemo";
import { DetailCourse } from "@/utils/constant";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const NavigationUser = () => {
  const [open, setOpen] = React.useState(false);
  let allMyCourse = DetailCourse.map((item) => {
    return {
      id: item.id,
      title: item.title,
      description: item.description,
      slug: item.slug,
    };
  }).slice(0, 3);
  const [myCourses, setMyCourses] = React.useState([
    {
      id: "",
      title: "",
      description: "",
      slug: "",
    },
  ]);
  let courses = DetailCourse.map((item) => {
    return {
      id: item.id,
      title: item.title,
      description: item.description,
      slug: item.slug,
    };
  }).slice(0, 5);

  courses.push({
    id: "more",
    title: "Show all ➡️",
    description: "Find more courses here",
    slug: "",
  });

  React.useEffect(() => {
    setMyCourses(allMyCourse);
  }, []);
  return (
    <>
      <div className="w-full  h-24 items-center justify-center shadow-md hidden lg:flex">
        <div className="w-full  px-4 flex justify-between items-center">
          <div className="flex gap-4">
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
            <span className="text-gray-600/50 font-bold text-lg flex items-center justify-center">
              /
            </span>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {courses.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={`/courses/${component.slug}`}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>My Courses</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            href="/my-courses"
                            className="flex h-full w-full hover:bg-pink-600 hover:text-white select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          >
                            <Icon icon={"hugeicons:course"} fontSize={32} />
                            <div className="mb-2 mt-4 text-lg font-medium line-clamp-2">
                              Read more...
                            </div>
                            <p className="text-sm line-clamp-3 leading-tight text-muted-foreground">
                              Show all my courses
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      {myCourses.map((item, index) => {
                        return (
                          <ListItem
                            key={index}
                            href={`/my-courses/mastering-python-for-data-science/intermediate-python-programming/object-oriented-programming`}
                            title={item.title}
                          >
                            {item.title}
                          </ListItem>
                        );
                      })}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex gap-4 ">
            <div className="w-full relative flex items-center ">
              <Icon
                icon={"material-symbols:search"}
                className="absolute left-3 h-5 w-5 text-gray-400"
              />
              <p className="text-sm text-gray-400 absolute right-5 ">
                Press{" "}
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </p>
              <Input
                className="rounded-full w-72 max-w-xs pl-10 cursor-pointer hover:border-pink-600"
                placeholder="Search"
                onClick={() => setOpen(true)}
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="cursor-pointer hover:border-black border">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mr-4">
                <DropdownMenuLabel>Yandra Muslim</DropdownMenuLabel>

                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  Edit Profile
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <Link href={"/"}>
                  <DropdownMenuItem className="cursor-pointer">
                    Logout
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 lg:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>

              {components.map((component) => (
                <Link
                  key={component.href}
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  {component.title}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />

              <Input
                type="search"
                placeholder="Search..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] cursor-pointer"
                onClick={() => setOpen(true)}
              />
            </div>
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <Avatar className="cursor-pointer hover:border-black border">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <CommandDialogDemo open={open} setOpen={setOpen} />
    </>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-pink-600 hover:text-white focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-1 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NavigationUser;
