import React from "react";

const imgClash = "/icons/warn.svg";
const imgFood = "/icons/food.svg";
const imgCalendar = "/icons/calendar.svg";

const items = [
  {
    icon: imgClash,
    iconSize: "size-7",
    text: "See what may be clashing in your routine",
  },
  {
    icon: imgFood,
    iconSize: "h-6 w-[30px]",
    text: "Know what to take with food and what to separate",
  },
  {
    icon: imgCalendar,
    iconSize: "size-7",
    text: "Get a simpler daily guide built around real life",
  },
];

export default function ProofStrip() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 py-10 md:px-6 border-b border-[#e5e0d5] md:border-b-0">
      {items.map((item, i) => (
        <React.Fragment key={item.text}>
          <div className="flex items-center gap-8 w-full max-w-[448px] justify-center">
            <div className="shrink-0 flex items-center justify-center size-20 rounded-[58px] bg-[#fff7eb] p-[18px]">
              <img
                src={item.icon}
                alt=""
                className={`${item.iconSize} object-contain`}
              />
            </div>
            <p className="text-base leading-6 text-[#0d3127] flex-1">
              {item.text}
            </p>
          </div>
          {i < items.length - 1 && (
            <div
              key={`divider-${i}`}
              className="hidden xl:block w-px h-[82px] bg-[#e5e0d5]"
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
