"use client";

import Slider from "react-slick";
import style from "@/components/Slider/Review.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        <div className={style.reviewContainer}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc non est
            enim. Sed et justo nisi. Aliquam ultrices urna iaculis, sollicitudin
            risus quis, fermentum orci. Duis interdum sapien quam, quis
            efficitur turpis pretium in.Etiam elementum sollicitudin lectus, id
            laoreet dui tempor a.
          </p>
          <span>name</span>
        </div>
        
        <div className={style.reviewContainer}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc non est
            enim. Sed et justo nisi. Aliquam ultrices urna iaculis, sollicitudin
            risus quis, fermentum orci. Duis interdum sapien quam, quis
            efficitur turpis pretium in.Etiam elementum sollicitudin lectus, id
            laoreet dui tempor a.
          </p>
          <span>name</span>
        </div>
        <div className={style.reviewContainer}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc non est
            enim. Sed et justo nisi. Aliquam ultrices urna iaculis, sollicitudin
            risus quis, fermentum orci. Duis interdum sapien quam, quis
            efficitur turpis pretium in.Etiam elementum sollicitudin lectus, id
            laoreet dui tempor a.
          </p>
          <span>name</span>
        </div>
      </Slider>
    </div>
  );
};

export default SliderR;
