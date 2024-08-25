import FadeInComponent from "@/components/animation/FadeInComponent";
import { EventCard } from "@/components/common/EventCard";
import HeadingText from "@/components/common/HeadingText";
import Layout from "@/components/Layout/Layout";
import React from "react";
import { events } from "@/components/Home/EventSection";

type Props = {};

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
