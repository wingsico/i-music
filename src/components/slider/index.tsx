import type { AutoplayOptions } from "swiper/types/components/autoplay";
import React from "react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ActiveBulletWrapper } from "./style";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([Pagination, Autoplay]);

export interface IImageUrl {
  imageUrl: string;
}

interface ISliderProps {
  urlList: IImageUrl[];
  loop?: boolean;
  autoplay?: boolean;
  delay?: number;
  className?: string;
}

function Slider(props: ISliderProps) {
  const {
    urlList,
    className,
    loop = true,
    autoplay = true,
    delay = 2000,
  } = props;

  const autoplayConfig: AutoplayOptions | boolean = autoplay
    ? {
        delay,
        disableOnInteraction: false,
      }
    : false;

  return (
    <ActiveBulletWrapper>
      <Swiper
        className={className}
        loop={loop}
        pagination={{ clickable: true }}
        autoplay={autoplayConfig}
      >
        {urlList.map(({ imageUrl }, index) => (
          <SwiperSlide key={index}>
            <img src={imageUrl} width="100%" height="100%" alt="推荐" />
          </SwiperSlide>
        ))}
      </Swiper>
    </ActiveBulletWrapper>
  );
}

export default React.memo(Slider);
