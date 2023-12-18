"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BiSun, BiMoon } from "react-icons/bi";

export function ThemeSwitcher() {
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
          className="py-1 px-4 items-center border flex justify-between rounded w-full"
        >
          <BiSun size={ICON_SIZE} />
          <span className="ml-2">Light</span>
        </button>
      ) : (
        <button
          onClick={() => setTheme("dark")}
          className="py-1 px-4 items-center border flex justify-between rounded w-full"
        >
          <BiMoon size={ICON_SIZE} />
          <span className="ml-2">Dark</span>
        </button>
      )}
    </>
  );
}
