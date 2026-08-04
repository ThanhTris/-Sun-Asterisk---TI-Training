import type { ReactNode } from 'react';

interface FilterPanelProps {
  title: string;
  children: ReactNode;
}

export function FilterPanel({ title, children }: FilterPanelProps) {
  return (
    <section className="border-t border-[#e5e5e5] pt-4">
      <h2 className="m-0 mb-3 text-xs font-semibold tracking-wide text-[#7f7f7f] uppercase">
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
}
