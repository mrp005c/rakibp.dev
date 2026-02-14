"use client";

import { ThemeProvider } from "next-themes";
import { ConfirmProvider } from "@/components/general/confirm-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <ConfirmProvider>{children}</ConfirmProvider>
    </ThemeProvider>
  );
}
