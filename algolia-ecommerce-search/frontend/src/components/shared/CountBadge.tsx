export function CountBadge({ count }: { count: number }) {
  return (
    <span className="rounded bg-[#eceef1] px-[0.4rem] py-[0.1rem] text-xs font-bold text-[#5a5f73]">
      {count}
    </span>
  );
}
