import React from "react";

/**
 * BottomNav provides two filter options: "All" and "Completed".
 *
 * Props:
 * - value: "all" | "completed"
 * - onChange: (value) => void
 */
// PUBLIC_INTERFACE
export default function BottomNav({ value, onChange }) {
  /** Bottom nav component to switch between list filters. */
  const makeClass = (key) =>
    `nav-item${value === key ? " active" : ""}`;

  const handleClick = (key) => {
    if (onChange) onChange(key);
  };

  return (
    <nav className="bottom-nav" aria-label="Todo filters">
      <button
        className={makeClass("all")}
        data-filter="all"
        aria-pressed={value === "all" ? "true" : "false"}
        onClick={() => handleClick("all")}
      >
        <span className="icon" aria-hidden="true">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16"></path>
            <path d="M4 10h16"></path>
            <path d="M4 14h12"></path>
          </svg>
        </span>
        <span className={`label ${value === "all" ? "typo-6" : "typo-7"}`}>
          All
        </span>
      </button>

      <button
        className={makeClass("completed")}
        data-filter="completed"
        aria-pressed={value === "completed" ? "true" : "false"}
        onClick={() => handleClick("completed")}
      >
        <span className="icon" aria-hidden="true">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 12l4 4 8-10"></path>
          </svg>
        </span>
        <span className={`label ${value === "completed" ? "typo-6" : "typo-7"}`}>
          Completed
        </span>
      </button>
    </nav>
  );
}
