import { StarRating } from './shared/StarRating';
import { CountBadge } from './shared/CountBadge';
import type { RatingOption } from '../hooks/useRatingOptions';

interface RatingFilterProps {
  options: RatingOption[];
  selected: number | null;
  onSelect: (value: number | null) => void;
}

const rowClasses =
  'flex w-full cursor-pointer items-center border-none bg-transparent px-0 py-[0.35rem] text-left';

export function RatingFilter({ options, selected, onSelect }: RatingFilterProps) {
  return (
    <ul className="m-0 list-none p-0">
      {options.map((option) => (
        <li key={option.value}>
          <button
            type="button"
            className={rowClasses}
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
