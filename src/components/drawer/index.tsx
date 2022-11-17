import classnames from "classnames";
import type { ReactNode } from "react";
import React from "react";

interface IProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
export const Drawer = ({ children, isOpen, setIsOpen }: IProps) => {
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <main
      className={classnames({
        "fixed overflow-hidden z-50 bg-gray-900/50  inset-0 ease-in-out": true,
        "transition-opacity opacity-100 duration-200 translate-x-0 ": isOpen,
        " transition-all delay-100 opacity-0 translate-x-full": !isOpen,
      })}
    >
      <section
        className={classnames({
          "delay-200 w-screen max-w-lg right-0 absolute py-[52px] px-[60px] bg-general-background  h-full shadow-xl duration-100 ease-in-out transition-all":
            true,
          " translate-x-0 ": isOpen,
          " translate-x-full ": !isOpen,
        })}
      >
        <article className="relative w-[400px] max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          {children}
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={handleClose}
      ></section>
    </main>
  );
};
