"use client"

import style from "./MobileMenu.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {navigation } from '@/data/data'
import Logo from '@/components/Logo/Logo'

const MobileMenuItem = ({ mobileClose }) => {
  const pathname = usePathname()
 
  return (
    <>
    <Logo mobileLogoMaxWidth={'180px'} />
      {navigation.map((linkItem) => (
        <Link
          onClick={mobileClose}
          className={style.mobileMenuLink}
          href={linkItem.href}
          key={linkItem.id}
        >
          <li className={pathname === linkItem.href ? style.active : ""}>
            {linkItem.title}
          </li>
        </Link>
      ))}
    </>
  );
};

export default MobileMenuItem;