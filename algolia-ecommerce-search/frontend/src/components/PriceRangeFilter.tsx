import { useEffect, useState } from 'react';
import type { PriceBounds } from '../hooks/usePriceBounds';

interface PriceRangeFilterProps {
  bounds: PriceBounds;
  value: { min: number | null; max: number | null };
  onApply: (min: number | null, max: number | null) => void;
}

const thumbClasses =
  'pointer-events-none absolute inset-0 h-5 w-full cursor-pointer appearance-none bg-transparent ' +
  '[&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 ' +
  '[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border ' +
  '[&::-webkit-slider-thumb]:border-[#ddd] [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-md ' +
  '[&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 ' +
  '[&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border ' +
  '[&::-moz-range-thumb]:border-[#ddd] [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:shadow-md';

export function PriceRangeFilter({ bounds, value, onApply }: PriceRangeFilterProps) {
  const [minVal, setMinVal] = useState(value.min ?? bounds.min);
  const [maxVal, setMaxVal] = useState(value.max ?? bounds.max);

  useEffect(() => {
    setMinVal(value.min ?? bounds.min);
    setMaxVal(value.max ?? bounds.max);
  }, [value.min, value.max, bounds.min, bounds.max]);

  const span = bounds.max - bounds.min || 1;
  const minPercent = ((minVal - bounds.min) / span) * 100;
  const maxPercent = ((maxVal - bounds.min) / span) * 100;

  function handleMinChange(next: number) {
    const clamped = Math.min(next, maxVal - 1);
    setMinVal(clamped);
    onApply(clamped, maxVal);
  }

  function handleMaxChange(next: number) {
    const clamped = Math.max(next, minVal + 1);
    setMaxVal(clamped);
    onApply(minVal, clamped);
  }

  return (
    <div>
      <div className="mb-3 flex items-center justify-between text-[0.95rem] font-bold text-primary">
        <span>
          <span className="text-accent">$</span> {minVal.toLocaleString()}
        </span>
        <span>
          <span className="text-accent">$</span> {maxVal.toLocaleString()}
        </span>
      </div>

      <div className="relative h-5">
        <div className="absolute top-1/2 h-1 w-full -translate-y-1/2 rounded-full bg-[rgba(65,66,71,0.08)]" />
        <div
          className="absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-accent"
          style={{ left: `${minPercent}%`, right: `${100 - maxPercent}%` }}
        />
        <input
          type="range"
          aria-label="Minimum price"
          min={bounds.min}
          max={bounds.max}
          value={minVal}
          onChange={(e) => handleMinChange(Number(e.target.value))}
          className={thumbClasses}
        />
        <input
          type="range"
          aria-label="Maximum price"
          min={bounds.min}
          max={bounds.max}
          value={maxVal}
          onChange={(e) => handleMaxChange(Number(e.target.value))}
          className={thumbClasses}
        />
      </div>
    </div>
  );
}
