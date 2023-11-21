"use client";

import Slider from "react-slick";
import style from "@/components/Slider/Slider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styles from "./Slider.module.css";
import Gallery from "@/components/Gallery/Gallery";

import galleryItem from "../../../public/1.png";
import galleryItem2 from "../../../public/2.png";
import galleryItem3 from "../../../public/3.png";
import galleryItem4 from "../../../public/4.png";
import galleryItem5 from "../../../public/4.png";
import galleryItem6 from "../../../public/4.png";
import galleryItem7 from "../../../public/4.png";
import galleryItem8 from "../../../public/4.png";

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
        <div
          onDoubleClick={() => handleClick(photoGalleryCoverPhots[0].id)}
          className={styles.photo}
        >
          <Image alt="gallery" src={photoGalleryCoverPhots[0].url} />{" "}
        </div>
        <div
          onDoubleClick={() => handleClick(photoGalleryCoverPhots[1].id)}
          className={styles.photo}
        >
          <Image alt="gallery" src={photoGalleryCoverPhots[1].url} />{" "}
        </div>
        <div
          onDoubleClick={() => handleClick(photoGalleryCoverPhots[2].id)}
          className={styles.photo}
        >
          <Image alt="gallery" src={photoGalleryCoverPhots[2].url} />{" "}
        </div>
        <div
          onDoubleClick={() => handleClick(photoGalleryCoverPhots[3].id)}
          className={styles.photo}
        >
          <Image alt="gallery" src={photoGalleryCoverPhots[3].url} />{" "}
        </div>
        <div
          onDoubleClick={() => handleClick(photoGalleryCoverPhots[4].id)}
          className={styles.photo}
        >
          <Image alt="gallery" src={photoGalleryCoverPhots[4].url} />{" "}
        </div>
        <div
          onDoubleClick={() => handleClick(photoGalleryCoverPhots[4].id)}
          className={styles.photo}
        >
          <Image alt="gallery" src={photoGalleryCoverPhots[4].url} />{" "}
        </div>
      </Slider>
    </div>
  );
};

export default SliderR;
