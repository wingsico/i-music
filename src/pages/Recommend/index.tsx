import React from "react";
import Slider, { IImageUrl } from "@/components/slider";
import { SliderContainer } from "./style";
import { nextInt } from "@/common/utils/random";
import RecommendList, { IRecommendItem } from "./components/list";

interface Props {}

function Recommend(props: Props) {
  const bannerList: IImageUrl[] = new Array(4).fill("").map(() => ({
    imageUrl:
      "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg",
  }));

  const recommendList: IRecommendItem[] = new Array(9).fill("").map((_, i) => {
    return {
      id: i + 1,
      picUrl:
        "https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg",
      playCount: nextInt(20000, 800000000),
      name: "那些花儿们",
    };
  });

  return (
    <>
      <SliderContainer>
        <Slider urlList={bannerList} className="slider-container" />
      </SliderContainer>
      <RecommendList data={recommendList} />
    </>
  );
}

export default React.memo(Recommend);
