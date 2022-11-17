import { useTranslation } from "next-i18next";

export const TrendingCollection = () => {
  const { t } = useTranslation("home");
  return (
    <div>
      <div className="font-semibold text-[32px]">{t("trendingCollection")}</div>
      <div className="mt-8 text-general-primary">haiures</div>
    </div>
  );
};
