"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
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
    { scope: navRef },
  );

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-4 bg-[#FFFFFF60] backdrop-blur-md border-b border-white/20 min-h-[88px]"
    >
      <div className="w-[222px]">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="Absovex"
            width={138}
            height={32}
            priority
            unoptimized
          />
        </Link>
      </div>

      <ul className="flex items-center gap-[60px]">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-sm font-medium text-[#0d3127] transition-opacity hover:opacity-70"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <Button href="#" showArrow>
        Get My $29 Report
      </Button>
    </nav>
  );
}
