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
  const textClasses = isChecked ? 'font-bold text-primary' : 'font-normal text-primary';
  return `flex w-full cursor-pointer items-center rounded px-0 py-[0.4rem] text-left text-[0.95rem] ${textClasses}`;
}

function checkboxClasses(isChecked: boolean) {
  const fillClasses = isChecked ? 'bg-accent' : 'bg-[rgba(65,66,71,0.08)]';
  return `absolute inset-0 h-4 w-4 shrink-0 cursor-pointer appearance-none rounded-sm ${fillClasses}`;
}

// Renders a facet's values as a multi-select checkbox list.
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

      <ul className="m-0 grid list-none grid-cols-2 gap-x-2 p-0 md:grid-cols-1">
        {visibleOptions.map((option) => {
          const isChecked = selected.includes(option.name);
          return (
            <li key={option.name}>
              <label className={itemClasses(isChecked)}>
                <span className="relative mr-4 inline-flex h-4 w-4 shrink-0">
                  <input
                    type="checkbox"
                    className={checkboxClasses(isChecked)}
                    checked={isChecked}
                    onChange={() => onSelect(option.name)}
                  />
                  {isChecked && (
                    <svg
                      className="pointer-events-none absolute inset-0 h-4 w-4 fill-none stroke-white"
                      viewBox="0 0 16 16"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M4 8.5 6.5 11 12 5" />
                    </svg>
                  )}
                </span>
                <span className="whitespace-nowrap">{option.name}</span>
                <CountBadge count={option.count} />
              </label>
            </li>
          );
        })}

        {visibleOptions.length === 0 && (
          <li className="col-span-2 px-0 py-[0.4rem] text-[0.8rem] text-[#999]">No matches</li>
        )}
      </ul>
    </div>
  );
}
