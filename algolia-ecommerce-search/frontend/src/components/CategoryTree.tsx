import { useEffect, useState } from 'react';
import type { CategoryNode } from '../hooks/useCategoryTree';
import { CountBadge } from './shared/CountBadge';

interface CategoryTreeProps {
  tree: CategoryNode[];
  selected: string | null;
  onSelect: (category: string | null) => void;
}

const rowClasses =
  'flex w-full cursor-pointer items-center border-none bg-transparent px-0 py-[0.45rem] text-left text-[0.95rem]';

function rowStateClasses(isActive: boolean) {
  return isActive ? 'text-primary font-bold' : 'text-primary font-normal';
}

function ToggleIcon({ expanded }: { expanded: boolean }) {
  return (
    <svg
      className={`mr-4 h-2 w-2 shrink-0 fill-[#90919e] ${expanded ? 'rotate-180' : ''}`}
      viewBox="0 0 8 8"
      aria-hidden="true"
    >
      <path d="M0 4l4-4 4 4z" />
    </svg>
  );
}

/** Two-level category facet: clicking a top-level row selects it and expands its subcategories. */
export function CategoryTree({ tree, selected, onSelect }: CategoryTreeProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (selected === null) setExpanded(null);
  }, [selected]);

  return (
    <ul className="m-0 list-none p-0">
      {tree.map((category) => {
        const isExpanded = expanded === category.name;
        return (
          <li key={category.name}>
            <button
              type="button"
              className={`${rowClasses} ${rowStateClasses(isExpanded)}`}
              onClick={() => {
                const isCurrentlySelected = selected === category.name;
                onSelect(isCurrentlySelected ? null : category.name);
                setExpanded(isCurrentlySelected ? null : category.name);
              }}
            >
              <ToggleIcon expanded={isExpanded} />
              <span className="whitespace-nowrap">{category.name}</span>
              <CountBadge count={category.count} />
            </button>

            {isExpanded && category.children.length > 0 && (
              <ul className="m-0 list-none p-0">
                {category.children.map((child) => (
                  <li key={child.name}>
                    <button
                      type="button"
                      className={`${rowClasses} pl-5 ${rowStateClasses(selected === child.name)}`}
                      onClick={() => onSelect(selected === child.name ? null : child.name)}
                    >
                      <ToggleIcon expanded={false} />
                      <span className="whitespace-nowrap">{child.name}</span>
                      <CountBadge count={child.count} />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}
