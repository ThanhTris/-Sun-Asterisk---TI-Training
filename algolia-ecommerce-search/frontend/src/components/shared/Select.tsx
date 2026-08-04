interface SelectOption<T extends string | number> {
  label: string;
  value: T;
}

interface SelectProps<T extends string | number> {
  ariaLabel: string;
  value: T;
  options: SelectOption<T>[];
  onChange: (value: T) => void;
}

export function Select<T extends string | number>({
  ariaLabel,
  value,
  options,
  onChange,
}: SelectProps<T>) {
  return (
    <div className="relative inline-flex items-center">
      <select
        aria-label={ariaLabel}
        className="cursor-pointer appearance-none bg-transparent py-[0.4rem] pr-5 pl-0 text-[0.85rem] text-[#333] outline-none"
        value={value}
        onChange={(e) => {
          const raw = e.target.value;
          const matched = options.find((option) => String(option.value) === raw);
          if (matched) onChange(matched.value);
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <svg
        className="pointer-events-none absolute right-0 h-3.5 w-3.5 text-[#333]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </div>
  );
}
