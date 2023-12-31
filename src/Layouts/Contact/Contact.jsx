"use client";

import style from "./Contact.module.css";
import bottom from "../../../public/assets/bottom_style.svg";
import Image from "next/image";
import Formhandler from "./Formhandler";
import FormDatas from "@/Layouts/Contact/FormDatas";
import useAos from "@/app/hooks/effect";

const Contact = () => {
  useAos({ duration: 1500 });
  return (
    <section id="contact" className={style.section}>
      <Image className={style.design} alt="design" src={bottom} />
      <div className={style.container}>
        <div className={style.textContainer}>
          <FormDatas />
        </div>
        <div  className={style.formContainer}>
          <Formhandler />
        </div>
      </div>
    </section>
  );
};

export default Contact;
