import React, { useEffect, useState } from "react";

interface IImageUrl {
  imageUrl: String;
}

interface ISliderProps {
  urlList: IImageUrl[];
}

function Slider(props: ISliderProps) {
  const { urlList } = props;

  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {

  }, [urlList.length, swiperInstance])

  return (
    <div />
  );
}


export default React.memo(Slider);