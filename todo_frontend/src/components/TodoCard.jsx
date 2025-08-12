import React from "react";

/**
 * TodoCard displays a single todo item with title, subtitle, and action icons
 * (edit, delete, complete). It mirrors the Figma styles and interactivity.
 *
 * Props:
 * - todo: { id: string|number, title: string, subtitle: string, completed: boolean }
 * - onEdit: (id) => void
 * - onDelete: (id) => void
 * - onToggleComplete: (id) => void
 */
// PUBLIC_INTERFACE
export default function TodoCard({ todo, onEdit, onDelete, onToggleComplete }) {
  /** Single TODO card component. */
  const { id, title, subtitle, completed } = todo;

  return (
    <article
      className={`todo-card${completed ? " completed" : ""}`}
      data-completed={completed ? "true" : "false"}
      aria-label="Todo item"
    >
      <div className="titles">
        <div className="title typo-9">{title}</div>
        <div className="subtitle typo-10">{subtitle}</div>
      </div>
      <div className="actions" role="group" aria-label="Item actions">
        <button
          className="icon-btn edit"
          title="Edit"
          onClick={() => onEdit(id)}
          aria-label={`Edit ${title}`}
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--color-b3b7ee)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M3 21l1-4 11-11 3 3-11 11-4 1z"></path>
            <path d="M14 6l4 4"></path>
          </svg>
        </button>
        <button
          className="icon-btn delete"
          title="Delete"
          onClick={() => onDelete(id)}
          aria-label={`Delete ${title}`}
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--color-b3b7ee)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M3 6h18"></path>
            <path d="M8 6V4h8v2"></path>
            <rect x="7" y="6" width="10" height="12" rx="1.5"></rect>
            <path d="M10 10v6M14 10v6"></path>
          </svg>
        </button>
        <button
          className="icon-btn complete"
          title="Mark complete"
          aria-pressed={completed ? "true" : "false"}
          onClick={() => onToggleComplete(id)}
          aria-label={`${completed ? "Unmark" : "Mark"} ${title} as complete`}
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            stroke="var(--color-b3b7ee)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12.5" cy="12.5" r="11.75"></circle>
            <path d="M7.5 12.5l3.5 3.5 6-7"></path>
          </svg>
        </button>
      </div>
    </article>
  );
}
