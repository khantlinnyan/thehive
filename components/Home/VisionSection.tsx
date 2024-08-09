import React from "react";
import Layout from "../Layout/Layout";
import HeadingText from "../common/HeadingText";
import Text from "../common/Text";
import quotation from "@/public/quotation.png";
import Image from "next/image";
import { Highlight } from "../ui/hero-highlight";
import FadeInComponent from "../animation/FadeInComponent";

type Props = {};

const VisionSection = (props: Props) => {
  return (
    <FadeInComponent>
      <Layout className=" my-40 lg:my-72 flex flex-col gap-8 lg:gap-12 justify-center items-center ">
        {/* <HeadingText>OUR VISION</HeadingText> */}
        <Image
          src={quotation}
          height={100}
          width={100}
          alt="Quotation mark"
          className="img-filter -z-10 w-10 lg:w-14"
        />
        <Text className="mx-auto text-xl font-inter max-w-4xl font-bold text-primary-bee-black textbase  lg:text-3xl leading-snug tracking-normal">
          We see “The Hive” as{" "}
          <Highlight>more than just an organization</Highlight> but a thriving
          community that motivates and encourages individuals, especially youths
          to reach their full potential in the future.&#34;
        </Text>

        <div className="flex flex-col justify-center font-monos items-center">
          <Text className="text-base text-zinc-900 font-semibold lg:text-lg">
            Phyu That Kyi
          </Text>
          <Text className="text-sm lg:text-base">
            Creative Director @ The Hive
          </Text>
        </div>
      </Layout>
    </FadeInComponent>
  );
};

export default VisionSection;
