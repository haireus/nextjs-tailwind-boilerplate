import classnames from "classnames";

interface OptionProps {
  selectedValue?: string | number;
  value: string | number;
  onSelect: (e: string | number) => void;
  children: React.ReactNode;
  type: "radio" | "tab";
}
const Option = ({
  selectedValue,
  value,
  onSelect,
  children,
  type,
}: OptionProps) => {
  const isSelected = value === selectedValue;
  return (
    <div
      className={classnames({
        "text-base font-normal w-[48px] h-[44px] text-text-primary flex items-center justify-center cursor-pointer rounded-xl mr-1":
          true,
        "bg-gradient-orange text-[#fff]": isSelected,
        "w-fit px-[40px]": type === "tab",
      })}
      onClick={() => onSelect(value)}
    >
      {children}
    </div>
  );
};

export default Option;
