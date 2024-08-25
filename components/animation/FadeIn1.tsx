"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  phrases: string[];
  className?: string;
};
type TextProps = {
  children: React.ReactNode;
  className?: string;
};
function FadeIn1({ phrases, className }: Props) {
  return (
    <div className="relative text-primary-bee-black">
      {phrases.map((phrase, index) => (
        <AnimatedText className={className} key={index}>
          {phrase}
        </AnimatedText>
      ))}
    </div>
  );
}

function AnimatedText({ children, className }: TextProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: [0.6, -0.05, 0.01, 0.99] },
    },
    hidden: {
      opacity: 0,
      x: 300,
      transition: { duration: 1, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  return (
    <>
      {inView ? (
        <motion.p
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className={cn(
            "relative overflow-hidden font-inter lg:text-3xl text-xl  font-medium leading-normal lg:leading-snug tracking-tight text-zinc-600  m-0",
            className
          )}
        >
          {children}
        </motion.p>
      ) : (
        <p
          className={cn(
            "relative overflow-hidden font-inter lg:text-3xl text-xl  font-medium leading-normal lg:leading-snug tracking-tight text-zinc-600  m-0",
            className
          )}
        >
          {children}
        </p>
      )}
    </>
  );
}

export default FadeIn1;
