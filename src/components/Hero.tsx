import ShaderEffect from "@/components/ShaderEffect";
import LinesLeft from "@/components/LinesLeft";
import LinesRightTop from "@/components/LinesRightTop";
import LinesRightBottom from "@/components/LinesRightBottom";
import Image from "next/image";
import Button from "@/components/Button";
import EyebrowBadge from "@/components/EyebrowBadge";

export default function Hero() {
  return (
    <section className="hero relative flex flex-col items-center justify-start pt-14 overflow-hidden px-6 text-center bg-[#fffaf3] rounded-2xl lg:min-h-[1000px] pb-20 md:pb-0">
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
      <EyebrowBadge
        className="scrub relative z-10 mb-3"
        label="Try Now"
        text="Optimize every dose"
      />

      <h1 className="scrub relative z-10 max-w-[1000px]">
        Not sure how to take your <br className="hidden lg:block" />
        <span className="font-extrabold text-[#0f8a8d]">meds</span> and{" "}
        <span className="font-extrabold text-[#0f8a8d]">supplements</span>{" "}
        together?
      </h1>

      <p className="scrub relative z-10 mt-7 max-w-[600px] text-lg font-medium leading-8 text-[#4e655f]">
        Absovex reviews your routine for food, coffee, mineral, and timing
        conflicts, then gives you a clear report with what to move, what to
        separate, and what to ask your doctor or pharmacist.
      </p>

      <div className="scrub relative z-10 mt-10 flex flex-col items-center gap-6 md:flex-row">
        <Button className="w-full md:w-auto" href="#" showArrow>
          Get My $29 Report
        </Button>
        <Button className="w-full md:w-auto" href="#" variant="secondary">
          See Sample Report
        </Button>
      </div>

      <div className="phone-wrapper relative z-10 lg:mt-20 mt-10 lg:top-30 w-full max-w-5xl mx-auto flex flex-col-reverse gap-y-6 lg:block pb-16">
        <div className="relative -z-1 hidden lg:block">
          <Image
            src="/hero/desktop.png"
            alt="paper"
            width={1067}
            height={601}
            className="max-w-[1400px] phone lg:absolute z-20 -top-40 lg:left-1/2 lg:-translate-x-1/2 mx-auto w-full min-w-[640px]"
            priority
          />
        </div>

        <div className="relative lg:-top-24">
          <Image
            src="/hero/card.png"
            alt="paper"
            width={486}
            height={461}
            className="lg:absolute z-10 lg:left-1/2 mx-auto lg:-translate-x-1/2 phone mb-6 lg:mb-0"
            priority
          />
          <div className="relative lg:-top-20 flex flex-col gap-y-4">
            {/* Left card — connector line (curved, flipped to point right→phone) */}
            <LinesLeft
              className="absolute -scale-y-100 rotate-180 pointer-events-none pop-2-line hidden lg:block"
              style={{ left: "calc(50% - 190px - 204px)", top: "110px" }}
            />

            {/* Left card — timer */}
            <div className="pop-2 w-full lg:w-auto max-w-[400px] mx-auto lg:absolute -left-20 top-20 flex items-center gap-4 rounded-card bg-white px-6 py-5 drop-shadow-[0px_14px_12px_rgba(0,34,31,0.04)]">
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
              className="absolute pointer-events-none pop-3-line hidden lg:block"
              style={{ left: "calc(50% + 190px + 21px)", top: "76px" }}
            />

            {/* Top-right card — private */}
            <div className="pop-3 w-full lg:w-auto max-w-[400px] mx-auto lg:absolute -right-4 top-0 flex items-center gap-4 rounded-card bg-white px-6 py-5 drop-shadow-[0px_14px_12px_rgba(0,34,31,0.04)]">
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
              className="absolute pointer-events-none pop-4-line hidden lg:block"
              style={{ left: "calc(50% + 190px - 15px)", top: "217px" }}
            />

            {/* Bottom-right card — no account */}
            <div className="pop-4 w-full lg:w-auto max-w-[400px] mx-auto lg:absolute -right-24 top-43 flex items-center gap-4 rounded-card bg-white px-6 py-5 drop-shadow-[0px_14px_12px_rgba(0,34,31,0.04)]">
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
          </div>
        </div>
      </div>
    </section>
  );
}
