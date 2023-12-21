"use client";

import React, { useState, useEffect } from "react";
import style from "./PhotoGallery.module.css";
import Image from "next/image";
import left from "../../../public/assets/icons/left.svg";
import right from "../../../public/assets/icons/right.svg";

import photo from "../../../public/assets/gallery/photos/1.jpg";
import photo1 from "../../../public/assets/gallery/photos/2.jpg";
import photo2 from "../../../public/assets/gallery/photos/3.jpg";
import photo3 from "../../../public/assets/gallery/photos/4.jpg";
import photo4 from "../../../public/assets/gallery/photos/5.jpg";
import photo5 from "../../../public/assets/gallery/photos/6.jpg";
import photo6 from "../../../public/assets/gallery/photos/7.jpg";
import photo7 from "../../../public/assets/gallery/photos/8.jpg";

import galleryCloseIcon from "../../../public/assets/icons/close.svg";

const PhotoGallery = ({ galleryClose, clickedItem }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(clickedItem - 1);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);

  console.log(touchStartX)

  const photos = [
    {
      id: 1,
      title: "Photo 1",
      imageUrl: photo,
    },
    {
      id: 2,
      title: "Photo 2",
      imageUrl: photo1,
    },
    {
      id: 3,
      title: "Photo 3",
      imageUrl: photo2,
    },
    {
      id: 4,
      title: "Photo 4",
      imageUrl: photo3,
    },
    {
      id: 5,
      title: "Photo 5",
      imageUrl: photo4,
    },
    {
      id: 6,
      title: "Photo 6",
      imageUrl: photo5,
    },
    {
      id: 7,
      title: "Photo 7",
      imageUrl: photo6,
    },
    {
      id: 8,
      title: "Photo 8",
      imageUrl: photo7,
    },
  ];

  const currentPhoto = photos[currentPhotoIndex];

  const handleNextPhoto = () => {
    if (currentPhotoIndex < photos.length - 1 && imageLoaded) {
      setCurrentPhotoIndex((prevIndex) => prevIndex + 1);
      setImageLoaded(false);
    } else if (imageLoaded) {
      setCurrentPhotoIndex(0);
      setImageLoaded(false);
    }
  };

  const handlePrevPhoto = () => {
    if (currentPhotoIndex > 0 && imageLoaded) {
      setCurrentPhotoIndex((prevIndex) => prevIndex - 1);
      setImageLoaded(false);
    } else if (imageLoaded) {
      setCurrentPhotoIndex(photos.length - 1);
      setImageLoaded(false);
    }
  };

  useEffect(() => {
    // Update the imageLoaded state when the photo changes
    setImageLoaded(false);
  }, [currentPhotoIndex]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const touchDiffX = touchEndX - touchStartX;

    if (touchDiffX > 50) {
      handlePrevPhoto();
    } else if (touchDiffX < -50) {
      handleNextPhoto();
    }
  };

  return (
    <>
      <div className={style.container}>
        <div
          onClick={galleryClose}
          className={style.layerToCloseTheGallery}
        ></div>
        <div
          className={style.containerImage}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <Image
            className={style.galleryClose}
            onClick={galleryClose}
            src={galleryCloseIcon}
            alt="bezár gomb"
          />

          {imageLoaded ? (
            <Image
              src={currentPhoto.imageUrl}
              alt={currentPhoto.title}
              onLoad={handleImageLoad}
            />
          ) : (
            <Image
              src={currentPhoto.imageUrl}
              alt={currentPhoto.title}
              style={{ filter: "blur(10px)" }}
              onLoad={handleImageLoad}
            />
          )}

          <div className={style.clickHandelerContainer}>
            <Image
              width={15}
              height={15}
              onClick={handlePrevPhoto}
              alt="képgaléria gomb"
              src={left}
            ></Image>
            <p className={style.photoCounter}>
              {currentPhoto.id}/{photos.length}
            </p>
            <Image
              width={15}
              height={15}
              onClick={handleNextPhoto}
              alt="képgaléria gomb"
              src={right}
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoGallery;
