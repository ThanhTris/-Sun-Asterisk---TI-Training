import type { ReactNode } from 'react';

interface FilterPanelProps {
  title: string;
  children: ReactNode;
}

export function FilterPanel({ title, children }: FilterPanelProps) {
  return (
    <section className="border-t border-[#e5e5e5] pt-4">
      <h2 className="m-0 mb-3 text-[0.95rem]">{title}</h2>
      <div>{children}</div>
    </section>
  );
}
