import { ArrowUp } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";

export default function FooterContent() {
  return (
    <div className=" bg-primary-honey-yellow text-primary-bee-black py-8 px-12 h-full w-full flex items-end">
      {/* <Section1 /> */}
      <Section2 />
    </div>
  );
}

const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between w-full items-start ">
      <div className="flex flex-col lg:flex-row items-start lg:items-end">
        <h1 className="lg:text-[1/3vw] text-[10vw] font-semibold leading-[0.8] font-monos mt-10">
          ©The Hive.
        </h1>
        <p className="text-base font-monos lg:text-xl font-medium">
          All rights reserved. 2024-present.
        </p>
      </div>
      <div className="w-fit self-end">
        <Link
          href={"#home"}
          scroll={true}
          legacyBehavior={true}
          className="scroll-smooth"
        >
          <div className="bg-zinc-700 w-full h-auto rounded-full p-4">
            <ArrowUp color="#FFFFFF" />
          </div>
        </Link>
      </div>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex shrink-0 gap-20">
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-[#ffffff80]">About</h3>
        <p>Home</p>
        <p>Projects</p>
        <p>Our Mission</p>
        <p>Contact Us</p>
      </div>
    </div>
  );
};
