"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="w-full max-w-xl mx-auto md:mx-0 md:ml-auto px-6 h-14 mt-2 flex items-center justify-end gap-2 animate__animated animate__slideInDown animate__delay-2s">
        <div className="flex items-center gap-2">
          <div className="relative flex items-center rounded-full bg-gray-500/20 dark:bg-gray-700/30 backdrop-blur-md p-1 transition-all duration-300 hover:scale-105">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-8 h-8 flex items-center justify-center rounded-full dark:text-white transition-all duration-300"
            >
              <i
                className={
                  theme === "light"
                    ? "ri-moon-line text-xl"
                    : "ri-sun-line text-xl"
                }
              ></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
