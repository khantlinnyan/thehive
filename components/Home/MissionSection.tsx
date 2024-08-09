import React from "react";
import Image from "next/image";
import Layout from "../Layout/Layout";
import HeadingText from "../common/HeadingText";
import {
  Handshake,
  RocketLaunch,
  Palette,
  BookOpenText,
} from "@phosphor-icons/react/dist/ssr";
import MissionCard from "../common/MissionCard";
type Props = {};

const iconSize = 60;
const iconColor = "#333333";
const data = [
  {
    id: 1,
    title: "Building a Supportive Community",
    description:
      "We create a safe space for connection & inspiration. Be yourself, be accepted, be empowered!",
    // bgColor: "bg-[#bfe7ff]",
    icon: () => (
      <Handshake
        size={iconSize}
        color={iconColor}
        className="w-5/6 lg:w-full mx-auto"
      />
    ),
  },
  {
    id: 2,
    title: "Learn & Grow!",
    description:
      "Education for all! Explore free workshops, seminars & webinars on various topics. Learn & reach your potential!",
    // bgColor: "bg-[#c1ffc1]",

    icon: () => (
      <BookOpenText
        size={iconSize}
        color={iconColor}
        className="w-5/6 lg:w-full mx-auto"
      />
    ),
  },
  {
    id: 3,
    title: "Level Up Your Life!",
    description:
      "Invest in your future! Develop skills for happiness. Explore mind mastery & career paths. Conquer challenges, unlock your awesome!",
    // bgColor: "bg-[#ffcc99]",

    icon: () => (
      <RocketLaunch
        size={iconSize}
        color={iconColor}
        className="w-5/6 lg:w-full mx-auto"
      />
    ),
  },
  // {
  //   id: 2,
  //   title: "Shine Your Light!",
  //   description:
  //     "Got talent? Share it! We provide a platform for your art, music, or anything you excel at. Express yourself, get recognized!",
  //   bgColor: "bg-[#dda0dd]",

  //   icon: () => <Palette size={36} className="w-5/6 lg:w-full mx-auto" />,
  // },
];
// grid grid-cols-1 p-10 md:grid-cols-2 lg:grid-cols-3 gap-8
const MissionSection = (props: Props) => {
  return (
    <Layout className=" mt-28 lg:mt-48 flex flex-col gap-10">
      <HeadingText className=" text-start lg:text-center">
        What we <p className="inline bg-primary-honey-yellow">do</p>
      </HeadingText>
      <main className="flex justify-center justify-items-start items-start flex-wrap gap-10">
        {data.map((i, index) => (
          <MissionCard
            key={index}
            icon={i.icon}
            title={i.title}
            description={i.description}
          />
        ))}
      </main>
    </Layout>
  );
};

export default MissionSection;
