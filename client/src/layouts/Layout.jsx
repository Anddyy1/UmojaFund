import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Layout({ children }) {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-orange-100 via-orange-200 to-yellow-100 dark:bg-gray-900 transition-colors">

      {/* TOP NAVBAR */}
      <nav className="w-full bg-white/70 backdrop-blur-md shadow-md px-6 py-4 flex items-center justify-between dark:bg-gray-800/70">
        <h1 className="text-2xl font-bold text-orange-700 tracking-wide dark:text-orange-400">
          UmojaFund
        </h1>

        <div className="flex items-center gap-4">
          <span className="text-gray-700 font-medium dark:text-gray-300">
            Hi, {user?.name} 👋
          </span>

          <button
            onClick={logout}
            className="px-4 py-2 bg-orange-600 text-white rounded-lg shadow hover:bg-orange-700 transition dark:bg-orange-700 dark:hover:bg-orange-600"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      {/* NOTE: removed `flex` here and ensured full width so child pages control layout */}
      <main className="flex-grow p-6 w-full">
        {children}
      </main>
    </div>
  );
}
