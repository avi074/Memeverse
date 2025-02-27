"use client";

import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className='p-2 rounded-md bg-gray-200 dark:bg-gray-800'>
      {darkMode ? "🌙" : "☀️"}
      <span className='sr-only'>{darkMode ? "Dark Mode" : "Light Mode"}</span>
    </button>
  );
}
