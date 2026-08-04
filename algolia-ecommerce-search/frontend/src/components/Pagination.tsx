interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const buttonBaseClasses =
  'min-w-8 cursor-pointer rounded border px-[0.6rem] py-[0.35rem] text-[0.85rem] disabled:cursor-not-allowed disabled:opacity-40';

function buttonStateClasses(isActive: boolean) {
  return isActive
    ? 'border-primary bg-primary text-white'
    : 'border-[#e5e5e5] bg-white enabled:hover:bg-[#eceef1]';
}

export function Pagination({ page, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = getPageNumbers(page, totalPages);

  return (
    <nav className="mt-8 mb-4 flex items-center justify-center gap-[0.35rem]" aria-label="Pagination">
      <button
        type="button"
        className={`${buttonBaseClasses} ${buttonStateClasses(false)}`}
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
      >
        Prev
      </button>

      {pages.map((p, i) =>
        p === 'ellipsis' ? (
          <span key={`ellipsis-${i}`} className="px-[0.2rem] py-[0.35rem] text-[#999]">
            …
          </span>
        ) : (
          <button
            key={p}
            type="button"
            className={`${buttonBaseClasses} ${buttonStateClasses(p === page)}`}
            onClick={() => onPageChange(p)}
          >
            {p}
          </button>
        )
      )}

      <button
        type="button"
        className={`${buttonBaseClasses} ${buttonStateClasses(false)}`}
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
      >
        Next
      </button>
    </nav>
  );
}

function getPageNumbers(page: number, totalPages: number): (number | 'ellipsis')[] {
  const delta = 2;
  const pages: (number | 'ellipsis')[] = [];

  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= page - delta && i <= page + delta)) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== 'ellipsis') {
      pages.push('ellipsis');
    }
  }

  return pages;
}
