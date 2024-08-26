import { cn } from "@/app/utils/cn";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({ children, className }: Props) => {
  return (
    <section className={cn("container mx-auto ", className)}>
      {children}
    </section>
  );
};

export default Layout;
