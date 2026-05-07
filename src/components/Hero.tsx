import Image from "next/image";
import Button from "@/components/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-start pt-14 overflow-hidden px-6 text-center bg-[#fffaf3] rounded-xl">
      {/* Grid lines */}
      <div
        aria-hidden="true"
        className="absolute inset-0 max-w-[1460px] mx-auto z-0 bg-no-repeat"
        style={{
          backgroundImage: "url('/lines.png')",
          backgroundSize: "contain",
          backgroundPosition: "top center",
        }}
      />

      {/* Noise */}
      <div aria-hidden="true" className="bg-noise absolute inset-0 z-10" />

      {/* Bottom inner shadow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 shadow-[inset_0px_-20px_64px_-30px_rgba(199,195,181,0.6)]"
      />

      {/* Eyebrow badge */}
      <div className="relative z-10 mb-3 flex items-center gap-2 rounded-full bg-[#fee3e9] py-1 pl-1 pr-4">
        <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#f2188f]">
          Try Now
        </span>
        <span className="text-xs font-medium text-[#f2188f]">
          Optimize every dose
        </span>
      </div>

      <h1 className="relative z-10 max-w-[1000px] text-4xl font-bold leading-tight tracking-tight text-[#0d3127] sm:text-5xl">
        Not sure how to take your <br />
        <span className="font-extrabold text-[#0f8a8d]">meds</span> and{" "}
        <span className="font-extrabold text-[#0f8a8d]">supplements</span>{" "}
        together?
      </h1>

      <p className="relative z-10 mt-7 max-w-[600px] text-lg font-medium leading-8 text-[#4e655f]">
        Absovex reviews your routine for food, coffee, mineral, and timing
        conflicts, then gives you a clear report with what to move, what to
        separate, and what to ask your doctor or pharmacist.
      </p>

      <div className="relative z-10 mt-10 flex flex-col items-center gap-6 sm:flex-row">
        <Button href="#" showArrow>
          Get My $29 Report
        </Button>
        <Button href="#" variant="secondary">
          See Sample Report
        </Button>
      </div>

      <div className="relative z-10  mt-8 mb-[-240px]">
        <Image
          src="/phone.png"
          alt="phone"
          width={419}
          height={867}
          className="max-w-[380px]"
          priority
        />
      </div>
    </section>
  );
}
