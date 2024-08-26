import React from "react";
import FooterContent from "./FooterContent";

export default function Footer() {
  return (
    <div
      className="relative lg:h-[800px] h-[860px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative lg:h-[calc(100vh+800px)] -top-[100vh] h-[calc(100vh+860px)]">
        <div className="lg:h-[800px] h-[860px] sticky top-[calc(100vh-860px)] lg:top-[calc(100vh-800px)]">
          <FooterContent />
        </div>
      </div>
    </div>
  );
}
