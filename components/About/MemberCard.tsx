import React from "react";
import FadeInComponent from "../animation/FadeInComponent";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import { Link as LinkIcon, User } from "@phosphor-icons/react/dist/ssr";

type Props = {
  name: string;
  position: string;
};

const MemberCard = (props: Props) => {
  const { name, position } = props;
  return (
    // <FadeInComponent>
    <Card className="aspect-[12/13] rounded-2xl h-full w-full overflow-hidden group-hover:border-slate-700 text-primary-bee-black transition z-10 duration-300 relative ">
      <CardContent className="flex p-3 md:p-6 flex-col justify-end w-full h-full">
        <div className=" h-full w-full top-0 left-0 absolute flex justify-center items-center">
          <User size={42} />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-base leading-5 md:leading-normal md:text-xl font-monos font-semibold">
              {name}
            </h1>
            <p className="text-xs md:text-base text-zinc-600 font-inter">
              {position}
            </p>
          </div>
          <Link
            href={"/about"}
            className=" absolute cursor-pointer lg:opacity-0 transition duration-300 opacity-30 w-full h-full bottom-0 left-0 hover:opacity-100"
          >
            <div className="w-full h-full p-3 md:p-6 flex justify-end items-end">
              <LinkIcon className="text-lg lg:text-2xl" />
            </div>
          </Link>
        </div>
      </CardContent>
    </Card>
    // </FadeInComponent>
  );
};

export default MemberCard;
