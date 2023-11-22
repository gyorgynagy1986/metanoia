import style from "./Contact.module.css";
import { section } from "@/app/font";
import { formDatas } from "@/data/data";

const FormDatas = () => {
  return (
    <>
      {" "}
      <h2 className={section.className}>Kapcsolat</h2>
      <p>{formDatas.text}</p>
      <div>
        <a className={style.email} href="">
          {formDatas.phone}
        </a>
        <p>{formDatas.text2}</p>
      </div>
      <div>
        <a className={style.email} href="">
          {formDatas.email}
        </a>
        <p>{formDatas.text3}</p>
      </div>
    </>
  );
};

export default FormDatas;
