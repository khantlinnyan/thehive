import React, { ReactNode } from "react";
import HeadingText from "./HeadingText";
import FadeInComponent from "../animation/FadeInComponent";

type Props = {
  icon?: any;
  title?: string;
  description?: string;
  bgColor?: string;
};

const MissionCard = ({ icon, title, description, bgColor }: Props) => {
  return (
    <FadeInComponent>
      <section className=" flex flex-col gap-4 p-8 lg:p-10 rounded-3xl rounded-br-[48px] shadow aspect-square h-auto w-full md:w-80 lg:w-96 hover:shadow hover:translate-x-1 hover:-translate-y-1 transition border border-primary-honey-yellow hover:bg-primary-honey-yellow duration-300 justify-between">
        <div className={`lg:p-2 p-1 w-fit rounded-full ${bgColor}`}>
          {icon()}
        </div>
        <div>
          <HeadingText className="text-xl lg:text-2xl text-primary-bee-black font-bold ">
            {title}
          </HeadingText>
          <p className="w-5/6 font-inter mt-3 text-zinc-700 text-base">
            {description}
          </p>
        </div>
      </section>
    </FadeInComponent>
  );
};

export default MissionCard;
