import MemberCard from "@/components/About/MemberCard";
import FadeInComponent from "@/components/animation/FadeInComponent";
import HeadingText from "@/components/common/HeadingText";
import Text from "@/components/common/Text";
import Layout from "@/components/Layout/Layout";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FlipWords } from "@/components/ui/flip-words";
import { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "About",
  description:
    "The Hive is a youth-driven non-profit organization in Myanmar dedicated to empowering individuals through education and personal growth. We provide a safe and inclusive community where young people can connect, inspire each other, and showcase their talents. Our mission focuses on offering valuable educational resources, promoting personal development, and creating opportunities for youth to thrive. Join us in building a supportive environment that fosters dreams, connections, and growth.",
};

const words = ["The Hive", "worker bees", "youth"];
const page = async (props: Props) => {
  const response = await fetch("https://the-hive-b.vercel.app/members", {
    next: { revalidate: 3600 },
  });
  const data = await response.json();

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
            <Text className="text-base">
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
          <section className="hidden lg:block">
            <HoverEffect items={data} />
          </section>
          <section className="grid grid-cols-2 gap-x-4 gap-y-8 py-10  lg:hidden">
            {data?.map((item: any) => (
              <MemberCard {...item} key={item?._id} />
            ))}
          </section>
        </section>
      </Layout>
    </main>
  );
};

export default page;
