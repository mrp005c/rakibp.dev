"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const {theme, setTheme} = useTheme();

  const toggleTheme = () => {
    setTheme(()=> theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  // until the UI is mounted, display a dummy icon
  if (!mounted) {
    return (
      <Button variant={"outline"}>
        <Sun />
      </Button>
    );
  }
  return <Button variant={"ghost"} size={"icon"} onClick={toggleTheme} >{theme === 'dark'? <Sun /> : <Moon/>}</Button>;
};

export default ThemeSwitcher;
