export default function LinesRightBottom({ className, style }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 180 1"
      width={180}
      height={2}
      fill="none"
      overflow="visible"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <defs>
        <clipPath id="clip-lines-right-bottom">
          <rect className="clip-lines-right-bottom" x="0" y="-10" width="0" height="200" />
        </clipPath>
      </defs>
      <path
        d="M0 0.5H180"
        stroke="#0F8A8D"
        strokeDasharray="2 2"
        clipPath="url(#clip-lines-right-bottom)"
      />
    </svg>
  );
}
