import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faLightbulb } from "@fortawesome/free-solid-svg-icons";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="flex items-center">
      {theme === "dark" ? (
        <button
          onClick={() => setTheme("light")}
          className="rounded-full outline-none focus:outline-none"
        >
          <span className="sr-only">Light Mode</span>
          Surf
        </button>
      ) : (
        <button
          onClick={() => setTheme("dark")}
          className=" rounded-full outline-none focus:outline-none focus-visible:ring focus-visible:ring-orange-100 focus:ring-opacity-20"
        >
          <span className="sr-only">Dark Mode</span>
          Beach
        </button>
      )}
    </div>
  );
};

export default ThemeChanger;
