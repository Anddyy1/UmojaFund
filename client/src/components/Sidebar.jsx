import { NavLink } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";

export default function Sidebar() {
  const { theme, toggleTheme } = useDarkMode();
  
  const linkClasses =
    "block px-4 py-3 rounded-lg font-medium text-gray-700 hover:bg-orange-200 transition";

  const activeClasses =
    "block px-4 py-3 rounded-lg font-semibold bg-orange-500 text-white shadow";

  return (
    <aside className="w-64 bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-6 h-fit">
      <nav className="space-y-3">

        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? activeClasses : linkClasses)}
        >
          🏠 Dashboard
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? activeClasses : linkClasses)}
        >
          👤 Profile
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? activeClasses : linkClasses)}
        >
          📁 My Projects
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) => (isActive ? activeClasses : linkClasses)}
        >
          ⚙️ Settings
        </NavLink>

      </nav>

      <button
        onClick={toggleTheme}
        className="w-full mt-6 bg-emerald-600 dark:bg-amber-600 
                   text-white py-2 px-4 rounded-xl shadow-md
                   hover:bg-emerald-700 dark:hover:bg-amber-700
                   transition-all"
      >
        {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </aside>
  );
}