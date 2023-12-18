"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <div className="max-w-md mx-auto h-full">
          <div className="px-2">{children}</div>
        </div>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
