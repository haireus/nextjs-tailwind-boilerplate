import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import { useMode } from "@/hooks/useMode";
import { IconCombinedShape } from "@/public/assets/svgs/IconCombinedShape";
import { IconFacebook } from "@/public/assets/svgs/IconFacebook";
import { IconTelegram } from "@/public/assets/svgs/IconTelegram";
import { IconTwitter } from "@/public/assets/svgs/IconTwitter";
import logoDark from "@/public/assets/svgs/logoDark.svg";
import logoLight from "@/public/assets/svgs/logoLight.svg";

const listIcons = [
  {
    icon: <IconTelegram />,
    link: "https://www.telegram.com",
  },
  {
    icon: <IconTwitter />,
    link: "https://www.twitter.com",
  },
  {
    icon: <IconFacebook />,
    link: "https://www.facebook.com",
  },
];
export const Footer = () => {
  const isDark = useMode();
  const { t } = useTranslation("footer");

  return (
    <div className="px-[63px] border-t-[1px] border-general-border py-[10px] flex justify-between items-center">
      <div>
        <Image
          className="w-[130px] h-[52px]"
          src={isDark ? logoDark : logoLight}
          alt=""
        />
      </div>

      <div className="flex [&>*]:mx-[10px]">
        {listIcons.map((icon) => (
          <Link
            key={icon.link}
            href={icon.link}
            className="[&>svg>path]:fill-icon-primary bg-general-bglight w-[28px] h-[28px] flex justify-center items-center rounded-full"
          >
            {icon.icon}
          </Link>
        ))}
      </div>

      <div className="text-[12px] font-[400]">{t("copyright")}</div>

      <div className="text-[12px] flex">
        {t("madeBy")}&nbsp;<b> robinium.io</b>&nbsp;
        <p className="inline [&>svg>path]:fill-icon-primary">
          <IconCombinedShape />
        </p>
      </div>
    </div>
  );
};
