import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Home/Hero.module.css";
import HeroImg from "../../public/hero_img.png";

const Hero = ({ info }) => {
  return (
    <div className={styles.container}>
      <div className={styles.hero_text_container}>
        <div className={styles.hero_text}>
          <p>{info.HeroTop}</p>
          <h1>{info.HeroWriting}</h1>
          <p>{info.HeroBottom}</p>
          <Link href="/gallery">
            <button className={styles.shop_button}>Shop now</button>
          </Link>
        </div>
      </div>
      <div className={styles.hero_img}>
        {/* <img src="/hero_img.png" alt="Flowers" /> */}
        <Image
          src="/hero_img.png"
          layout="fill"
          objectFit="cover"
          priority
          alt="hero image"
        />
        <img src={HeroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
