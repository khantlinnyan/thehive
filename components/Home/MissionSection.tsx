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
const MissionSection = (props: Props) => {
  return (
    <Layout className=" mt-28 lg:mt-48 flex flex-col gap-10">
      <HeadingText className="capitalize text-start lg:text-center">
        OUR <p className="inline bg-primary-honey-yellow">MISSION</p>
      </HeadingText>
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {data.map((i, index) => (
          <MissionCard
            key={index}
            icon={i.icon}
            title={i.title}
            description={i.description}
            bgColor={i.bgColor}
          />
        ))}
      </main>
    </Layout>
  );
};

export default MissionSection;
