import { createContext } from "react";

export const ThemeContext = createContext<{
  theme: "light" | "dark";
  isDark: boolean;
  toggleTheme: () => void;
}>({ theme: "dark", isDark: true, toggleTheme: () => {} });
