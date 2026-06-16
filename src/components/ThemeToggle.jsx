import { FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext.jsx";

// A button that switches between dark and light mode.
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark and light mode"
      className="grid w-10 h-10 transition-colors rounded-full place-items-center glass text-primary hover:text-accent"
    >
      <motion.span
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
      </motion.span>
    </button>
  );
}
