import { StarRating } from './shared/StarRating';
import { CountBadge } from './shared/CountBadge';
import type { RatingOption } from '../hooks/useRatingOptions';

interface RatingFilterProps {
  options: RatingOption[];
  selected: number | null;
  onSelect: (value: number | null) => void;
}

const rowClasses =
  'flex w-full cursor-pointer items-center gap-2 border-none bg-transparent px-0 py-[0.35rem] text-left';

function rowStateClasses(isActive: boolean) {
  return isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100';
}

export function RatingFilter({ options, selected, onSelect }: RatingFilterProps) {
  return (
    <ul className="m-0 list-none p-0">
      {options.map((option) => (
        <li key={option.value}>
          <button
            type="button"
            className={`${rowClasses} ${rowStateClasses(selected === option.value)}`}
            onClick={() => onSelect(selected === option.value ? null : option.value)}
          >
            <StarRating value={option.value} size={22} gapClassName="gap-1" />
            <CountBadge count={option.count} />
          </button>
        </li>
      ))}
    </ul>
  );
}
