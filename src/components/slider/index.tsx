import React, { useEffect, useState } from "react";
import Swiper, { Pagination } from 'swiper'
import { SliderContainer } from "./style";
import 'swiper/swiper-bundle.css'

Swiper.use([Pagination])

interface IImageUrl {
  imageUrl: string;
}

interface ISliderProps {
  urlList: IImageUrl[];
  loop?: boolean;
  autoplay?: boolean;
  delay?: number;
}

function Slider(props: ISliderProps) {
  const { urlList, loop = true, autoplay = true, delay = 3000 } = props;

  const [swiperInstance, setSwiperInstance] = useState<Swiper | null>(null);

  // 此处 effect 会执行两次
  // 因为在 effect 中修改了 swiperInstance
  useEffect(() => {
    if (urlList.length && !swiperInstance) {
      const swiper = new Swiper(".slider-container", {
        loop,
        autoplay: autoplay
          ? {
              delay,
              disableOnInteraction: false,
            }
          : false,
        pagination: {
          el: ".swiper-pagination",
        },
      });

      setSwiperInstance(swiper);
    }
  }, [urlList.length, swiperInstance, autoplay, loop, delay]);

  return (
    <SliderContainer>
      <div className="slider-container">
        <div className="swiper-wrapper">
          {urlList.map(({ imageUrl }, index) => (
            <div className="swiper-slide" key={index}>
              <div className="slider-nav">
                <img src={imageUrl} width="100%" height="100%" alt="推荐" />
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-pagination" />
      </div>
      <div className="before" />
    </SliderContainer>
  );
}

export default React.memo(Slider);
