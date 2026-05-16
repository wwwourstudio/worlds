import { cn } from "@/lib/utils";

interface WorldsIconProps {
  className?: string;
  size?: number;
}

export function WorldsIcon({ className, size = 24 }: WorldsIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={cn("text-white", className)}
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="12" cy="12" rx="10" ry="5" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="12" cy="12" rx="5" ry="10" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
