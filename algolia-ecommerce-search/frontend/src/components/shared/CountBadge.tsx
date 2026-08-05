export function CountBadge({ count }: { count: number }) {
  return (
    <span className="ml-2 rounded bg-[rgba(65,66,71,0.08)] px-[0.4rem] py-[0.1rem] text-xs font-semibold text-[rgba(33,36,61,0.8)]">
      {count}
    </span>
  );
}
