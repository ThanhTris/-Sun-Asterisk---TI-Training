import { useState } from 'react';
import { CountBadge } from './CountBadge';

export interface Option {
  name: string;
  count: number;
}

interface OptionListProps {
  options: Option[];
  selected: string[];
  onSelect: (value: string) => void;
  searchable?: boolean;
  searchPlaceholder?: string;
}

function itemClasses(isChecked: boolean) {
  const textClasses = isChecked
    ? 'font-bold text-primary'
    : 'font-normal text-[#3b4468] hover:text-primary';
  return `flex w-full cursor-pointer items-center gap-2 rounded px-0 py-[0.4rem] text-left text-[0.95rem] ${textClasses}`;
}

function checkboxClasses(isChecked: boolean) {
  const fillClasses = isChecked
    ? 'bg-accent bg-[radial-gradient(circle,white_28%,transparent_30%)]'
    : 'bg-[#e5e5e5]';
  return `h-5 w-5 shrink-0 cursor-pointer appearance-none rounded ${fillClasses}`;
}

/** Renders a facet's values as a multi-select checkbox list. */
export function OptionList({
  options,
  selected,
  onSelect,
  searchable,
  searchPlaceholder,
}: OptionListProps) {
  const [query, setQuery] = useState('');

  const visibleOptions = query.trim()
    ? options.filter((option) => option.name.toLowerCase().includes(query.trim().toLowerCase()))
    : options;

  return (
    <div>
      {searchable && (
        <input
          type="search"
          className="mb-2 w-full rounded border border-[#e5e5e5] px-[0.6rem] py-[0.4rem] text-[0.85rem]"
          placeholder={searchPlaceholder ?? 'Search…'}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      )}

      <ul className="m-0 list-none p-0">
        {visibleOptions.map((option) => {
          const isChecked = selected.includes(option.name);
          return (
            <li key={option.name}>
              <label className={itemClasses(isChecked)}>
                <input
                  type="checkbox"
                  className={checkboxClasses(isChecked)}
                  checked={isChecked}
                  onChange={() => onSelect(option.name)}
                />
                <span className="whitespace-nowrap">{option.name}</span>
                <CountBadge count={option.count} />
              </label>
            </li>
          );
        })}

        {visibleOptions.length === 0 && (
          <li className="px-0 py-[0.4rem] text-[0.8rem] text-[#999]">No matches</li>
        )}
      </ul>
    </div>
  );
}
