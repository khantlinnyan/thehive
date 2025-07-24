"use client";
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react/dist";
import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "framer-motion";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const TestSection = () => {
  const mainREf = useRef(null);
  const firstParagraphRef = useRef(null);

  useGSAP(() => {
    // Ensure the refs are current before using them in gsap.context

    // Providing firstParagraphRef.current as the scope
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline();

      ScrollTrigger.create({
        animation: tl,
        trigger: mainREf.current,
        start: "top top",
        markers: true,
        end: "+=2000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      });

      tl.fromTo(
        firstParagraphRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2, yPercent: -100 }
      );
      tl.to(firstParagraphRef.current, {
        opacity: 0,
        duration: 1,
      });
    }, [firstParagraphRef.current, mainREf.current]); // This is extremely important, you need to pass each ref into it

    // Cleanup function
    return () => ctx.revert();
  }, []);

  return (
    <section ref={mainREf}>
      <p ref={firstParagraphRef}>Hello there!</p>
    </section>
  );
};

export default TestSection;
