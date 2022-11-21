import React from "react";

import type { IRadioGroupOption } from "@/types/type";

import Option from "./Option";

interface IProps {
  options: IRadioGroupOption[];
  onChange?: (e: string | number) => void;
  value?: string | number;
  type: "radio" | "tab";
}
export const RadioGroup = ({ options, onChange, value, type }: IProps) => {
  const onSelect = (e: string | number) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="p-1 pr-0 bg-general-light text-text-primary text-base backdrop-blur-[20px] w-fit rounded-2xl">
      <div className="flex">
        {options.length
          ? options.map((el, index) => (
              <Option
                key={index}
                value={el.value}
                selectedValue={value}
                onSelect={() => onSelect(el.value)}
                type={type}
              >
                {el.name}
              </Option>
            ))
          : null}
      </div>
    </div>
  );
};
