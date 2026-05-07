"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const links = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#what-you-get", label: "What You Get" },
  { href: "#ai-advisor", label: "AI Advisor" },
  { href: "#sample-report", label: "Sample Report" },
  { href: "#faq", label: "FAQ" },
];

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(navRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    },
    { scope: navRef }
  );

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-white"
    >
      <Link href="/" className="shrink-0">
        <Image
          src="/logo.png"
          alt="Absovex"
          width={138}
          height={32}
          priority
        />
      </Link>

      <ul className="flex items-center gap-[60px]">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-base font-medium text-[#0d3127] transition-opacity hover:opacity-70"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="relative shrink-0">
        <div className="absolute bottom-[-13px] left-[10px] right-[10px] h-[13px] rounded-[50px] bg-[#9ab0b1] blur-[6px]" />
        <a
          href="#"
          className="relative flex items-center gap-[10px] rounded-[14px] bg-[#0f8a8d] px-7 py-4 text-base font-medium text-white transition-opacity hover:opacity-90"
        >
          Get My $29 Report
          <Image
            src="/arrow.svg"
            alt=""
            width={17}
            height={12}
            aria-hidden="true"
          />
        </a>
      </div>
    </nav>
  );
}
