// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import classnames from "classnames";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import React, { useState } from "react";
import type { Swiper as SwiperProps } from "swiper";
import { FreeMode, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import avatar_1 from "@/public/assets/images/avatar_1.png";
import avatar_2 from "@/public/assets/images/avatar_2.png";
import avatar_3 from "@/public/assets/images/avatar_3.png";
import avatar_4 from "@/public/assets/images/avatar_4.png";
import image_1 from "@/public/assets/images/feature_collection_1.png";
import image_2 from "@/public/assets/images/feature_collection_2.png";
import image_3 from "@/public/assets/images/feature_collection_3.png";
import image_4 from "@/public/assets/images/feature_collection_4.png";
import { IconCurved } from "@/public/assets/svgs/IconCurved";
import { IconNext } from "@/public/assets/svgs/IconNext";
import { IconPrev } from "@/public/assets/svgs/IconPrev";

const LIST_COLLECTIONS = [
  {
    id: 1,
    image: image_1,
    avatar: avatar_1,
    title: "Dark Echelon",
    author: "@fermer",
  },
  {
    id: 2,
    image: image_2,
    avatar: avatar_2,
    title: "Mindblowon Universe",
    author: "@slawn",
  },
  {
    id: 3,
    image: image_3,
    avatar: avatar_3,
    title: "Karafuru x HYPEBEAST x At the first time ever",
    author: "@agnet",
  },
  {
    id: 4,
    image: image_4,
    avatar: avatar_4,
    title: "HYPEBEAST",
    author: "@lemon",
  },
  {
    id: 5,
    image: image_1,
    avatar: avatar_1,
    title: "Dark Echelon",
    author: "@fermer",
  },
  {
    id: 6,
    image: image_1,
    avatar: avatar_1,
    title: "Dark Echelon",
    author: "@fermer",
  },
];

export const FeatureCollection = () => {
  const { t } = useTranslation("home");

  const [swiperInstance, setSwiperInstance] = useState<SwiperProps>();
  const [slideState, setSlideState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  const handleChangeSlide = (e: SwiperProps) => {
    setSlideState((prev) => ({
      ...prev,
      isBeginning: e.isBeginning,
      isEnd: e.isEnd,
    }));
  };

  return (
    <div className="w-full mt-40">
      <div className="flex justify-between items-center mb-8">
        <div className="font-semibold text-[32px]">
          {t("featuredCollection")}
        </div>
        <div>
          <button
            className={classnames({
              "[&>svg>g>path]:fill-icon-primary [&>svg>g>rect]:stroke-icon-primary":
                true,
              "[&>svg>g]:opacity-100 ": !slideState.isBeginning,
            })}
            onClick={() => swiperInstance?.slidePrev()}
          >
            <IconPrev />
          </button>

          <button
            className={classnames({
              "rotate-180 ml-3 [&>svg>g>path]:fill-icon-primary [&>svg>g>rect]:stroke-icon-primary":
                true,
              "[&>svg>g]:opacity-100": !slideState.isEnd,
            })}
            onClick={() => swiperInstance?.slideNext()}
          >
            <IconNext />
          </button>
        </div>
      </div>

      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          loop={false}
          onSlideChange={handleChangeSlide}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          modules={[FreeMode, Navigation]}
          className=" "
        >
          {LIST_COLLECTIONS.map((collection) => (
            <SwiperSlide key={collection.id}>
              <div className="flex flex-col">
                <div className="relative">
                  <Image
                    src={collection.image}
                    alt={collection.author}
                    className={"w-full rounded-t-3xl"}
                  />

                  <div className="[&>svg>g>path]:fill-basePrimary absolute bottom-0 right-1/2 translate-x-1/2 ">
                    <IconCurved />
                  </div>
                </div>

                <div className=" flex flex-col justify-center items-center bg-secondary rounded-b-3xl px-[25px]">
                  <Image
                    src={collection.avatar}
                    alt="avatar"
                    className="mt-[-35px] z-10"
                  />
                  <div className="font-semibold text-base leading-5 mt-[22px] line-clamp-1 ">
                    {collection.title}
                  </div>
                  <div className="font-normal text-base text-text-primary mb-9">
                    {collection.author}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
