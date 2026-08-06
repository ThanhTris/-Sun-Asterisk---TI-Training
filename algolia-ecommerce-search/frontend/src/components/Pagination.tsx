interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const buttonBaseClasses =
  'flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded text-[0.9rem] disabled:cursor-not-allowed disabled:opacity-[0.33]';

function buttonStateClasses(isActive: boolean) {
  return isActive
    ? 'bg-accent font-bold text-white'
    : 'bg-[rgba(65,66,71,0.08)] font-normal text-[#414247]';
}

export function Pagination({ page, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = getPageNumbers(page, totalPages);

  function goToPage(p: number) {
    onPageChange(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <nav className="mt-8 mb-4 flex items-center justify-center gap-[0.35rem]" aria-label="Pagination">
      <button
        type="button"
        aria-label="Previous Page"
        className={`${buttonBaseClasses} ${buttonStateClasses(false)}`}
        disabled={page <= 1}
        onClick={() => goToPage(page - 1)}
      >
        ‹
      </button>

      {pages.map((p) => (
        <button
          key={p}
          type="button"
          aria-label={`Page ${p}`}
          className={`${buttonBaseClasses} ${buttonStateClasses(p === page)}`}
          onClick={() => goToPage(p)}
        >
          {p}
        </button>
      ))}

      <button
        type="button"
        aria-label="Next Page"
        className={`${buttonBaseClasses} ${buttonStateClasses(false)}`}
        disabled={page >= totalPages}
        onClick={() => goToPage(page + 1)}
      >
        ›
      </button>
    </nav>
  );
}

function getPageNumbers(page: number, totalPages: number): number[] {
  const windowSize = 5;

  let start = totalPages <= windowSize ? 1 : Math.max(1, page - 2);
  start = Math.min(start, totalPages - windowSize + 1);
  start = Math.max(1, start);
  const end = Math.min(totalPages, start + windowSize - 1);

  const pages: number[] = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return pages;
}
