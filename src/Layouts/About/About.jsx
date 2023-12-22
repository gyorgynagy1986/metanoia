import React from "react";
import style from "./About.module.css";
import { section } from "@/app/font";
import { about } from "@/data/data";
import Image from "next/image";
import photoLeft from "../../../public/assets/left.svg";
import photoRight from "../../../public/assets/right.svg";
import photoUp from "../../../public/assets/up.svg";
import photoDown from "../../../public/assets/down.svg"
import kitti from "../../../public/assets/about/kitti.png"

const About = () => {
  return (
    <section id="about">
      <div className={style.container}>
        <h2 className={section.className}>{about.h2}</h2>
        <div className={style.photoContainer}>
          <div className={style.flower}>
            {" "}
            <Image className={style.desktoUp} alt="flower" src={photoUp} />
            <Image className={style.desktopF} alt="flower" src={photoLeft} />
          </div>
          <div className={style.circle}>
            <Image width={400} height={400} alt="kitti" src={kitti}/>
          </div>
          <div className={style.flower}>
            {" "}
            <Image className={style.desktoDown} alt="flower" src={photoDown} />

            <Image className={style.desktopF} alt="flower" src={photoRight} />
          </div>{" "}
        </div>
        <div className={style.textContainer}>
          <p>{about.text}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
