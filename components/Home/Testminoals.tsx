"use client";
import HeadingText from "../common/HeadingText";
import Layout from "../Layout/Layout";
import { CardStack } from "../ui/card-stack";
import { cn } from "@/lib/utils";
export function Testmonials() {
  return (
    <Layout className=" flex flex-col gap-10 pt-16 md:pt-28  md:items-center items-start  w-full">
      <HeadingText>Testimonials</HeadingText>
      <CardStack items={CARDS} />
    </Layout>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-yellow-50 text-primary-honey-yellow dark:bg-primary-honey-yellow/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Chaw",
    designation: "Counselee",
    content: (
      <p>
        The counsellor was really kind, friendly, and gave a really{" "}
        <Highlight>detailed feedback</Highlight> on my writings. She also gave
        useful tips and explained very well about the thing I have been
        struggling with. Thanks a lot to all the members of The Hive, and
        especially ama Lilith, for making an urgent counselling session as well
        just because my finals is getting closer. Keep up the good work
        smarties!!
      </p>
    ),
  },
  {
    id: 1,
    name: "Thet Zun Oo (IGCSE May/June 2024) ",
    designation: "Revision Class Student",
    content: (
      <p>
        First of all, I am very greatful for Hive with these amazing free
        revision classes. It is very helpful to me to improve my math grades and
        the understanding. In addition, the teacher is patient and her
        <Highlight> explaination is clear.</Highlight> Lastly, I love the fact
        that the revision classes covered all topics and help us to practice
        past papers too.
      </p>
    ),
  },
  {
    id: 2,
    name: "May Thu Kha (IGCSE Oct/Nov 2024)",
    designation: "Revision Class Student",
    content: (
      <p>
        Teachers were very nice and flexible too. They are very friendly and
        make sure everyone understands the concept,{" "}
        <Highlight>
          explains again and again without being frustrated.
        </Highlight>{" "}
        I am very grateful for The Hive for the free class. They are my exam
        saver ^^.
      </p>
    ),
  },
  {
    id: 3,
    name: "May Yoon Nadi Kyaw",
    designation: "Counselee",
    content: (
      <p>
        It is effective as<Highlight>details feedback</Highlight> are given as
        well as the suggestions to improve the writings.
      </p>
    ),
  },
  {
    id: 4,
    name: "Su Pyae Pyae Zaw (IGCSE May/June 2024)",
    designation: "Revision Class Student",
    content: (
      <p>
        I got a lot of practices from your class and it was really helpful for
        me! You could cover all of things{" "}
        <Highlight>needed to know for exam</Highlight> and I really appreciated
        for your time, effort and goodwill towards us. Thank you again!
      </p>
    ),
  },
];
