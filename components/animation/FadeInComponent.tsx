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
  // const hasWindow = typeof window !== "undefined";

  return (
    <div
      ref={ref}
      className={cn(
        isInView ? "" : "opacity-100 translate-y-0", // Fallback for SSR
        className
      )}
    >
      {isInView ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 1,
            ease: [0.6, -0.05, 0.01, 0.99],
          }}
          className={cn("h-full")}
        >
          {children}
        </motion.div>
      ) : (
        children
      )}
    </div>
  );
};

export default FadeInComponent;
