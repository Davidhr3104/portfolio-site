export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-sans text-sm uppercase tracking-[0.2em] text-muted">
      {children}
    </h2>
  );
}
