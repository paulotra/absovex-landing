export default function LinesLeft({ className, style }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 231.5 84.5"
      width={231}
      height={84}
      fill="none"
      overflow="visible"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <defs>
        <clipPath id="clip-lines-left">
          <rect className="clip-ll-h" x="0" y="60" width="0" height="30" />
          <rect className="clip-ll-v" x="214" y="68" width="20" height="0" />
        </clipPath>
      </defs>
      <path
        d="M0 84H215C223.837 84 231 76.8366 231 68V0"
        stroke="#0F8A8D"
        strokeDasharray="2 2"
        clipPath="url(#clip-lines-left)"
      />
    </svg>
  );
}
