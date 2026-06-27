import React from "react";
import useToggle from "../hooks/useToggle";

export default function ThemeSwitcher() {
  const [isDark, toggleTheme] = useToggle();
  return (
    <button onClick={toggleTheme}>
      {isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}
