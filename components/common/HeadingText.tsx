import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className: string;
};

const HeadingText = ({ children, className }: Props) => {
  return (
    <h1
      className={cn(
        "font-semibold font-monos text-2xl lg:text-3xl leading-tighter",
        className
      )}
    >
      {children}
    </h1>
  );
};

export default HeadingText;
