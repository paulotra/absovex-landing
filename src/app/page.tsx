"use client";

import Hero from "@/components/Hero";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProofStrip from "@/components/ProofStrip";
import Statistics from "@/components/Statistics";
import HowItWorks from "@/components/HowItWorks";
import WhatYouGet from "@/components/WhatYouGet";
import Why29 from "@/components/Why29";
import Score from "@/components/Score";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  useGSAP(() => {
    gsap.to("body", { opacity: 1, duration: 0.4, ease: "power2.out" });

    gsap.from(".scrub", {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.12,
    });

    gsap.from(".phone", {
      y: 200,
      opacity: 0,
    });

    gsap.to(".phone-wrapper", {
      scrollTrigger: {
        trigger: ".hero",
        start: "center 50%",
        end: "+=1000",
        toggleActions: "play none none reverse",
        scrub: true,
      },
      y: 200,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".phone-wrapper",
        start: "top 60%",
        toggleActions: "play none none none",
      },
    });

    const drawH = (cls: string, w: number, pos?: string) =>
      tl.to(
        `.${cls}`,
        { attr: { width: w }, duration: 0.8, ease: "power2.inOut" },
        pos,
      );
    const drawV = (cls: string, totalH: number) =>
      tl.to(`.${cls}`, {
        attr: { y: 0, height: totalH },
        duration: 0.25,
        ease: "power2.inOut",
      });

    tl.from(".pop-1", {
      scale: 0.9,
      opacity: 0,
      duration: 0.32,
      ease: "power2.out",
    });

    tl.set(".pop-2-line", { opacity: 1 });
    drawH("clip-ll-h", 232, "-=0.6");
    drawV("clip-ll-v", 68);
    tl.from(
      ".pop-2",
      { x: 32, opacity: 0, duration: 0.32, ease: "power2.out" },
      "-=0.1",
    );

    tl.set(".pop-3-line", { opacity: 1 });
    drawH("clip-rrt-h", 192, "-=0.6");
    drawV("clip-rrt-v", 64);
    tl.from(
      ".pop-3",
      { x: -32, opacity: 0, duration: 0.32, ease: "power2.out" },
      "-=0.1",
    );

    tl.set(".pop-4-line", { opacity: 1 });
    tl.to(
      ".clip-lines-right-bottom",
      { attr: { width: 181 }, duration: 0.8, ease: "power2.inOut" },
      "-=0.6",
    );
    tl.from(
      ".pop-4",
      { x: -32, opacity: 0, duration: 0.32, ease: "power2.out" },
      "-=0.1",
    );
  });
  return (
    <div>
      <Hero />
      <div className="container">
        <ProofStrip></ProofStrip>
        <Statistics></Statistics>
        <HowItWorks></HowItWorks>
        <WhatYouGet></WhatYouGet>
        <div className="lg:flex gap-x-10">
          <Why29></Why29>
          <Score></Score>
        </div>
      </div>
    </div>
  );
}
