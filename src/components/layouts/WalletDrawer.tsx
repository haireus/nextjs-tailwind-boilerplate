import classnames from "classnames";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import React from "react";

import coinbaseImg from "@/public/assets/images/coinbase.png";
import glowImg from "@/public/assets/images/glowWallet.png";
import metamaskImg from "@/public/assets/images/metamask.png";
import phantomImg from "@/public/assets/images/phantom.png";
import walletConnectImg from "@/public/assets/images/walletConnect.png";
import { IconClose } from "@/public/assets/svgs/IconClose";

import { Drawer } from "../drawer";

interface IProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const WALLETS = [
  {
    id: 1,
    avatar: phantomImg,
    name: "Phantom",
    chain: "Solana",
    isPopular: false,
  },
  {
    id: 2,
    avatar: coinbaseImg,
    name: "Coinbase Wallet",
    chain: null,
    isPopular: false,
  },
  {
    id: 3,
    avatar: walletConnectImg,
    name: "Wallet Connect",
    chain: "Ethereum",
    isPopular: false,
  },
  {
    id: 4,
    avatar: metamaskImg,
    name: "Metamask",
    chain: "Popular",
    isPopular: true,
  },
  {
    id: 5,
    avatar: glowImg,
    name: "Glow",
    chain: "Solana",
    isPopular: false,
  },
];
export const WalletDrawer = ({ isOpen, setIsOpen }: IProps) => {
  const { t } = useTranslation("common");

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex justify-between items-center mb-10">
        <div className="font-semibold text-xl">{t("connectWallet")}</div>
        <div
          onClick={handleClose}
          className="[&>svg>path]:fill-icon-primary  cursor-pointer w-8 h-8 flex items-center justify-center hover:bg-general-bgdark rounded-full"
        >
          <IconClose />
        </div>
      </div>

      <div>
        {WALLETS.map((wallet) => (
          <div
            key={wallet.id}
            className="h-[68px] px-[26px] border-solid border cursor-pointer hover:bg-general-light border-general-border mb-5 rounded-2xl flex justify-between items-center bg-white/[0.88] dark:bg-white/[0.02]"
          >
            <div className="flex items-center">
              <Image src={wallet.avatar} alt="" />
              <span className="ml-[18px]">{wallet.name}</span>
            </div>

            {wallet.chain ? (
              <button
                className={classnames({
                  "bg-general-light font-semibold text-icon-primary  px-3 py-1.5 rounded-lg":
                    true,
                  "bg-gradient-orange backdrop-blur-[20px]": wallet.isPopular,
                })}
              >
                {wallet.chain}
              </button>
            ) : null}
          </div>
        ))}
      </div>
    </Drawer>
  );
};
