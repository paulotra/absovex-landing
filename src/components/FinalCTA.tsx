import Image from "next/image";
import Button from "@/components/Button";

export default function FinalCTA() {
  return (
    <section className="relative pt-20">
      {/* Banner card */}
      <div
        className="relative overflow-hidden rounded-[24px]"
        style={{
          backgroundImage: "url('/footer.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Content — offset right to make room for paper */}
        <div className="relative z-10 flex min-h-[420px] items-center justify-end">
          <div className="flex w-full max-w-[800px] flex-col gap-10 pr-8 lg:pr-14">
            <div className="flex flex-col gap-2 text-white">
              <h2 className="text-white">
                Stop guessing how to take
                <br className="hidden lg:block" />
                everything together.
              </h2>
              <p className="text-lg font-medium leading-8 text-white/90">
                If your routine includes meds, supplements, vitamins, herbs, or
                minerals, Absovex helps you turn the mess into a clear plan.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-5">
              <div className="relative">
                <div className="absolute bottom-[-8px] left-[10px] right-[10px] h-[13px] rounded-[50px] bg-[#0c5254] blur-[6px]" />
                <Button href="#" showArrow hideShadow>
                  Get My $29 Report
                </Button>
              </div>
              <p className="text-sm text-white/80">
                *Usually takes a few minutes, depending on your routine. No
                account needed.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* paper.webp — overflows card top and bottom */}
      <div
        className="pointer-events-none absolute -left-2
       -top-4 hidden lg:block"
      >
        <Image
          src="/paper.webp"
          alt=""
          width={514}
          height={603}
          className="w-[514px]"
        />
      </div>
    </section>
  );
}
