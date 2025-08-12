import React from "react";

/**
 * AppBar displays the top application bar with the screen title and calendar icon,
 * matching the extracted Figma style (height 118px, background #9395d3).
 */
// PUBLIC_INTERFACE
export default function AppBar() {
  /** AppBar component for TODO APP screen. */
  return (
    <header className="appbar" role="banner">
      <h1 className="app-title typo-8">TODO APP</h1>
      <div className="calendar-icon" role="img" aria-label="Calendar">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="5" width="18" height="16" rx="2"></rect>
          <path d="M16 3v4M8 3v4M3 9h18"></path>
        </svg>
      </div>
    </header>
  );
}
