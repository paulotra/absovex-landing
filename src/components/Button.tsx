import Image from "next/image";

type ButtonVariant = "default" | "secondary";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  showArrow?: boolean;
}

export default function Button({
  variant = "default",
  showArrow = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "relative inline-flex items-center justify-center gap-[10px] rounded-[14px] px-8 py-3 text-base font-medium transition-opacity hover:opacity-90";

  const variants: Record<ButtonVariant, string> = {
    default: "bg-[#0f8a8d] text-white",
    secondary: "bg-white text-[#f2188f]",
  };

  const shadowColor: Record<ButtonVariant, string> = {
    default: "bg-[#9ab0b1]",
    secondary: "bg-[#e2dcd1]",
  };

  return (
    <div className="relative shrink-0">
      <div
        className={`absolute bottom-[-8px] left-[10px] opacity-80 right-[10px] h-[13px] rounded-[50px] blur-[6px] ${shadowColor[variant]}`}
      />
      <a className={`${base} ${variants[variant]} ${className}`} {...props}>
        {children}
        {showArrow && (
          <Image
            src="/arrow.svg"
            alt=""
            width={17}
            height={12}
            aria-hidden="true"
            className={variant === "secondary" ? "brightness-0" : undefined}
          />
        )}
      </a>
    </div>
  );
}
