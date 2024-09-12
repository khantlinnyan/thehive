import React from "react";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import { User } from "@phosphor-icons/react/dist/ssr";

export type Props = {
  name: string;
  position: string;
  socialLinks: { [key: string]: string };
  img: string;
  department: string;
};

const MemberCard = (props: Props) => {
  const { name, position, socialLinks, department, img } = props;

  // Function to get the first available social link
  const getFirstSocialLink = () => {
    const firstLink = Object.entries(socialLinks).find(([, url]) => url !== "");
    return firstLink ? firstLink[1] : null;
  };

  const firstSocialLink = getFirstSocialLink();

  return (
    <Link href={firstSocialLink ? firstSocialLink : "/"}>
      <Card className="aspect-[12/13] fill-neutral-700  rounded-2xl h-full w-full overflow-hidden  text-primary-bee-black transition z-20 duration-300 relative">
        <CardContent className="flex p-3 md:p-6 flex-col justify-end w-full h-full">
          <div className="h-full w-full top-0 left-0 absolute flex justify-center items-center">
            {img ? (
              <div className="w-full absolute  top-0 bottom-0 h-full overflow-hidden hover:scale-110 transition duration-300 z-10">
                <div className="absolute inset-x-0 h-1/2 bottom-0 z-20 bg-gradient-to-t from-zinc-800 to-transparent"></div>
                <Image
                  src={img}
                  className="object-cover w-full aspect-[12/13] "
                  alt={`${name}'s photo`}
                  width={300}
                  height={300}
                  priority={true}
                />
              </div>
            ) : (
              <User size={42} />
            )}
          </div>
          <div className="flex items-center  justify-between">
            <div className="flex z-20 flex-col">
              <h1 className="text-xs leading-5 md:leading-normal md:text-xl font-monos font-semibold text-primary-honey-yellow">
                {name}
              </h1>
              <p className="text-[10px] md:text-base text-white font-inter">
                {position === "Founding member"
                  ? "Founding member"
                  : name === "Phyu Thant Kyi"
                  ? "Founding member"
                  : position === "Head"
                  ? `Head of ${department}`
                  : position === "Member"
                  ? `${department} Hive`
                  : position === "Leader"
                  ? `${department} Lead`
                  : position}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default MemberCard;
