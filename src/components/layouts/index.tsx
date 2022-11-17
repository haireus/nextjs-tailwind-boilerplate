import classnames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import type { ReactNode } from "react";
import { useRef, useState } from "react";
import { useScroll } from "react-use";

import { useMode } from "@/hooks/useMode";
import { IconSearch } from "@/public/assets/svgs/IconSearch";
import { IconWallet } from "@/public/assets/svgs/IconWallet";
import logoDark from "@/public/assets/svgs/logoDark.svg";
import logoLight from "@/public/assets/svgs/logoLight.svg";

import { Footer } from "../footer";
import { Switch } from "../switch";
import { WalletDrawer } from "./WalletDrawer";

interface ILayoutProps {
  seo: ReactNode;
  children: ReactNode;
}

export const Layout = ({ seo, children }: ILayoutProps) => {
  const isDark = useMode();

  const { t } = useTranslation("common");
  const scrollRef = useRef(null);
  const { y } = useScroll(scrollRef);

  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div
      ref={scrollRef}
      className={
        "bg-general-bgdark w-full flex flex-col overflow-auto h-screen dark:bg-header-dark  bg-header-white "
      }
    >
      {seo}
      <div
        className={classnames({
          "flex justify-between  sticky z-10 top-0 w-full px-[63px] pt-[10px]":
            true,
          " dark:bg-black bg-white": y > 20,
        })}
      >
        <div className="flex items-center">
          <Link href="/" className="mr-[30px]">
            <Image src={isDark ? logoDark : logoLight} alt="logo" />
          </Link>

          <ul className="flex text-[16px]">
            <li className="mr-[30px]">{t("discover")}</li>
            <li className="mr-[30px]">{t("ranking")}</li>
            <li>{t("lending")}</li>
          </ul>
        </div>

        <div className="flex items-center">
          <span className="dark:[&>svg>path]:fill-white mr-[100px]">
            <IconSearch />
          </span>
          <Switch />
          <div
            className="flex ml-[58px] [&>svg>path]:fill-icon-primary cursor-pointer"
            onClick={() => setOpenDrawer(!openDrawer)}
          >
            <IconWallet />
            <span className="ml-3">{t("connectWallet")}</span>
          </div>
        </div>
      </div>

      <div className="flex-1 px-[63px] pt-[10px]">{children}</div>

      <Footer />

      <WalletDrawer isOpen={openDrawer} setIsOpen={setOpenDrawer} />
    </div>
  );
};
