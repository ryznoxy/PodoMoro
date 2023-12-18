"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BiSun, BiMoon } from "react-icons/bi";

export function ThemeSwitcherTodoList() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const ICON_SIZE = 24;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {theme === "dark" ? (
        <button
          onClick={() => setTheme("light")}
          className="p-1 items-center   rounded"
        >
          <BiSun size={ICON_SIZE} />
        </button>
      ) : (
        <button
          onClick={() => setTheme("dark")}
          className="p-1 items-center   rounded"
        >
          <BiMoon size={ICON_SIZE} />
        </button>
      )}
    </>
  );
}
