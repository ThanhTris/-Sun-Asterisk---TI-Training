import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  tone?: 'success' | 'neutral';
}

const toneClasses = {
  success: 'bg-[#e6f4ea] text-[#1e7e34]',
  neutral: 'bg-[#eceef1] text-[#333]',
};

export function Badge({ children, tone = 'success' }: BadgeProps) {
  return (
    <span
      className={`inline-block self-start rounded-full px-2 py-[0.15rem] text-[0.7rem] ${toneClasses[tone]}`}
    >
      {children}
    </span>
  );
}
