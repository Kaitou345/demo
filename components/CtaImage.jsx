import React from "react";
import styles from "../styles/Home/CtaImage.module.css";
const CtaImage = ({ imgSrc }) => {
  return (
    <div className={styles.container}>
      <div>
        <img src={imgSrc} alt="" />
      </div>
      <p className={styles.subtext}>Oil paint</p>
    </div>
  );
};

export default CtaImage;
