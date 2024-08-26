"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Link as LinkIcon } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { Card, CardContent } from "./card";
import { User } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import FadeInComponent from "../animation/FadeInComponent";
import MemberCard from "../About/MemberCard";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    name: string;
    position: string;
    department: string;
    img: string;
    socialLinks: { [key: string]: string };
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
          <MemberCard {...item} />
        </div>
      ))}
    </div>
  );
};
