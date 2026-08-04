import type { ReactNode } from 'react';

interface StatusMessageProps {
  variant: 'loading' | 'error' | 'empty';
  children: ReactNode;
}

export function StatusMessage({ variant, children }: StatusMessageProps) {
  return (
    <p
      className={`p-8 text-center ${variant === 'error' ? 'text-[#c0392b]' : 'text-[#666]'}`}
    >
      {children}
    </p>
  );
}
