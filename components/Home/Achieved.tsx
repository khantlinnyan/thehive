import React from "react";
import Layout from "../Layout/Layout";
import HeadingText from "../common/HeadingText";
import { cn } from "@/lib/utils";

type Props = {};

const Achieved = (props: Props) => {
  return (
    <Layout className="w-full">
      <HeadingText>
        What we <p className="bg-primary-honey-yellow/80 inline">achieved?</p>
      </HeadingText>

      <FeaturesSectionDemo />
    </Layout>
  );
};

export default Achieved;
// import {
//   IconAdjustmentsBolt,
//   IconCloud,
//   IconCurrencyDollar,
//   IconEaseInOut,
//   IconHeart,
//   IconHelp,
//   IconRouteAltLeft,
//   IconTerminal2,
// } from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "40+ ACTIVE MEMBERS",
      description:
        "There are over 40 members who make this organization run during 2024",
      //   icon: <IconTerminal2 />,
    },
    {
      title: "3+ WEBINAR",
      description:
        "Over the past year, The Hive has successfully conducted over 3 webinars, each designed to inspire, educate, and empower our community.",
      //   icon: <IconEaseInOut />,
    },
    {
      title: "100+ ANTENDEE",
      description:
        "With over 100 participants attending our webinars, we have shown the true value and impact of our sessions.",
      //   icon: <IconCurrencyDollar />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 mx-auto w-full">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg  font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-primary-honey-yellow transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100 font-monos">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 font-inter dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
