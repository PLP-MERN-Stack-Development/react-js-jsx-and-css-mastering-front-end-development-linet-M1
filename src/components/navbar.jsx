import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import Button from "./Button";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center transition-colors duration-300">
      {/* Brand / Logo */}
      <h1 className="text-2xl font-bold text-blue-500">PLP Task Manager</h1>

      {/* Navigation Links */}
      <div className="flex items-center gap-4">
        <Link
          to="/"
          className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors"
        >
          About
        </Link>
        <Link
          to="/tasks"
          className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors"
        >
          Tasks
        </Link>

        {/* Theme Toggle Button */}
        <Button variant="secondary" size="sm" onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </Button>
      </div>
    </nav>
  );
}
