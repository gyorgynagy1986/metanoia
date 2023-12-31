"use client"
import React from "react";
import style from "./Sections.module.css";
import { section } from "@/app/font";
import Image from "next/image";
import flower from "../../../public/assets/Isolation_Mode.svg";
import star from "../../../public/assets/Isolation_Mode-1.svg";
import useAos from "@/app/hooks/effect";

const Sections = ({
  styleMody,
  effectDirection,
  photo,
  h2,
  h3,
  text,
  h3_2,
  h3_3,
  list,
  list_2,
  time,
  time_2,
  price,
  price_2,
}) => {
  const createMarkup = (htmlContent) => {
    return { __html: htmlContent };
  };

   useAos({ duration: 1200 });


  return (



    <section data-aos={`fade`} className={`${style.container}  ${styleMody === "mhTisztito" ?  style.containermhTisztito : ''} ${styleMody === "noiKor" ?  style.containerNkor : ''} ${styleMody === "mh" ?  style.containerMh : ''}  ${styleMody === "ref" ? style.containerRef : ''} ${styleMody === "noi" ?  style.containerNoi : ''} ${styleMody === "ch" ? style.containerCh : ''}`}>

      {/*PHOTO CONTAINER*/}
      
      <div className={style.photoContainer}>
        <Image priority={styleMody === "th" ? true : false} className={style.img} alt="section photo" src={photo} />
      </div>

      {/*TEXT CONTAINER*/}
      
      <div className={style.textContainer}>
        
        {/*MAIN TITLE // PARENT : TEXT CONTAINER */}  
        
        <h2 className={`${section.className} ${style.h2}`}>{h2}</h2>
        {styleMody === "noiKor" &&  <span style={{fontSize:'18px', display:'block', marginTop:'10px'}}>Minden hónap első péntekén</span>}

        {/*SECONDARY TITLE CONTAINER // PARENT : TEXT CONTAINER  */}  
        
        <div className={style.titleContainer}>
          <Image alt="flower" src={flower} /> <h3 className={style.h3}>{h3}</h3>{" "}
        </div>
        
        {/*MAIN TEXT // PARENT : TEXT CONTAINER */}  
        
        <p className={style.p} dangerouslySetInnerHTML={createMarkup(text)} />
        
        {/*TEXT CONTAINER AT THE BOTTOM WITH LIST AND PRICE // PARENT : TEXT CONTAINER */} 
        
        <div className={style.textContainerBottom}>

          {/*LIST CONTAINER // PARENT : TEXT CONTAINER BOTTOM */}  

         {styleMody !== 'noi' && styleMody !== 'mh' && styleMody !== 'noiKor' ?  <div className={style.listcontainer}>
            <div className={style.titleContainer}>
              <Image alt="flower" src={flower} />{" "}
              <h3 className={style.h3}>{h3_2}</h3>{" "}
            </div>
            <ul>
              {list?.map((items, index) => (
                <li key={index} className={style.li}>
                  {items.title}
                </li>
              ))}
            </ul>
          </div> : ''}
          <div className={style.MianPriceContainer}>
            <div className={style.titleContainer}>
              <Image alt="flower" src={flower} />{" "}
              <h3 className={style.h3}>{h3_3}</h3>{" "}
            </div>
            <div className={style.priceContainer}>
             { styleMody === 'noi' || styleMody === 'mh' || styleMody === "noiKor" ? <Image alt="star" src={star} /> : ''}
            
            { styleMody !== 'mhTisztito' ?   <div>
                <p className={style.bottomTitle}>{time}</p>
                <p className={style.bottomPrice}>{price}</p>
              </div>
              : 
              <ul>
              {list_2?.map((items, index) => (
                <li key={index} className={style.li}>
                  {items.title}
                </li>
              ))}
            </ul>
              }
              { styleMody === 'noi' || styleMody === 'mh' || styleMody === "noiKor" ? <Image alt="star" src={star} /> : ''}
              <div>
               { styleMody !== 'noi' && styleMody !== 'mhTisztito' && styleMody !== 'mh' && styleMody !== "noiKor" ? <Image alt="star" src={star} /> : ''}
              </div>
              <div>
                <p className={style.bottomTitle}>{time_2}</p>
                <p className={style.bottomPrice}>{price_2}</p>
              </div>
            </div>
             
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sections;
