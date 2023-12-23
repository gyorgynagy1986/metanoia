"use client"

import { useState } from "react";
import React from "react";
import style from "./Gallery.module.css";
import { section } from "@/app/font";
import { gallery } from "@/data/data";
import Slider from "@/components/Slider/PhotoSlider"
import Image from "next/image";
import left from "../../../public/assets/galleryLeft.svg"
import right from "../../../public/assets/galleryRight.svg"
import PhotoGallery from '@/components/Gallery/PhotoGallery'
import photoUp from "../../../public/assets/slideTop.svg";
import photoDown from "../../../public/assets/slideBottom.svg"
import useAos from "@/app/hooks/effect";
const Gallery = () => {
  useAos({ duration: 1500 });


  const [galleryOpen, setGalleryOpen ] = useState(false);
  const [selectedImageId, setSelectedImageId] = useState(null);
  
  
  const openGallery = (id) => {
    setSelectedImageId(id);
    setGalleryOpen(true);
  };
  
  const closeGallery = () => {
    setSelectedImageId(null);
    setGalleryOpen(false);
  };


  return (
    <section id="gallery">
      <div data-aos="fade-up" className={style.container}>
        <h2 className={section.className}>{gallery.h2}</h2>
        <div className={style.sliderContainer}>
            <Image data-aos="fade-right" className={style.desktopF} alt="left" src={left}/>
            <Image  className={style.desktoUp} alt="flower" src={photoUp} />
            {!galleryOpen && <Slider photoGalleryHandler={openGallery} />}
            {galleryOpen && <PhotoGallery imageId={selectedImageId}  clickedItem={selectedImageId} galleryClose={closeGallery} /> }
            <Image data-aos="fade-left" className={style.desktopF} alt="right" src={right}/>
            <Image className={style.desktoDown} alt="flower" src={photoDown} />

        </div>
      </div>
    </section>
  );
};

export default Gallery;
