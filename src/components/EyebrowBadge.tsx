interface EyebrowBadgeProps {
  label: string;
  text?: string;
  className?: string;
}

export default function EyebrowBadge({
  label,
  text,
  className,
}: EyebrowBadgeProps) {
  return (
    <div
      className={`flex items-center gap-2 rounded-full bg-[#fee3e9] p-1 ${text ? "pr-4" : ""} ${className ?? ""}`}
    >
      <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#f2188f]">
        {label}
      </span>
      {text && (
        <span className="text-xs font-medium text-[#f2188f]">{text}</span>
      )}
    </div>
  );
}
