"use client";

import { useState, useSyncExternalStore } from "react";
import { LuSun, LuMoon } from "react-icons/lu";

const emptySubscribe = () => () => {};

export function ThemeToggle({ className = "" }: { className?: string }) {
  const isHydrated = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const [isDark, setIsDark] = useState(
    () =>
      typeof document !== "undefined" &&
      document.documentElement.classList.contains("dark")
  );

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  if (!isHydrated) {
    return (
      <span
        aria-hidden="true"
        className={`inline-block h-8 w-8 ${className}`}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`flex h-8 w-8 items-center justify-center text-muted outline-hidden transition-colors hover:text-accent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${className}`}
    >
      {isDark ? (
        <LuSun size={16} aria-hidden="true" />
      ) : (
        <LuMoon size={16} aria-hidden="true" />
      )}
    </button>
  );
}
