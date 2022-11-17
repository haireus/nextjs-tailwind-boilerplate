import { useTheme } from "next-themes";
import React from "react";

import { IconDay } from "@/public/assets/svgs/IconDay";
import { IconNight } from "@/public/assets/svgs/IconNight";
import { ThemeMode } from "@/types/enum";

import styles from "./styles.module.css";

export const Switch = () => {
  const { theme, setTheme } = useTheme();

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.checked ? ThemeMode.DARK : ThemeMode.LIGHT);
  };
  return (
    <div className="bg-[#eeeded] w-[68px] h-[36px] shadow-inner rounded-[100px] relative">
      <input
        type="checkbox"
        className={styles.checkbox}
        onChange={handleCheck}
        checked={theme === ThemeMode.DARK}
      />
      <div className={styles.knobs}>
        <span className="[&>svg>path]:fill-general-primary">
          <IconDay />
        </span>
      </div>
      <div className={styles.no}>
        <span className="[&>svg>path]:fill-general-primary]">
          <IconNight />
        </span>
      </div>
      <div></div>
    </div>
  );
};
