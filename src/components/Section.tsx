import React from "react";

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({ id, className = "", children }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative min-h-[100svh] snap-start ${className}`}
    >
      {children}
    </section>
  );
}