import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <p className={style.creator} href="">
        Minden jog fenntartva © metanoiaterapia.hu | 2023 A weboldalt tervezte és készítette : <a href="https://studiobromo.hu/"> Studio Bromo</a>
      </p>
    </footer>
  );
};

export default Footer;
