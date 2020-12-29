import React from 'react';
import Slider from '@/components/slider';

interface Props {}

function Recommend(props: Props) {

  const bannerUrlList = new Array(4).fill("").map(() => ({ imageUrl: "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg"}));


  return (
    <>
      <Slider urlList={bannerUrlList} />
    </>
  )
}

export default React.memo(Recommend);