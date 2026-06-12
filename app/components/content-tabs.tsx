"use client";

import { useState, type ReactNode } from "react";

export type ContentTabItem = {
  id: string;
  title: string;
  mobileTitle?: string;
  panel: ReactNode;
};

type ContentTabsProps = {
  ariaLabel: string;
  items: readonly ContentTabItem[];
};

export default function ContentTabs({
  ariaLabel,
  items,
}: ContentTabsProps) {
  const [activeItemId, setActiveItemId] = useState(items[0]?.id ?? "");
  const activeItem = items.find((item) => item.id === activeItemId) ?? items[0];

  if (!activeItem) {
    return null;
  }

  return (
    <div className="py-4">
      <div
        role="tablist"
        aria-label={ariaLabel}
        className="flex gap-2 overflow-x-auto border-b border-gray-400 pb-0 scrollbar-thin sm:gap-0"
      >
        {items.map((item) => {
          const isActive = item.id === activeItem.id;

          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${item.id}`}
              id={`tab-${item.id}`}
              onClick={() => setActiveItemId(item.id)}
              className={`relative shrink-0 rounded-t-lg border border-b px-4 py-3 text-left text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 sm:-mb-px ${
                isActive
                  ? "z-10 border-gray-400 border-b-white bg-white text-black"
                  : "border-gray-300 bg-white/70 text-gray-700 hover:border-gray-400 hover:bg-white/90"
              }`}
            >
              <span className="font-semibold text-black sm:hidden">
                {item.mobileTitle ?? item.title}
              </span>
              <span className="hidden font-semibold text-black sm:inline">
                {item.title}
              </span>
            </button>
          );
        })}
      </div>
      <div
        id={`panel-${activeItem.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeItem.id}`}
        className="border border-t-0 border-gray-400 bg-white p-4 shadow-sm"
      >
        {activeItem.panel}
      </div>
    </div>
  );
}
