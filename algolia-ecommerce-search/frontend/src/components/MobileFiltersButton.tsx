interface MobileFiltersButtonProps {
  onClick: () => void;
}

export function MobileFiltersButton({ onClick }: MobileFiltersButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="fixed bottom-5 left-1/2 z-40 flex -translate-x-1/2 cursor-pointer items-center gap-2 rounded-lg border-none bg-accent px-5 py-3 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(0,0,0,0.25)] md:hidden"
    >
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 6h16M7 12h10M10 18h4" />
      </svg>
      Filters
    </button>
  );
}
