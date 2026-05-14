"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const links = [
  { href: "#statistics", label: "Statistics" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#what-you-get", label: "What You Get" },
  { href: "#why-29", label: "Why $29" },
  { href: "#why-trust-us", label: "Why Trust Us" },
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
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-10 py-4 bg-[#FFFFFF60] backdrop-blur-md border-b border-white/20 min-h-[88px] gap-x-6"
    >
      <div className="xl:flex-1">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="Absovex"
            width={138}
            height={32}
            priority
            unoptimized
            className="w-[116px] lg:w-[138px]"
          />
        </Link>
      </div>

      <ul className="flex items-center gap-10 xl:gap-16 hidden lg:flex">
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

      <div className="md:flex-1 flex justify-end">
        <Button href="#" showArrow>
          Get My $29 Report
        </Button>
      </div>
    </nav>
  );
}
