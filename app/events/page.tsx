import FadeInComponent from "@/components/animation/FadeInComponent";
import { EventCard } from "@/components/common/EventCard";
import HeadingText from "@/components/common/HeadingText";
import Layout from "@/components/Layout/Layout";
import React from "react";

type Props = {};

const events = [
  {
    name: "All About English as a first language or English Language B for IGCSE students",
    date: "September 24, 2023",
    status: "done",
    platform: "Zoom",
  },
  {
    name: "SAT Success “Scoring a 1600”",
    date: "30th April, 2024",
    status: "done",
    platform: "Zoom",
  },
  {
    name: "English Language B One on One Counselling Sessions",
    date: "2024 - Present",
    status: "on going",
    platform: "Zoom",
  },
];

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
