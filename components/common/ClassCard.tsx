import React from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

type Props = {
  classTitle: string;
  lecturerName: string[];
  batch: number;
  icon: any;
  backgroundColor: string;
  classType?: string;
};

const ClassCard = ({
  lecturerName,
  batch,
  classTitle,
  icon,
  backgroundColor,
  classType,
}: Props) => {
  return (
    <Card>
      <CardContent
        className="flex aspect-[11/12] cursor-pointer flex-col items-center justify-between rounded p-6 font-monos"
        style={{ backgroundColor }}
      >
        <div className="w-full flex justify-between items-center">
          <h2 className="text-primary-bee-black">Online</h2>
          <Badge
            // className="bg-accent-bright-orange"
            variant={"secondary"}
          >
            IGCSE {classType}
          </Badge>
        </div>
        {icon}
        <div className="w-full gap-2 flex flex-col">
          <div className="w-full h-[1.5px] bg-primary-bee-black/40" />
          <div className="flex justify-between">
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-primary-bee-black/90">
                {classTitle}
              </h1>
              <p className="text-base text-zinc-600 font-medium ">
                Lecturer{" "}
                {lecturerName.map((name) => (
                  <span key={name}>{name}</span>
                ))}
              </p>
            </div>
            <h1 className="self-end text-base text-zinc-700 font-light">
              Batch {batch}
            </h1>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClassCard;
