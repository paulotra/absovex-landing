import Image from "next/image";
import EyebrowBadge from "@/components/EyebrowBadge";
import Button from "@/components/Button";

export default function Why29() {
  return (
    <section className="flex-1">
      <div className="relative">
        {/* Card */}
        <div
          className="rounded-card overflow-hidden px-8 py-10"
          style={{ backgroundImage: "url('/green-cream.png')" }}
        >
          <div className="flex min-h-[383px] flex-col justify-between gap-10 lg:max-w-[580px] relative z-10">
            {/* Top */}
            <div className="flex flex-col gap-5">
              <div className="flex">
                <EyebrowBadge label="Why It's Worth $29" />
              </div>
              <div className="flex flex-col gap-5">
                <h3>
                  A practical first step before your next doctor or pharmacist
                  conversation.
                </h3>
                <p className="text-base leading-8 text-[#4e655f] pr-20">
                  Absovex helps you get organized first. You can spot possible
                  timing issues, understand what may be clashing, and show up
                  with better questions and a clearer picture of your routine.
                </p>
              </div>
            </div>

            {/* Bottom */}
            <div className="flex flex-col gap-5">
              <div className="w-fit">
                <Button href="#" showArrow>
                  Get My $29 Report
                </Button>
              </div>
              <p className="text-sm leading-8 text-[#4e655f]">
                *For $29, you get a personalized first pass you can use right
                away.
              </p>
            </div>
          </div>
        </div>

        {/* Doctor — overflows top and right of card */}
        <Image
          src="/doctor.png"
          alt=""
          fill
          className="pointer-events-none absolute bottom-0 !-right-10 !left-auto hidden !h-[125%] !w-auto lg:block !top-auto"
        />
      </div>
    </section>
  );
}
