"use client";

import { createContext, useContext, useState } from "react";
import { ScheduleModal } from "@/components/ScheduleModal";

const ScheduleContext = createContext<(() => void) | null>(null);

export function useSchedule() {
  const openSchedule = useContext(ScheduleContext);
  if (!openSchedule) {
    throw new Error("useSchedule must be used within a ScheduleProvider");
  }
  return openSchedule;
}

export function ScheduleProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <ScheduleContext.Provider value={() => setOpen(true)}>
      {children}
      <ScheduleModal open={open} onClose={() => setOpen(false)} />
    </ScheduleContext.Provider>
  );
}
