import FadeIn1 from "../animation/FadeIn1";
import FadeInComponent from "../animation/FadeInComponent";
import Layout from "../Layout/Layout";
import React from "react";

type Props = {};

const Text = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[14vw] text-primary-honey-yellow font-monos leading-none tracking-tight lg:text-9xl font-bold  ">
    {children}
  </p>
);

const phrase = [
  "The Hive supports youth with learning resources,",
  "webiner programs and a welcoming community.",
];
const HeroSection = (props: Props) => {
  return (
    <main className="inset-0 z-20 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <section
        className=" transform  bg-[radial-gradient(100%_50%_at_50%_0%,rgba(255,179,0,0.3)_0%,rgba(255,179,0,0)_50%,rgba(255,179,0,0)_100%)]
 overflow-x-hidden"
      >
        <Layout className="h-screen">
          <div className="flex flex-col h-5/6 justify-end gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="">
              <FadeInComponent>
                <Text>Dream</Text>
              </FadeInComponent>
              <FadeInComponent>
                <Text>Connection</Text>
              </FadeInComponent>
              <FadeInComponent>
                <Text>Growth.</Text>
              </FadeInComponent>
            </div>
            <div className="w-full lg:w-1/3">
              <FadeIn1
                phrases={phrase}
                className="text-base font-medium text-primary-bee-black font-inter lg:text-2xl "
              />
              <p></p>
            </div>
          </div>
        </Layout>
      </section>
    </main>
  );
};

export default HeroSection;
