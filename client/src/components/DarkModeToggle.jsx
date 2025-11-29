import React, { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() => {
    try {
      const stored = localStorage.getItem("umojafund:dark");
      return stored ? JSON.parse(stored) : false;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("umojafund:dark", JSON.stringify(dark));
  }, [dark]);

  return (
    <button
      onClick={() => setDark((s) => !s)}
      className="px-3 py-1 rounded-full bg-white/80 dark:bg-gray-800/60 shadow-sm text-emerald-700 hover:scale-105 transition"
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
