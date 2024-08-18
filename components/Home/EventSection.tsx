import React from "react";
import Layout from "../Layout/Layout";
import { EventCard } from "../common/EventCard";
import HeadingText from "../common/HeadingText";
import Link from "next/link";

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

const EventSection = (props: Props) => {
  return (
    <Layout>
      <div className="flex justify-between ">
        <HeadingText className="mb-10defined">
          What we <p className="bg-primary-honey-yellow inline">made</p>
        </HeadingText>
        <Link
          href={"/events"}
          className="text-sm font-inter underline lg:text-lg hover:underline transition duration-500"
        >
          Expore events
        </Link>
      </div>
      <section className="grid grid-cols-1 mt-16 h-full lg:grid-cols-3 gap-10">
        {events?.map((data) => (
          <EventCard key={data.name} data={data} />
        ))}
      </section>
    </Layout>
  );
};

export default EventSection;
