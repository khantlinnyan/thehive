import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ClassCard from "../common/ClassCard";

import {
  Binary,
  ChartSpline,
  Cpu,
  FlaskConical,
  Landmark,
  Microscope,
  Orbit,
  Variable,
} from "lucide-react";
import HeadingText from "../common/HeadingText";
import Layout from "../Layout/Layout";
import { Highlight } from "../ui/hero-highlight";
import Link from "next/link";
import FadeInComponent from "../animation/FadeInComponent";

// Define variables for strokeWidth, size, and color
const strokeWidth = 0.6;
const size = 140;
const color = "#444444";

const classes = [
  {
    id: 1,
    classTitle: "Biology",
    lecturerName: ["Thae Nandar Su"],
    batch: 2,
    classType: "",
    icon: <Microscope strokeWidth={strokeWidth} size={size} color={color} />,
    backgroundColor: "#A5D6A7",
  },
  {
    id: 2,
    classTitle: "ICT Practical",
    lecturerName: ["Aye Zin Phyo"],
    batch: 2,
    classType: "CIE",
    icon: <Cpu strokeWidth={strokeWidth} size={size} color={color} />,
    backgroundColor: "#BBDEFB",
  },
  {
    id: 3,
    classTitle: "Business",
    lecturerName: ["Jue Jue Chel"],
    batch: 2,
    classType: "",
    icon: <Landmark strokeWidth={strokeWidth} size={size} color={color} />,
    backgroundColor: "#FFF9C4",
  },
  {
    id: 4,
    classTitle: "Chemistry",
    lecturerName: ["Mon Myat Kyaw"],
    batch: 2,
    classType: "CIE",
    icon: <FlaskConical strokeWidth={strokeWidth} size={size} color={color} />,
    backgroundColor: "#B3E5FC",
  },
  {
    id: 5,
    classTitle: "Biology",
    lecturerName: ["Thet Zun Oo"],
    batch: 2,
    classType: "",
    icon: <Microscope strokeWidth={strokeWidth} size={size} color={color} />,
    backgroundColor: "#A5D6A7",
  },
  {
    id: 6,
    classTitle: "Further Pure Maths",
    lecturerName: ["Su Pyae Pyae Zaw"],
    batch: 2,
    classType: "",
    icon: <ChartSpline strokeWidth={strokeWidth} size={size} color={color} />,
    backgroundColor: "#E1BEE7",
  },
  {
    id: 7,
    classTitle: "CS P1 and Physics",
    lecturerName: ["Phyu Phyu Aye Chan"],
    batch: 2,
    classType: "",
    icon: <Binary strokeWidth={strokeWidth} size={size} color={color} />,
    backgroundColor: "#C5CAE9",
  },
  {
    id: 8,
    classTitle: "Chemistry",
    lecturerName: ["Thoon Wai Si"],
    batch: 2,
    classType: "Edexcel",
    icon: <FlaskConical strokeWidth={strokeWidth} size={size} color={color} />,
    backgroundColor: "#B3E5FC",
  },
  {
    id: 9,
    classTitle: "Maths B",
    lecturerName: ["May Htoo Chune @ Michelle"],
    batch: 2,
    classType: "",
    icon: <Variable strokeWidth={strokeWidth} size={size} color={color} />,
    backgroundColor: "#B2DFDB",
  },
  {
    id: 10,
    classTitle: "Further Pure Mathematics",
    lecturerName: ["Nan Moe Set Aye"],
    batch: 1,
    classType: "",
    icon: <ChartSpline strokeWidth={strokeWidth} size={size} color={color} />,
    backgroundColor: "#E1BEE7",
  },
  {
    id: 11,
    classTitle: "Physics",
    lecturerName: ["Thae Nandar Su", " & Eaint Shwe Yee"],
    batch: 1,
    classType: "",
    icon: <Orbit size={size} color={color} strokeWidth={strokeWidth} />, // Adjust size as needed
    backgroundColor: "#C5CAE9",
  },
  {
    id: 12,
    classTitle: "Maths B",
    lecturerName: ["Hein Min Htet (Steven)"],
    batch: 1,
    classType: "",
    icon: <Variable strokeWidth={strokeWidth} size={size} color={color} />,
    backgroundColor: "#B2DFDB",
  },
];

export function ClassSection() {
  return (
    <Layout>
      <div className="flex justify-between ">
        <HeadingText>IGCSE Free Revision Classes</HeadingText>
        <Link
          href={"/classes"}
          className="text-zinc-700 text-nowrap underline font-inter text-base lg:text-lg"
        >
          Explore classes
        </Link>
      </div>
      <FadeInComponent>
        <Carousel
          opts={{
            align: "start",
          }}
          className="min-w-sm mt-6 mb-10 lg:mb-16 w-full relative  mx-auto"
        >
          <CarouselContent className="">
            {classes.map((i) => (
              <CarouselItem key={i.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <ClassCard
                    classTitle={i.classTitle}
                    lecturerName={i.lecturerName}
                    batch={i.batch}
                    icon={i.icon}
                    backgroundColor={i.backgroundColor}
                    classType={i.classType}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex  items-end gap-3 text-right w-full py-6 md:py-8 justify-end">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </FadeInComponent>
    </Layout>
  );
}
