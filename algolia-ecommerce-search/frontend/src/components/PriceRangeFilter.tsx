import { useState } from 'react';
import type { PriceBounds } from '../hooks/usePriceBounds';

interface PriceRangeFilterProps {
  bounds: PriceBounds;
  value: { min: number | null; max: number | null };
  onApply: (min: number | null, max: number | null) => void;
}

export function PriceRangeFilter({ bounds, value, onApply }: PriceRangeFilterProps) {
  const [minInput, setMinInput] = useState(value.min?.toString() ?? '');
  const [maxInput, setMaxInput] = useState(value.max?.toString() ?? '');
  const [error, setError] = useState<string | null>(null);

  function handleApply() {
    const min = minInput.trim() === '' ? null : Number(minInput);
    const max = maxInput.trim() === '' ? null : Number(maxInput);

    if (min != null && Number.isNaN(min)) {
      setError('Invalid minimum price');
      return;
    }
    if (max != null && Number.isNaN(max)) {
      setError('Invalid maximum price');
      return;
    }
    if (min != null && max != null && min > max) {
      setError('Min must be less than max');
      return;
    }

    setError(null);
    onApply(min, max);
  }

  return (
    <div>
      <div className="flex items-center gap-2">
        <input
          type="number"
          inputMode="decimal"
          placeholder={`$${bounds.min}`}
          value={minInput}
          onChange={(e) => setMinInput(e.target.value)}
          aria-label="Minimum price"
          className="w-0 flex-1 rounded border border-[#e5e5e5] px-2 py-[0.4rem] text-[0.85rem]"
        />
        <span className="text-[#999]">–</span>
        <input
          type="number"
          inputMode="decimal"
          placeholder={`$${bounds.max}`}
          value={maxInput}
          onChange={(e) => setMaxInput(e.target.value)}
          aria-label="Maximum price"
          className="w-0 flex-1 rounded border border-[#e5e5e5] px-2 py-[0.4rem] text-[0.85rem]"
        />
      </div>
      {error && <p className="mt-[0.4rem] text-xs text-[#c0392b]">{error}</p>}
      <button
        type="button"
        className="mt-[0.6rem] w-full cursor-pointer rounded border border-[#1a1a2e] bg-white p-[0.4rem] text-[0.85rem] text-[#1a1a2e] hover:bg-[#1a1a2e] hover:text-white"
        onClick={handleApply}
      >
        Apply
      </button>
    </div>
  );
}
