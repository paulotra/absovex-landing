"use client";

import Hero from "@/components/Hero";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>(".scrub").forEach((el) => {
      gsap.from(el, {
        y: 20,
        opacity: 0,
        duration: 0.6,
      });
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

    const drawLine = (clipClass: string, maxWidth: number, position?: string) =>
      tl.to(
        `.${clipClass}`,
        { attr: { width: maxWidth }, duration: 1, ease: "power2.inOut" },
        position,
      );

    tl.from(".pop-1", {
      scale: 0.9,
      opacity: 0,
      duration: 0.32,
      ease: "power2.out",
    });
    drawLine("clip-lines-left", 232, "-=0.6");
    tl.from(
      ".pop-2",
      { x: 32, opacity: 0, duration: 0.32, ease: "power2.out" },
      "-=0.32",
    );
    drawLine("clip-lines-right-top", 192, "-=0.6");
    tl.from(
      ".pop-3",
      { x: -32, opacity: 0, duration: 0.32, ease: "power2.out" },
      "-=0.32",
    );
    drawLine("clip-lines-right-bottom", 181, "-=0.6");
    tl.from(
      ".pop-4",
      { x: -32, opacity: 0, duration: 0.32, ease: "power2.out" },
      "-=0.32",
    );
  });
  return <Hero />;
}
