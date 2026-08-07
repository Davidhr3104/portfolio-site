"use client";

import { useId, useState } from "react";

// Matches the "90%" figure in the Impact metrics above -- keep in sync if
// that number ever changes.
const REDUCTION_RATE = 0.9;
const WEEKS_PER_MONTH = 4.33;

export function TimeSavedEstimator() {
  const [hours, setHours] = useState(10);
  const id = useId();

  const savedPerWeek = Math.round(hours * REDUCTION_RATE * 10) / 10;
  const savedPerMonth = Math.round(savedPerWeek * WEEKS_PER_MONTH);

  return (
    <div className="mt-16 max-w-lg border-t border-border pt-10">
      <label
        htmlFor={id}
        className="block font-sans text-sm text-foreground/80"
      >
        Hours per week your team spends on manual review or data entry:{" "}
        <span className="font-medium text-foreground">{hours}</span>
      </label>
      <input
        id={id}
        type="range"
        min={1}
        max={40}
        step={1}
        value={hours}
        onChange={(e) => setHours(Number(e.target.value))}
        className="mt-4 w-full accent-accent"
      />
      <p className="mt-6 font-sans text-lg leading-relaxed text-foreground/90">
        At a 90% average reduction, that&apos;s roughly{" "}
        <span className="font-medium text-accent">
          {savedPerWeek} hours/week
        </span>{" "}
        back — about{" "}
        <span className="font-medium text-accent">
          {savedPerMonth} hours/month
        </span>
        .
      </p>
      <p className="mt-3 font-sans text-xs italic text-muted">
        Illustrative estimate based on average results across past projects.
      </p>
    </div>
  );
}
