"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Link as LinkIcon } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { Card, CardContent } from "./card";
import { User } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import FadeInComponent from "../animation/FadeInComponent";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    name: string;
    position: string;
    // link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-x-3 gap-y-6 lg:gap-x-0 lg:gap-y-0  lg:grid-cols-4  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.name}
          className="relative group  block p-0 md:p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <FadeInComponent>
            <Card className="aspect-[12/13] rounded-2xl h-full w-full overflow-hidden group-hover:border-slate-700 text-primary-bee-black transition z-10 duration-300 relative ">
              <CardContent className="flex p-3 md:p-6 flex-col justify-end w-full h-full">
                <div className=" h-full w-full top-0 left-0 absolute flex justify-center items-center">
                  <User size={42} />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <h1 className="text-base leading-5 md:leading-normal md:text-xl font-monos font-semibold">
                      {item.name}
                    </h1>
                    <p className="text-xs md:text-base text-zinc-600 font-inter">
                      {item.position}
                    </p>
                  </div>
                  <Link
                    href={"/about"}
                    className=" absolute cursor-pointer lg:opacity-0 transition duration-300 opacity-30 w-full h-full bottom-0 left-0 hover:opacity-100"
                  >
                    <div className="w-full h-full p-3 md:p-6 flex justify-end items-end">
                      <LinkIcon className="text-lg lg:text-2xl" />
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </FadeInComponent>
        </div>
      ))}
    </div>
  );
};
