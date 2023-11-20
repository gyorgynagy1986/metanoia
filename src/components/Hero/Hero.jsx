import React from "react";
import style from "./Hero.module.css";
import { hero } from "@/data/data";
import { section } from "@/app/font";

const Hero = () => {
  return (
    <div className={style.container}>
      <h1 className={`${section.className} ${style.h1}`}>{hero.h1}</h1>
      <h2 className={style.h2}>{hero.h1_}</h2>
    </div>
  );
};

export default Hero;
