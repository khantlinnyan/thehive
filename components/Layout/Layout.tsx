import { cn } from "@/app/utils/cn";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({ children, className }: Props) => {
  return (
    <main className={cn("container mx-auto ", className)}>{children}</main>
  );
};

export default Layout;
