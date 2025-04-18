"use client";

import { Moon, Sun } from "lucide-react";
import React from "react";
import { Toggle } from "../ui/toggle";
import { useTheme } from "next-themes";

type ThemeType = "light" | "dark";
function ThemeToggler() {
  const { setTheme, theme } = useTheme();

  function handleTheme(theme: ThemeType) {
    console.log(theme);
    setTheme(theme);
  }

  return (
    <Toggle
      aria-label="Toggle italic"
      onClick={() => handleTheme(theme !== "light" ? "light" : "dark")}
    >
      {theme === "light" ? <Sun /> : <Moon />}
    </Toggle>
  );
}

export default ThemeToggler;
