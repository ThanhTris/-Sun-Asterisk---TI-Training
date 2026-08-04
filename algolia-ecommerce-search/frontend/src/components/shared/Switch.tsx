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
      className={`relative h-6 w-10 shrink-0 cursor-pointer rounded-full border-none transition-colors ${
        checked ? 'bg-accent' : 'bg-[#e5e5e5]'
      }`}
    >
      <span
        className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-md transition-[left] ${
          checked ? 'left-4.5' : 'left-0.5'
        }`}
      />
    </button>
  );
}
