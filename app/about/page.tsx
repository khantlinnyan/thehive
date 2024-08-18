import MemberSection from "@/components/About/MemberSection";
import FadeInComponent from "@/components/animation/FadeInComponent";
import HeadingText from "@/components/common/HeadingText";
import Text from "@/components/common/Text";
import Layout from "@/components/Layout/Layout";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FlipWords } from "@/components/ui/flip-words";
import React from "react";

type Props = {};

const people = [
  { name: "MgMg", position: "Head of Tech" },
  { name: "Daw Daw", position: "Software Engineer" },
  { name: "Ko Ko", position: "UI/UX Designer" },
  { name: "Ma Ma", position: "Project Manager" },
  { name: "U U", position: "Data Analyst" },
  { name: "Daw Daw", position: "DevOps Engineer" },
  { name: "Ko Ko", position: "Quality Assurance" },
  { name: "Ma Ma", position: "Product Owner" },
  { name: "U U", position: "Scrum Master" },
  { name: "Daw Daw", position: "Business Analyst" },
];

const words = ["The Hive", "worker bees", "youth", "kyay kwl luu ngal"];
const page = (props: Props) => {
  return (
    <main className="">
      <section className="lg:h-screen container mt-60 mb-28 lg:mt-0 lg:mb-0  max-w-7xl mx-auto justify-center items-center bg-wite flex">
        <HeadingText className="lg:text-7xl lg:leading-[1.12] lg:tracking-tight">
          We are
          <FlipWords words={words} />,
          <br />
          we believe that together, <br className="hidden lg:block" />
          we can dream connect and grow <br className="hidden lg:block" />
          into the best versions of ourselves.
        </HeadingText>
      </section>
      <Layout>
        <section className="mb-20 lg:mt-20 lg:mb-32 flex overflow-hidden flex-col lg:gap-20 gap-8 lg:flex-row items-start justify-between">
          <HeadingText className="lg:text-5xl">
            How Worker bees{" "}
            <span className="text-primary-honey-yellow">work</span>
          </HeadingText>
          <FadeInComponent className="w-full lg:w-9/12">
            <Text className="">
              WorkerBees drive The Hive&apos;s mission by taking on various
              roles and working collaboratively. They organize events, manage
              programs, and engage with the community, all while leveraging
              their unique skills to support and empower others. Their
              collective efforts ensure that The Hive&apos;s initiatives are
              effective and impactful.
            </Text>
          </FadeInComponent>
        </section>
        <section>
          <HeadingText className="lg:text-5xl">Our worker bees</HeadingText>
          <HoverEffect items={people} />
        </section>
      </Layout>
    </main>
  );
};

export default page;
