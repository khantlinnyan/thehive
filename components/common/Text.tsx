import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  className: string;
  children: React.ReactNode;
};

const Text = ({ children, className }: Props) => {
  return (
    <p
      className={cn(
        "lg:text-4xl text-2xl font-V font-medium leading-normal lg:leading-snug tracking-tight text-zinc-600 font-inter",
        className
      )}
    >
      {children}
    </p>
  );
};

export default Text;
