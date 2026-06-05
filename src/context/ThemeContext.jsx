import { createContext, useContext, useEffect, useState } from "react";

// A small context that holds the current theme ("dark" | "light")
// and a function to toggle it. The choice is saved in localStorage.
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Read the saved theme on first load (defaults to dark).
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });

  // Whenever the theme changes, update the <html> class and save it.
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Handy hook so components can read/toggle the theme easily.
export function useTheme() {
  return useContext(ThemeContext);
}
