import React from "react";
import style from "./Review.module.css";
import { section } from "@/app/font";
import { reviews } from "@/data/data";
import Review from "@/components/Slider/Review"
import Image from "next/image";
import right from "../../../public/assets/review_left.svg"
import left from "../../../public/assets/review_right.svg"
import photoUp from "../../../public/assets/slideTop.svg";
import photoDown from "../../../public/assets/slideBottom.svg"

const ReviewSlider = () => {
  return (
    <section id="review">
      <div className={style.container}>
        <h2 className={section.className}>Vélemények</h2>
        <div className={style.sliderContainer}>
            <Image className={style.desktopF} alt="left" src={left}/>
            <Image className={style.desktoUp} alt="flower" src={photoUp} />
            <Review  />
            <Image className={style.desktopF} alt="right" src={right}/>
            <Image className={style.desktoDown} alt="flower" src={photoDown} />
        </div>
      </div>
    </section>
  );
};

export default ReviewSlider;
