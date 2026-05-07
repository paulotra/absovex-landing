import ShaderEffect from "@/components/ShaderEffect";
import LinesLeft from "@/components/LinesLeft";
import LinesRightTop from "@/components/LinesRightTop";
import LinesRightBottom from "@/components/LinesRightBottom";
import Image from "next/image";
import Button from "@/components/Button";

export default function Hero() {
  return (
    <section className="hero relative flex min-h-screen flex-col items-center justify-start pt-14 overflow-hidden px-6 text-center bg-[#fffaf3] rounded-xl">
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

      <ShaderEffect />

      {/* Bottom inner shadow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 shadow-[inset_0px_-20px_64px_-30px_rgba(199,195,181,0.6)]"
      />

      {/* Eyebrow badge */}
      <div className="scrub relative z-10 mb-3 flex items-center gap-2 rounded-full bg-[#fee3e9] py-1 pl-1 pr-4">
        <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#f2188f]">
          Try Now
        </span>
        <span className="text-xs font-medium text-[#f2188f]">
          Optimize every dose
        </span>
      </div>

      <h1 className="scrub relative z-10 max-w-[1000px] text-4xl font-bold leading-tight tracking-tight text-[#0d3127] sm:text-5xl">
        Not sure how to take your <br />
        <span className="font-extrabold text-[#0f8a8d]">meds</span> and{" "}
        <span className="font-extrabold text-[#0f8a8d]">supplements</span>{" "}
        together?
      </h1>

      <p className="scrub relative z-10 mt-7 max-w-[600px] text-lg font-medium leading-8 text-[#4e655f]">
        Absovex reviews your routine for food, coffee, mineral, and timing
        conflicts, then gives you a clear report with what to move, what to
        separate, and what to ask your doctor or pharmacist.
      </p>

      <div className="scrub relative z-10 mt-10 flex flex-col items-center gap-6 sm:flex-row">
        <Button href="#" showArrow>
          Get My $29 Report
        </Button>
        <Button href="#" variant="secondary">
          See Sample Report
        </Button>
      </div>

      <div className="phone-wrapper relative z-10 mt-12 mb-[-240px] w-full max-w-5xl mx-auto">
        <Image
          src="/phone.png"
          alt="phone"
          width={419}
          height={867}
          className="max-w-[380px] mx-auto block phone"
          priority
        />

        {/* Left card — connector line (curved, flipped to point right→phone) */}
        <LinesLeft
          className="absolute -scale-y-100 rotate-180 pointer-events-none pop-2-line"
          style={{ left: "calc(50% - 190px - 204px)", top: "110px" }}
        />

        {/* Left card — timer */}
        <div className="pop-2 absolute -left-20 top-20 flex items-center gap-4 rounded-[14px] bg-white px-6 py-5 drop-shadow-[0px_14px_12px_rgba(0,34,31,0.04)]">
          <div className="flex shrink-0 items-center justify-center rounded-[8px] bg-[#fff7eb] size-[48px]">
            <img
              src="https://www.figma.com/api/mcp/asset/0d3ffcb1-4350-4ceb-9367-d4bd93bbef97"
              alt=""
              className="size-6"
            />
          </div>
          <p className="w-[219px] text-base leading-6 text-left text-[#0f8a8d]">
            Usually takes a few minutes, depending on your routine.
          </p>
        </div>

        {/* Top-right card — connector line */}
        <LinesRightTop
          className="absolute pointer-events-none pop-3-line"
          style={{ left: "calc(50% + 190px + 21px)", top: "76px" }}
        />

        {/* Top-right card — private */}
        <div className="pop-3 absolute -right-4 top-0 flex items-center gap-4 rounded-[14px] bg-white px-6 py-5 drop-shadow-[0px_14px_12px_rgba(0,34,31,0.04)]">
          <img
            src="https://www.figma.com/api/mcp/asset/7e60fcc9-290c-471a-8382-398cad35224f"
            alt=""
            className="shrink-0 size-[48px]"
          />
          <p className="whitespace-nowrap text-base leading-6 text-left text-[#0f8a8d]">
            Private by design.
          </p>
        </div>

        {/* Bottom-right card — connector line */}
        <LinesRightBottom
          className="absolute pointer-events-none pop-4-line"
          style={{ left: "calc(50% + 190px - 15px)", top: "217px" }}
        />

        {/* Bottom-right card — no account */}
        <div className="pop-4 absolute -right-24 top-43 flex items-center gap-4 rounded-[14px] bg-white px-6 py-5 drop-shadow-[0px_14px_12px_rgba(0,34,31,0.04)]">
          <div className="flex shrink-0 items-center justify-center rounded-[8px] bg-[#fff7eb] size-[48px]">
            <img
              src="https://www.figma.com/api/mcp/asset/c67d8f2b-6a8f-4e9d-b852-70a399d090a2"
              alt=""
              className="size-[30px]"
            />
          </div>
          <p className="w-[170px] text-base leading-6 text-left text-[#0f8a8d]">
            No account needed for this first version.
          </p>
        </div>

        {/* Score comparison card */}
        <div className="pop-1 absolute left-1/2 -translate-x-1/2 top-30 flex items-center gap-8 rounded-[16px] border border-[#e3e3e9] bg-white px-20 py-5">
          {/* Before score */}
          <div className="flex flex-col items-center">
            <span className="text-[58px] font-extrabold leading-none text-[#9da3af]">
              47
            </span>
            <span className="mt-1 text-[13px] font-extrabold tracking-[1.6px] text-black">
              CURRENT
            </span>
          </div>

          {/* Arrow + pts badge */}
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/arrow-pink.svg"
              alt=""
              width={39}
              height={16}
              aria-hidden="true"
            />
            <div className="flex items-center justify-center gap-0.5 rounded-full border border-[#9bd6d6] bg-[#e8f7f7] px-3 py-1">
              <span className="text-[13px] font-extrabold text-[#0f7e7b]">
                +32pts
              </span>
            </div>
          </div>

          {/* After score */}
          <div className="flex flex-col items-center">
            <span className="text-[58px] font-extrabold leading-none text-[#0f7e7b]">
              79
            </span>
            <span className="mt-1 text-[13px] font-extrabold tracking-[1.6px] text-[#0f7e7b]">
              OPTIMIZED
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
