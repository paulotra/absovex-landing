export default function LinesRightTop({ className, style }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 191.5 80.5"
      width={191}
      height={80}
      fill="none"
      overflow="visible"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <defs>
        <clipPath id="clip-lines-right-top">
          <rect className="clip-lines-right-top" x="0" y="-10" width="0" height="200" />
        </clipPath>
      </defs>
      <path
        d="M0 80H175C183.837 80 191 72.8366 191 64V0"
        stroke="#0F8A8D"
        strokeDasharray="2 2"
        clipPath="url(#clip-lines-right-top)"
      />
    </svg>
  );
}
