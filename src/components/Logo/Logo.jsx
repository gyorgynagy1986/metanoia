import React from "react";
import style from "./Logo.module.css";
import Image from "next/image";
import photo from "../../../public/assets/newlogo.png";

const Logo = () => {
  return (
    <div>
      <Image className={style.logo} priority quality={100} alt="logo" src={photo} />
    </div>
  );
};

export default Logo;
