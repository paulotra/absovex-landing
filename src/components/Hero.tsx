"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-eyebrow", { y: 16, opacity: 0, duration: 0.5 })
        .from(".hero-heading", { y: 24, opacity: 0, duration: 0.7 }, "-=0.2")
        .from(".hero-subheading", { y: 16, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(".hero-cta", { y: 12, opacity: 0, duration: 0.5, stagger: 0.1 }, "-=0.3");
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <p className="hero-eyebrow mb-4 text-xs font-medium uppercase tracking-widest text-zinc-400">
        Welcome
      </p>

      <h1 className="hero-heading max-w-3xl text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl lg:text-7xl">
        Build something{" "}
        <span className="text-zinc-400">remarkable</span>
      </h1>

      <p className="hero-subheading mt-6 max-w-xl text-lg text-zinc-500 dark:text-zinc-400">
        A modern foundation with Next.js, TypeScript, Tailwind CSS, and GSAP —
        ready to ship.
      </p>

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
        <a
          href="#"
          className="hero-cta inline-flex h-11 items-center justify-center rounded-full bg-black px-8 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          Get started
        </a>
        <a
          href="#"
          className="hero-cta inline-flex h-11 items-center justify-center rounded-full border border-black/10 px-8 text-sm font-medium text-black transition-colors hover:bg-black/5 dark:border-white/10 dark:text-white dark:hover:bg-white/5"
        >
          Learn more
        </a>
      </div>
    </section>
  );
}
