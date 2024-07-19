import React from "react";
import Layout from "../Layout/Layout";
import HeadingText from "../common/HeadingText";
import Text from "../common/Text";
import logo from "@/public/logo.png";
import Image from "next/image";

type Props = {};

const AboutSection = (props: Props) => {
  return (
    <Layout className="my-20 lg:my-26 flex flex-col gap-20 lg:flex-row items-start justify-between">
      <HeadingText className="">
        OUR <p className="bg-primary-honey-yellow/80 inline">Story</p>
      </HeadingText>
      <div className="lg:w-2/3 w-full">
        <Text className="lg:mb-10 mb-6 font-inter lg:text-3xl text-xl">
          The Hive is a non-profit organization founded by youth in Myanmar. Our
          mission is to motivate and empower individuals through education and
          personal growth.
        </Text>
        <Text className="font-inter lg:text-3xl text-xl">
          We provide a safe space for expression, valuable educational
          resources, webinar programs, and opportunities for youths to showcase
          their talents.
        </Text>
      </div>
    </Layout>
  );
};

export default AboutSection;
