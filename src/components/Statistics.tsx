import EyebrowBadge from "@/components/EyebrowBadge";

const stats = [
  {
    title: "More than half of U.S. adults take supplements",
    description:
      "Many do not realize certain supplements and medications can affect absorption or timing.",
    source: "CDC / National Center for Health Statistics",
  },
  {
    title: "1.5 million ER visits happen yearly from medication related harm",
    description:
      "Many involve dosing mistakes, interactions, or timing issues.",
    source: "CDC Medication Safety Data",
  },
  {
    title: "Medication timing is rarely explained clearly",
    description:
      "Food, coffee, minerals, and supplements can affect how medications work together.",
    source: "NIH / Published Medication Adherence & Supplement Studies",
  },
];

export default function Statistics() {
  return (
    <section className="flex flex-col items-center gap-10 py-20">
      <div className="flex lg:max-w-1/2 flex-col items-center gap-5 text-center">
        <EyebrowBadge label="Statistics" />
        <div className="flex flex-col items-center gap-5">
          <h2>
            Taking multiple <br className="hidden lg:block" />
            <span className="text-[#0f8a8d]">medications and supplements?</span>
          </h2>
          <p className="text-lg font-medium leading-8 text-[#4e655f]">
            Timing, food, beverages, minerals, and supplements can affect how
            medications work more than most people realize.
          </p>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="flex flex-col justify-between gap-5 rounded-card border border-stroke px-8 py-10"
          >
            <div className="flex flex-col gap-3">
              <p className="text-xl font-bold leading-tight text-[#0d3127]">
                {stat.title}
              </p>
              <p className="text-base leading-6 text-[#4e655f]">
                {stat.description}
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="border-t border-stroke" />
              <div className="flex items-start gap-2">
                <img
                  src="/icons/globe.svg"
                  alt=""
                  className="mt-0.5 size-5 shrink-0"
                />
                <p className="text-base leading-6 text-[#4e655f]">
                  {stat.source}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
