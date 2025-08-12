import React, { useMemo, useState } from "react";
import AppBar from "./components/AppBar";
import TodoCard from "./components/TodoCard";
import BottomNav from "./components/BottomNav";
import Fab from "./components/Fab";
import "./styles/common.css";
import "./styles/todo-page.css";

/**
 * TodoPage implements the full TODO APP screen based on the extracted Figma design.
 * It manages todos, filtering, and item actions using React state and handlers.
 */
// PUBLIC_INTERFACE
export default function TodoPage() {
  /** Full TODO screen rendering and interactivity (add/edit/delete/complete/filter). */

  const [todos, setTodos] = useState(() => {
    // Seed with four items matching the provided HTML
    return [
      { id: 1, title: "TODO TITLE", subtitle: "TODO SUB TITLE", completed: false },
      { id: 2, title: "TODO TITLE", subtitle: "TODO SUB TITLE", completed: false },
      { id: 3, title: "TODO TITLE", subtitle: "TODO SUB TITLE", completed: false },
      { id: 4, title: "TODO TITLE", subtitle: "TODO SUB TITLE", completed: false },
    ];
  });

  const [filter, setFilter] = useState("all"); // "all" | "completed"

  const filteredTodos = useMemo(() => {
    if (filter === "completed") {
      return todos.filter((t) => t.completed);
    }
    return todos;
  }, [todos, filter]);

  // PUBLIC_INTERFACE
  const handleAdd = () => {
    /** Prompt for new todo and append to the list. */
    const title = window.prompt("New todo title:", "TODO TITLE");
    if (title === null || title.trim() === "") return;

    const subtitleInput = window.prompt("New todo subtitle:", "TODO SUB TITLE");
    const subtitle = (subtitleInput ?? "TODO SUB TITLE").trim();

    const nextId = todos.length ? Math.max(...todos.map((t) => t.id)) + 1 : 1;
    setTodos((prev) => [
      ...prev,
      { id: nextId, title: title.trim(), subtitle, completed: false },
    ]);
  };

  // PUBLIC_INTERFACE
  const handleEdit = (id) => {
    /** Edit an existing todo's title and subtitle using prompts. */
    const item = todos.find((t) => t.id === id);
    if (!item) return;

    const newTitle = window.prompt("Edit title:", item.title || "TODO TITLE");
    if (newTitle !== null && newTitle.trim() !== "") {
      item.title = newTitle.trim();
    }

    const newSubtitle = window.prompt(
      "Edit subtitle:",
      item.subtitle || "TODO SUB TITLE"
    );
    if (newSubtitle !== null && newSubtitle.trim() !== "") {
      item.subtitle = newSubtitle.trim();
    }

    setTodos((prev) => prev.map((t) => (t.id === id ? { ...item } : t)));
  };

  // PUBLIC_INTERFACE
  const handleDelete = (id) => {
    /** Remove a todo item from the list. */
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  // PUBLIC_INTERFACE
  const handleToggleComplete = (id) => {
    /** Toggle completion state and maintain ARIA pressed via component prop. */
    setTodos((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  // PUBLIC_INTERFACE
  const handleFilterChange = (value) => {
    /** Switch between "all" and "completed" filters. */
    setFilter(value);
  };

  return (
    <div className="screen">
      <div className="screen-inner screen-todo" role="application" aria-label="TODO APP">
        <div className="status-bar" aria-hidden="true"></div>
        <AppBar />

        <main className="content" role="main">
          <section className="todos" aria-label="Todo list">
            {filteredTodos.map((todo) => (
              <TodoCard
                key={todo.id}
                todo={todo}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onToggleComplete={handleToggleComplete}
              />
            ))}
          </section>
        </main>

        <Fab onClick={handleAdd} />

        <BottomNav value={filter} onChange={handleFilterChange} />
      </div>
    </div>
  );
}
