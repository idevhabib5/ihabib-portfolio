import Image from "next/image";
import { personalInfo } from "@/data/portfolio";

interface AvatarProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: { class: "w-10 h-10", px: 40 },
  md: { class: "w-24 h-24", px: 96 },
  lg: { class: "w-32 h-32", px: 128 },
};

export function Avatar({ size = "md", className = "" }: AvatarProps) {
  const { class: sizeClass, px } = sizeMap[size];

  return (
    <div
      className={`relative rounded-full overflow-hidden border-2 border-accent/20 shrink-0 bg-accent-muted ${sizeClass} ${className}`}
    >
      <Image
        src={personalInfo.avatar}
        alt={personalInfo.name}
        width={px}
        height={px}
        className="object-cover w-full h-full"
        priority={size === "lg"}
      />
    </div>
  );
}
