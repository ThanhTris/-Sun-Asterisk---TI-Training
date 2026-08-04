import { useState } from 'react';

export interface Option {
  name: string;
  count: number;
}

interface OptionListSingleProps {
  mode: 'single';
  options: Option[];
  selected: string | null;
  onSelect: (value: string | null) => void;
  allLabel?: string;
  searchable?: boolean;
  searchPlaceholder?: string;
}

interface OptionListMultiProps {
  mode: 'multi';
  options: Option[];
  selected: string[];
  onSelect: (value: string) => void;
  searchable?: boolean;
  searchPlaceholder?: string;
}

type OptionListProps = OptionListSingleProps | OptionListMultiProps;

const itemClasses =
  'flex w-full cursor-pointer items-center gap-2 rounded px-2 py-[0.4rem] text-left text-[0.85rem] text-[#333] hover:bg-[#eceef1]';

const buttonBaseClasses =
  'flex w-full cursor-pointer items-center justify-between gap-2 rounded border-none px-2 py-[0.4rem] text-left text-[0.85rem]';

function buttonStateClasses(isActive: boolean) {
  return isActive ? 'bg-[#1a1a2e] text-white' : 'text-[#333] hover:bg-[#eceef1]';
}

/** Renders a facet's values as either a single-select button list or a multi-select checkbox list. */
export function OptionList(props: OptionListProps) {
  const { options, searchable, searchPlaceholder } = props;
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

      <ul className="m-0 max-h-80 list-none overflow-y-auto p-0">
        {props.mode === 'single' && (
          <li>
            <button
              type="button"
              className={`${buttonBaseClasses} ${buttonStateClasses(props.selected === null)}`}
              onClick={() => props.onSelect(null)}
            >
              <span>{props.allLabel ?? 'All'}</span>
            </button>
          </li>
        )}

        {visibleOptions.map((option) =>
          props.mode === 'single' ? (
            <li key={option.name}>
              <button
                type="button"
                className={`${buttonBaseClasses} ${buttonStateClasses(props.selected === option.name)}`}
                onClick={() => props.onSelect(option.name)}
              >
                <span>{option.name}</span>
                <span className="opacity-60">{option.count}</span>
              </button>
            </li>
          ) : (
            <li key={option.name}>
              <label className={itemClasses}>
                <input
                  type="checkbox"
                  className="m-0"
                  checked={props.selected.includes(option.name)}
                  onChange={() => props.onSelect(option.name)}
                />
                <span className="flex-1">{option.name}</span>
                <span className="opacity-60">{option.count}</span>
              </label>
            </li>
          )
        )}

        {visibleOptions.length === 0 && (
          <li className="px-2 py-[0.4rem] text-[0.8rem] text-[#999]">No matches</li>
        )}
      </ul>
    </div>
  );
}
