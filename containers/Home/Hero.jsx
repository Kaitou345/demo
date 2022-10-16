import React from "react";
import styles from "../../styles/Home/Hero.module.css";

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
          <button className={styles.shop_button}>Shop now</button>
        </div>
      </div>
      <div className={styles.hero_img}>
        <img src="/hero_img.png" alt="Flowers" />
      </div>
    </div>
  );
};

export default Hero;
