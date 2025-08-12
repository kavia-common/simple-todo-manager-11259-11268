import React from "react";

/**
 * Floating Action Button (FAB) to add a new todo item.
 *
 * Props:
 * - onClick: () => void
 * - ariaLabel?: string
 */
// PUBLIC_INTERFACE
export default function Fab({ onClick, ariaLabel = "Add new todo" }) {
  /** Floating action button with a plus icon built using CSS. */
  return (
    <button className="fab" id="addTodoBtn" aria-label={ariaLabel} onClick={onClick}>
      <span className="plus" aria-hidden="true"></span>
    </button>
  );
}
