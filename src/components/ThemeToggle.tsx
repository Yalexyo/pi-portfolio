"use client";

import React, { useEffect, useState } from "react";
import { ToggleButton, useTheme } from "@once-ui-system/core";

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <ToggleButton
        prefixIcon="light"
        aria-label="Switch theme"
      />
    );
  }

  const currentTheme = theme || "dark";
  const icon = currentTheme === "dark" ? "light" : "dark";
  const nextTheme = currentTheme === "light" ? "dark" : "light";

  const handleThemeChange = () => {
    setTheme(nextTheme);
    // Update localStorage
    localStorage.setItem("data-theme", nextTheme);
    // Update DOM attribute
    document.documentElement.setAttribute("data-theme", nextTheme);
    // Dispatch custom event for Providers to listen
    window.dispatchEvent(new CustomEvent("themechange"));
  };

  return (
    <ToggleButton
      prefixIcon={icon}
      onClick={handleThemeChange}
      aria-label={`Switch to ${nextTheme} mode`}
    />
  );
};
