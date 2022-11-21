import React from "react";

import type { Indicator } from "@/types/enum";

interface IProps {
  type: Indicator.DOWN | Indicator.UP;
}
export const IndicatorSpan = ({ type }: IProps) => {
  console.log(type);

  return (
    <span className="bg-general-indicator text-accent-green">+182,24%</span>
  );
};
