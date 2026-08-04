interface StarRatingProps {
  value: number;
  max?: number;
}

export function StarRating({ value, max = 5 }: StarRatingProps) {
  return (
    <span className="inline-flex gap-px" aria-label={`${value} out of ${max} stars`}>
      {Array.from({ length: max }, (_, i) => (
        <svg
          key={i}
          className={i < value ? 'fill-[#e2a400]' : 'fill-[#d9d9d9]'}
          viewBox="0 0 16 16"
          width="12"
          height="12"
          aria-hidden="true"
        >
          <path d="M10.472 5.008L16 5.816l-4 3.896.944 5.504L8 12.616l-4.944 2.6L4 9.712 0 5.816l5.528-.808L8 0z" />
        </svg>
      ))}
    </span>
  );
}
