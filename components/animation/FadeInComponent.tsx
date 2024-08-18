"use client";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const FadeInComponent = ({ children, className }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99],
      }}
      className={cn("", className)}
    >
      {children}
    </motion.div>
  );
};

export default FadeInComponent;
