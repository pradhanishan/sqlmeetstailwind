"use client";

import { useState } from "react";

export default function NavigationDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  function openDrawer() {
    setIsDrawerOpen(true);
  }

  function closeDrawer() {
    setIsDrawerOpen(false);
  }

  return (
    <div>
      {/* Drawer Opener */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        onClick={openDrawer}
      >
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
      {/* Drawer closer */}

      {/* Drawer */}
      {isDrawerOpen === true ? (
        <div
          className="h-screen fixed left-0 top-0 
        w-[250px]
        bg-gradient-to-br from-gray-400 to-slate-300
        dark:bg-gradient-to-br dark:from-slate-900 dark:to-sky-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={closeDrawer}
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
      ) : null}
    </div>
  );
}
