import React from "react";

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
import HeadingText from "@/components/common/HeadingText";
import Layout from "@/components/Layout/Layout";
import Link from "next/link";
import FadeInComponent from "@/components/animation/FadeInComponent";
import ClassCard from "@/components/common/ClassCard";

type Props = {};
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
    lecturerName: ["Nan Moe Set Aye", " & Eaint Shwe Yee"],
    batch: 1,
    classType: "",
    icon: <ChartSpline strokeWidth={strokeWidth} size={size} color={color} />,
    backgroundColor: "#E1BEE7",
  },
  {
    id: 11,
    classTitle: "Physics",
    lecturerName: ["Thae Nandar Su"],
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

const page = (props: Props) => {
  return (
    <Layout className="mt-28">
      <HeadingText className="text-center">IGCSE Revision Classess</HeadingText>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto my-10 max-w-2xl">
        {classes.map((i) => (
          <FadeInComponent key={i.id}>
            <ClassCard
              id={i.id}
              classTitle={i.classTitle}
              backgroundColor={i.backgroundColor}
              lecturerName={i.lecturerName}
              batch={i.batch}
              classType={i.classType}
              icon={i.icon}
            />
          </FadeInComponent>
        ))}
      </section>
    </Layout>
  );
};

export default page;
