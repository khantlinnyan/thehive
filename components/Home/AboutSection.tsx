import React from "react";
import Layout from "../Layout/Layout";
import HeadingText from "../common/HeadingText";
import Text from "../common/Text";
import logo from "@/public/logo.png";
import Image from "next/image";
import FadeIn1 from "../animation/FadeIn1";

type Props = {};
// const descriptionPhrases1 = [
//   "The Hive is a non-profit organization ",
//   "founded by youth in Myanmar.",
//   "Our mission is to motivate and ",
//   "empower individuals through ",
//   "education and personal growth.",
// ];
const descriptionPhrases1 = [
  "The Hive is a non-profit organization founded by youth in Myanmar.",
  "Our mission is to motivate and empower individuals through education and personal growth.",
];

const descriptionPhrases2 = [
  "We provide a safe place for expression, valuable educational resources,",
  "webinar programs, and opportunities for youths to showcase their talents.",
];

const AboutSection = (props: Props) => {
  return (
    <Layout className="my-20 lg:my-26 flex overflow-hidden flex-col gap-20 lg:flex-row items-start justify-between">
      <HeadingText className="">
        Who <p className="bg-primary-honey-yellow/80 inline">we are</p>
      </HeadingText>
      <div className="lg:w-2/3 w-full">
        <FadeIn1 phrases={descriptionPhrases1} />
        <FadeIn1 phrases={descriptionPhrases2} />

        {/* <Text className="lg:mb-10 mb-6 font-inter lg:text-3xl text-xl">
          The Hive is a non-profit organization founded by youth in Myanmar. Our
          mission is to motivate and empower individuals through education and
          personal growth.
        </Text>
        <Text className="font-inter lg:text-3xl text-xl">
          We provide a safe space for expression, valuable educational
          resources, webinar programs, and opportunities for youths to showcase
          their talents.
        </Text> */}
      </div>
    </Layout>
  );
};

export default AboutSection;
