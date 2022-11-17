import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Button } from "@/components/button";
import { Layout } from "@/components/layouts";
import { SEO } from "@/components/layouts/SEO";
import { FeatureCollection } from "@/modules/home/FeatureCollection";
import { LendNFT } from "@/modules/home/LendNFT";
import SwiperJS from "@/modules/home/SwiperJS";
import { TrendingCollection } from "@/modules/home/TrendingCollection";
import { IconAlert } from "@/public/assets/svgs/IconAlert";

export async function getServerSideProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", [
        "common",
        "footer",
        "home",
      ])),
    },
  };
}

export default function Home() {
  const { t } = useTranslation("home");
  return (
    <Layout seo={<SEO title="Home page" description="NFT content" />}>
      <div className="text-sm font-normal flex justify-between border border-general-border px-6 py-5 rounded-xl bg-general-light">
        <div className="flex items-center ">
          <span className="[&>svg>path]:fill-icon-primary mr-2">
            <IconAlert />
          </span>
          <span>
            Only <b>0.5% trading fee</b> to celebrate the launch of our
            marketplace!
          </span>
        </div>

        <button className="bg-gradient-orange  webkit-fill-transparent bg-clip-text">
          {t("showMore")}
        </button>
      </div>

      <div className="flex justify-between mt-[88px] items-center">
        <div className="max-w-md">
          <div className="font-light text-base mb-5">NFT MARKETPLACE</div>
          <div className="font-semibold text-[52px] mb-6 leading-[60px]">
            Step into the land of{" "}
            <span className="text-accent-orange">GamiFi</span>
          </div>
          <div className="font-medium text-xl">
            Discover, Sell and Lend out you NFTs
          </div>

          <div className="w-[220px] mt-[72px]">
            <Button size="medium" buttonType="filled" title={t("startNow")} />
          </div>
        </div>

        <div className="mr-[10%]">
          <SwiperJS />
        </div>
      </div>

      <FeatureCollection />
      <LendNFT />
      <TrendingCollection />
    </Layout>
  );
}
