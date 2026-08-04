import { StarRating } from './shared/StarRating';

interface RatingFilterProps {
  options: number[];
  selected: number | null;
  onSelect: (value: number | null) => void;
}

const baseClasses =
  'flex w-full cursor-pointer items-center gap-[0.4rem] rounded border-none px-2 py-[0.35rem] text-left text-[0.85rem] text-[#333]';

function stateClasses(isActive: boolean) {
  return isActive ? 'bg-[#eceef1] opacity-100' : 'opacity-60 hover:bg-[#eceef1] hover:opacity-100';
}

export function RatingFilter({ options, selected, onSelect }: RatingFilterProps) {
  return (
    <ul className="m-0 list-none p-0">
      <li>
        <button
          type="button"
          className={`${baseClasses} ${stateClasses(selected === null)}`}
          onClick={() => onSelect(null)}
        >
          All ratings
        </button>
      </li>
      {options.map((rating) => (
        <li key={rating}>
          <button
            type="button"
            className={`${baseClasses} ${stateClasses(selected === rating)}`}
            onClick={() => onSelect(rating)}
          >
            <StarRating value={rating} />
            <span>& up</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
