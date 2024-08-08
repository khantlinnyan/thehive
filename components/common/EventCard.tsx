"use client";
import Image from "next/image";
import { FollowerPointerCard } from "../ui/following-pointer";
import { ArrowArcRight, ArrowRight } from "@phosphor-icons/react";
import logo from "@/public/logo.png";

export function EventCard({ data }: any) {
  const { name, platform, date, time, description } = data;
  return (
    <div className="h-fit w-full mx-auto">
      <FollowerPointerCard
        title={
          <TitleComponent
            title={"Phyu Thant Kyi"}
            // avatar={blogContent.authorAvatar}
          />
        }
      >
        <div className="relative overflow-hidden rounded-2xl transition duration-200 group bg-white hover:shadow-lg shadow-sm border border-zinc-100">
          <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
            <Image
              src={logo}
              alt="thumbnail"
              // objectFit="cover"
              width={100}
              height={100}
              className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 `}
            />
          </div>
          <div className=" p-4">
            <h2 className="font-bold my-4 text-lg font-inter text-zinc-700">
              {name}
            </h2>
            <h2 className="font-normal my-4 text-sm font-inter text-zinc-500">
              {description}
            </h2>
            <div className="flex flex-row justify-between font-inter items-center mt-10">
              <span className="text-sm text-gray-500">{date}</span>
              <ArrowRight size={24} />
            </div>
          </div>
        </div>
      </FollowerPointerCard>
    </div>
  );
}

const blogContent = {
  slug: "amazing-tailwindcss-grid-layouts",
  author: "Manu Arora",
  date: "28th March, 2023",
  title: "Amazing Tailwindcss Grid Layout Examples",
  description:
    "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
  // image: "/demo/thumbnail.png",
  authorAvatar: "/manu.png",
};

export const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar?: string;
}) => (
  <div className="flex space-x-2 items-center">
    {/* <Image
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    /> */}
    <p>{title}</p>
  </div>
);
