import Image from "next/image";
import { useTranslation } from "next-i18next";

import { Button } from "@/components/button";
import astronautImg from "@/public/assets/svgs/astronaut.svg";

export const LendNFT = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-[150px] flex justify-between">
      <div>
        <div className="font-semibold text-[52px] mb-6 leading-[60px]">
          Lend out your <span className="text-accent-orange">Idle NFTs</span>
        </div>

        <div className="font-medium text-xl">
          Discover, Sell and Lend out your NFTs
        </div>

        <div className="w-[220px] mt-[72px]">
          <Button title={t("startNow")} buttonType="filled" />
        </div>
      </div>
      <div>
        <Image src={astronautImg} alt="astonaut" />
      </div>
    </div>
  );
};
