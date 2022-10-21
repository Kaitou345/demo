import React from "react";
import styles from "../styles/Home/CtaImage.module.css";
import Image from "next/image";
const CtaImage = ({ imgSrc }) => {
  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        {/* <img src={imgSrc} alt="" /> */}
        <Image src={imgSrc} layout="fill" />
      </div>
      <p className={styles.subtext}>Oil paint</p>
    </div>
  );
};

export default CtaImage;
