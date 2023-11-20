import React from "react";
import style from "./Nav.module.css";
import Logo from "../Logo/Logo";
import { navigation } from "@/data/data";
import { section } from "@/app/font";
import Link from "next/link";
import Image from "next/image";
import photo from '../../../public/assets/top-color.svg'

const Nav = () => {
  return (
    <nav>
    <Image className={style.color_top} alt="top color design pattern" src={photo} />
      <div className={style.container}>
        <Logo />
        <ul className={style.ul}>
          {navigation.map((item, index) => (
           <li> <Link href={item.href} className={section.className} key={index}>{item.title}</Link></li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
