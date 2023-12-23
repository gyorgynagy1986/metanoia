"use client"

import React from "react";
import style from "./MobileMenu.module.css";
import MobileMenuItem from "./MobileMenuItem";
import { IoCloseSharp } from "react-icons/io5";

const MobileMenu = ({ mobileClose }) => {

  return (
    <>
      <div className={style.mobileMenu}>
        <div className={`${style.mobileMenuContainer} ${style.slidefwdleft}`}>
          <div className={style.clsoeContainer}>
            <div className={style.languageChangeContainer}>
              {" "}
            </div>{" "}
            <IoCloseSharp onClick={mobileClose} className={style.mobileClose} />
          </div>
          <ul className={style.mobileMenuUl}>
            <MobileMenuItem mobileClose={mobileClose} />
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;