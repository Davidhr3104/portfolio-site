"use client";

import type { ReactNode } from "react";
import { useSchedule } from "@/components/ScheduleProvider";

export function ScheduleIconButton({
  children,
  className,
  "aria-label": ariaLabel,
}: {
  children: ReactNode;
  className: string;
  "aria-label": string;
}) {
  const openSchedule = useSchedule();

  return (
    <button
      type="button"
      onClick={openSchedule}
      aria-label={ariaLabel}
      className={className}
    >
      {children}
    </button>
  );
}
