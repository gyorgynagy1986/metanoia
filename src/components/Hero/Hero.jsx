"use client"

import React from "react";
import style from "./Hero.module.css";
import { hero } from "@/data/data";
import { section } from "@/app/font";
import useAos from "@/app/hooks/effect";
const Hero = () => {
  useAos({ duration: 1500 });

  return (
    <section className={style.container}>
      <div className={style.contentContainer}>
        <h1 className={`${section.className} ${style.h1}`}>{hero.h1}</h1>
        <h2 data-aos="fade" className={style.h2}>{hero.h1_}</h2>
      </div>
    </section>
  );
};

export default Hero;
