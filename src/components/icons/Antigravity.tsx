import type { IconBaseProps } from "react-icons";

// Google Antigravity's arch mark, redrawn as a single-color stroke
// (no icon exists for it anywhere yet -- it's too new). Traces the
// same silhouette as the official logo David provided, adapted to the
// monochrome line style used for every other icon on this page.
export function Antigravity({ size = 14, className, ...props }: IconBaseProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.6}
      strokeLinecap="round"
      className={className}
      {...props}
    >
      <path d="M4.5 19C4.5 10.5 7.8 4.5 12 4.5S19.5 10.5 19.5 19" />
    </svg>
  );
}
