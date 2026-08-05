interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function Switch({ checked, onChange }: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative h-4 w-7.5 shrink-0 cursor-pointer rounded-full border-none transition-colors ${
        checked ? 'bg-accent' : 'bg-[rgba(65,66,71,0.08)]'
      }`}
    >
      <span
        className={`absolute top-0.5 h-3 w-3 rounded-full bg-white shadow-md transition-[left] ${
          checked ? 'left-4' : 'left-0.5'
        }`}
      />
    </button>
  );
}
