import React from "react";
import Layout from "../Layout/Layout";
import { EventCard } from "../common/EventCard";
import HeadingText from "../common/HeadingText";
import Link from "next/link";

type Props = {};
const events = [
  {
    name: "Frontend Development Workshop",
    date: "Wednesday, 10 July",
    time: "10:00 AM",
    status: "upcoming",
    platform: "Zoom",
    description:
      "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
  },
  {
    name: "Backend Development Webinar",
    date: "Saturday, 13 July",
    time: "2:00 PM",
    status: "upcoming",
    platform: "Microsoft Teams",
    description:
      "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
  },
  {
    name: "Project Demo",
    date: "Thursday, 10 July",
    time: "11:00 AM",
    status: "done",
    platform: "Google Meet",
    description:
      "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
  },
];

const EventSection = (props: Props) => {
  return (
    <Layout>
      <div className="flex justify-between ">
        <HeadingText className="mb-10defined">
          OUR <p className="bg-primary-honey-yellow inline">EVENT</p>
        </HeadingText>
        <Link
          href={"/event"}
          className="text-base lg:text-lg hover:underline transition duration-500"
        >
          Expore events
        </Link>
      </div>
      <section className="grid grid-cols-1 mt-16 h-fit lg:grid-cols-3 gap-10">
        {events?.map((data) => (
          <EventCard key={data.name} data={data} />
        ))}
      </section>
    </Layout>
  );
};

export default EventSection;
