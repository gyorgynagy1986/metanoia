import { React, useState } from "react";
import style from "./Contact.module.css";
import ButtonSpinner from "@/components/UI/ButtonSpinner";
import { section } from "@/app/font";

const Formhandler = () => {
  const [buttonSpinner, setButtonSpinner] = useState(true);
  const [buttonText, setButtonText] = useState("Üzenet küldése");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonSpinner(false);
    try {
      await fetch("https://formsubmit.co/ajax/hello@metanoiaterapia.hu", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ ...formData }),
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setButtonSpinner(true);
      setButtonText("Üzenet elküldve : ) ");
    } catch (error) {
      console.error("Error sending email:", error);
      setButtonSpinner(true);
      setButtonText("Valami hiba történt");
    }
  };

  const buttonTrue = false;

  return (
    <form onSubmit={handleSubmit}>
      <label className={style.lable}>
        Név:
        <input
          className={section.className}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label className={style.lable}>
        Email:
        <input
          className={section.className}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label className={style.lable}>
        Üzenet:
        <textarea
          className={section.className}
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      {buttonSpinner ? (
        <button className={style.button} type="submit">
          {buttonText}
        </button>
      ) : (
        <ButtonSpinner />
      )}
    </form>
  );
};

export default Formhandler;
