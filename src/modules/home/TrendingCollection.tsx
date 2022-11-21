import { useTranslation } from "next-i18next";
import { useState } from "react";

import { RadioGroup } from "@/components/radioGroup";
import { Table } from "@/components/table/Table";
import type { IRadioGroupOption } from "@/types/type";

const TIMER_FILLTER: IRadioGroupOption[] = [
  {
    name: "1h",
    value: "1h",
  },
  {
    name: "6h",
    value: "6h",
  },
  {
    name: "1d",
    value: "1d",
  },
  {
    name: "7d",
    value: "7d",
  },
  {
    name: "14d",
    value: "14d",
  },
  {
    name: "30d",
    value: "30d",
  },
];

const COLLECTION: IRadioGroupOption[] = [
  { name: "NFTs", value: "NFTs" },
  { name: "Games", value: "games" },
];

export const TrendingCollection = () => {
  const { t } = useTranslation("home");

  const [time, setTime] = useState<string | number>("1h");
  const [collection, setCollection] = useState<string | number>("NFTs");

  return (
    <div className="bg-general-background p-[40px] rounded-3xl">
      <div className="font-semibold text-[32px]">{t("trendingCollection")}</div>
      <div className="mt-8 flex justify-between">
        <RadioGroup
          options={COLLECTION}
          value={collection}
          onChange={(e) => setCollection(e)}
          type="tab"
        />
        <RadioGroup
          options={TIMER_FILLTER}
          value={time}
          onChange={(e) => setTime(e)}
          type="radio"
        />
      </div>

      <Table />
    </div>
  );
};
