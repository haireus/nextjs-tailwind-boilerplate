import { useTheme } from "next-themes";

import { ThemeMode } from "@/types/enum";

export const useMode = () => {
  const { theme } = useTheme();
  return theme === ThemeMode.DARK;
};
