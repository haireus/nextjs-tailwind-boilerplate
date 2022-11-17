// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import classnames from "classnames";
import Image from "next/image";
import React from "react";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Avatar } from "@/components/avatar";
import NFT from "@/public/assets/images/NFT.png";
import NFT2 from "@/public/assets/images/NFT2.png";
import NFT3 from "@/public/assets/images/NFT3.png";
import { IconArrowTopRight } from "@/public/assets/svgs/IconArrowTopRight";

const Images = [NFT, NFT2, NFT3];

export default function SwiperJS() {
  return (
    <div className="h-[] w-[600px]">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        defaultValue={2}
        loop={true}
        autoplay={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 400,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }}
        navigation={false}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
      >
        {Images.map((el, index) => (
          <SwiperSlide key={index}>
            {({ isActive, isVisible }) => (
              <div
                className={classnames({
                  "rounded-3xl w-[400px]": true,
                  "opacity-10": !isActive || !isVisible,
                })}
              >
                <div className="relative rounded-3xl">
                  <div className="absolute top-[20px] left-3 bg-white/[0.22] text-white text-base p-[10px] rounded-lg">
                    24,000 NFTs
                  </div>
                  <div className="absolute top-[20px] right-2">
                    <IconArrowTopRight />
                  </div>

                  <Image
                    src={el}
                    alt=""
                    className="rounded-t-3xl"
                    width={400}
                    height={340}
                  />
                </div>
                <div className="bg-secondary p-[40px] rounded-b-3xl flex items-center">
                  <Avatar />
                  <div className="ml-5">
                    <div className="font-semibold text-xl">
                      Microticks Production
                    </div>
                    <div className="font-normal text-base">@microticks</div>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
