interface RatingBadgeProps {
  value: number;
}

export function RatingBadge({ value }: RatingBadgeProps) {
  return (
    <span className="ml-1 inline-flex items-center gap-1 rounded-sm border border-[rgba(226,164,0,0.5)] px-1 py-0 text-[11px] font-semibold text-[#e2a400]">
      <svg className="fill-[#e2a400]" viewBox="0 0 16 16" width={12} height={12} aria-hidden="true">
        <path d="M10.472 5.008L16 5.816l-4 3.896.944 5.504L8 12.616l-4.944 2.6L4 9.712 0 5.816l5.528-.808L8 0z" />
      </svg>
      {value}
    </span>
  );
}
