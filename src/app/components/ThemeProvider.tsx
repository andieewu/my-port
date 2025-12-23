"use client";

import { useEffect } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize AOS
    const AOS = require("aos");
    AOS.init();
  }, []);

  return <>{children}</>;
}
