import FadeInComponent from "@/components/animation/FadeInComponent";
import { EventCard } from "@/components/common/EventCard";
import HeadingText from "@/components/common/HeadingText";
import Layout from "@/components/Layout/Layout";
import React from "react";
import { events } from "@/components/Home/EventSection";
import { Metadata } from "next";

type Props = {};
export const metadata: Metadata = {
  title: "Events",
  description:
    "The Hive is a youth-driven non-profit organization in Myanmar dedicated to empowering individuals through education and personal growth. We provide a safe and inclusive community where young people can connect, inspire each other, and showcase their talents. Our mission focuses on offering valuable educational resources, promoting personal development, and creating opportunities for youth to thrive. Join us in building a supportive environment that fosters dreams, connections, and growth.",
};

const page = (props: Props) => {
  return (
    <Layout className="mt-28">
      <HeadingText className="text-center">Our Events</HeadingText>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto my-10 max-w-2xl">
        {events.map((i) => (
          <FadeInComponent key={i.name}>
            <EventCard data={i} />
          </FadeInComponent>
        ))}
      </section>
    </Layout>
  );
};

export default page;
