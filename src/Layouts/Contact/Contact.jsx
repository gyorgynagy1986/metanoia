"use client";

import { React, useState } from "react";
import style from "./Contact.module.css";
import { section } from "@/app/font";
import bottom from "../../../public/assets/bottom_style.svg"
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Itt lehet a küldési logika (például egy API hívás vagy más feldolgozás)
    console.log("Űrlapadatok:", formData);
    // További logika hozzáadható, például üzenet megjelenítése a felhasználónak
  };

  return (
    <section id="contact" className={style.section}> 
     <Image className={style.design} alt="design" src={bottom} />
      <div className={style.container}>
        <div className={style.textContainer}>
          <h2 className={section.className}>Kapcsolat</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non
            est enim. Sed et justo nisi. Aliquam ultrices urna iaculis,
            sollicitudin risus quis, fermentum orci.{" "}
          </p>
          <div>
          <a className={style.email} href="">
            +36 30 492 1066
          </a>
          <p>
            Ha nem venném fel, ne haragujd, valószínűleg terápiát tartok.
            Visszahívlak!
          </p>
          </div>
          <div>
          <a className={style.email} href="">
          hello@metanoiaterapia.hu

          </a>
          <p>Írj e-mailt, és amint tudok, válaszolok!</p>{" "}
          </div>
        </div>
        <div className={style.formContainer}>
          <form onSubmit={handleSubmit}>
            <label className={style.lable}>
              Név:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <br />
            <label className={style.lable}>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <br />
            <label className={style.lable}>
              Üzenet:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </label>
            <br />
            <button className={style.button} type="submit">Üzenet küldése</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
