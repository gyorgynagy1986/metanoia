"use client";

import Slider from "react-slick";
import style from "@/components/Slider/Review.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { reviews } from "@/data/data";

const SliderR = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 1500,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={style.container}>
      <Slider {...settings}>
        {reviews.map((item, index) => (
          <div key={index} className={style.reviewContainer}>
            <p>{item.text}</p>
            <span>{item.name}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderR;
