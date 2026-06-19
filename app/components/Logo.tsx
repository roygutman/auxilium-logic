import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark";
  size?: number;
  showText?: boolean;
}

export default function Logo({ variant = "dark", size = 32, showText = true }: LogoProps) {
  const textColor = variant === "dark" ? "#04112D" : "#FFFFFF";

  return (
    <span className="flex items-center gap-2.5" style={{ lineHeight: 1 }}>
      <Image
        src="/logo-mark.png"
        alt="Auxilium Logic logo mark"
        width={size}
        height={Math.round(size * (391 / 444))}
        style={{ objectFit: "contain" }}
      />

      {showText && (
        <span
          style={{
            color: textColor,
            fontSize: size * 0.54,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            lineHeight: 1,
            fontFamily: "var(--font-inter), system-ui, sans-serif",
          }}
        >
          auxilium logic
        </span>
      )}
    </span>
  );
}
