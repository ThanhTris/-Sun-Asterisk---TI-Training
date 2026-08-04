interface SelectOption<T extends string> {
  label: string;
  value: T;
}

interface SelectProps<T extends string> {
  ariaLabel: string;
  value: T;
  options: SelectOption<T>[];
  onChange: (value: T) => void;
}

export function Select<T extends string>({ ariaLabel, value, options, onChange }: SelectProps<T>) {
  return (
    <select
      aria-label={ariaLabel}
      className="rounded border border-[#e5e5e5] bg-white px-[0.6rem] py-[0.4rem] text-[0.85rem] text-[#333]"
      value={value}
      onChange={(e) => onChange(e.target.value as T)}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
