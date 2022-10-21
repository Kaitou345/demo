import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Home/Hero.module.css";
import HeroImg from "../../public/hero_img.png";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero_text_container}>
        <div className={styles.hero_text}>
          <p>Lorem ipsem dolor amet.</p>
          <h1>
            Latest Painting <br /> Collection
          </h1>
          <p>Lorem ipsem dolor amet. Countascular adiscing lipot</p>
          <Link href="/products">
            <button className={styles.shop_button}>Shop now</button>
          </Link>
        </div>
      </div>
      <div className={styles.hero_img}>
        {/* <img src="/hero_img.png" alt="Flowers" /> */}
        <Image src="/hero_img.png" layout="fill" objectFit="cover" priority />
        <img src={HeroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
