"use client";

import Slider from "react-slick";
import style from "@/components/Slider/Slider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styles from "./Slider.module.css";

import galleryItem from "../../../public/assets/gallery/covers/1.png";
import galleryItem2 from "../../../public/assets/gallery/covers/2.png";
import galleryItem3 from "../../../public/assets/gallery/covers/3.png";
import galleryItem4 from "../../../public/assets/gallery/covers/4.png";
import galleryItem5 from "../../../public/assets/gallery/covers/5.png";
import galleryItem6 from "../../../public/assets/gallery/covers/6.png";
import galleryItem7 from "../../../public/assets/gallery/covers/7.png";
import galleryItem8 from "../../../public/assets/gallery/covers/8.png";
import galleryItem9 from "../../../public/assets/gallery/covers/9.png";


const photoGalleryCoverPhots = [
  {
    id: 1,
    alt: "cover photos",
    url: galleryItem,
  },
  {
    id: 2,
    alt: "cover photos",
    url: galleryItem2,
  },
  {
    id: 3,
    alt: "cover photos",
    url: galleryItem3,
  },
  {
    id: 4,
    alt: "cover photos",
    url: galleryItem4,
  },
  {
    id: 5,
    alt: "cover photos",
    url: galleryItem5,
  },
  {
    id: 6,
    alt: "cover photos",
    url: galleryItem6,
  },
  {
    id: 7,
    alt: "cover photos",
    url: galleryItem7,
  },
  {
    id: 8,
    alt: "cover photos",
    url: galleryItem8,
  },
  {
    id: 9,
    alt: "cover photos",
    url: galleryItem9,
  },
];

const SliderR = ({ photoGalleryHandler }) => {
  const handleClick = (id) => {
    photoGalleryHandler(id);
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 1500,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 2,

    responsive: [
      {
        breakpoint: 1171,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 496,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 2,
          autoplay: false,
        },
      },
    ],
  };
  return (
    <div className={style.container}>
      <Slider {...settings}>
        {photoGalleryCoverPhots.map((item, index) => (
          <div key={index}
            onClick={() => handleClick(item.id)}
            className={styles.photo}
          >
            <Image priority alt="gallery" src={item.url} />{" "}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderR;
