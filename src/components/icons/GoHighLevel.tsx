import type { IconBaseProps } from "react-icons";

// GoHighLevel's three-arrow mark, redrawn as a single-color silhouette
// (no official icon exists in simple-icons or any react-icons set --
// this traces the shape of the brand's own logo, adapted to match the
// monochrome style used for every other icon on this page).
export function GoHighLevel({ size = 14, className, ...props }: IconBaseProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M14 9L6.5 17H12v21h4V17h5.5L14 9Z" />
      <path d="M34 9L26.5 17H32v21h4V17h5.5L34 9Z" />
      <path d="M24 19.5L16.5 27.5H22V38h4V27.5h5.5L24 19.5Z" />
    </svg>
  );
}
