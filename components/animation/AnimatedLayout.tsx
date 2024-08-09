"use client";
import React, { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

const AnimatedLayout = ({ children }: Props) => {
  useEffect(() => {
    (async () => {
      // @ts-ignore
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return <>{children}</>;
};

export default AnimatedLayout;
