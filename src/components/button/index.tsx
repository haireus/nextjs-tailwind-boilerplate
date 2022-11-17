import classnames from "classnames";
import type { ReactNode } from "react";
import React from "react";

interface IProps {
  size?: "small" | "medium" | "large";
  buttonType?: "filled" | "outline";
  title?: string;
  class?: string;
  onClick?: () => void;
  icon?: ReactNode;
}
export const Button = ({
  buttonType = "filled",
  size = "medium",
  onClick,
  title,
  icon,
}: IProps) => {
  return (
    <button
      className={classnames({
        "w-full rounded-[12px] flex justify-center items-center": true,
        "bg-gradient-orange text-white": buttonType === "filled",
        "bg-gradient-orange webkit-fill-transparent bg-clip-text border-accent-orange border border-solid":
          buttonType === "outline",
        "w-[52px] h-[52px] ": icon,
        "h-[60px]": size === "medium",
        "h-[80px]": size === "large",
        class: true,
      })}
      onClick={onClick}
    >
      {icon || title}
    </button>
  );
};
