import Image from "next/image";
import Card from "../card/card";
import style from "./hero.module.css";

import logo from "/public/Img/Logo.png";


const Hero_sec = () => {
  return (
    <>
      <div className={style.hero}>
        <Image className={style.logo} src={logo} alt="Picture" />
        <Card />
      </div>
    </>
  );
};
export default Hero_sec;
