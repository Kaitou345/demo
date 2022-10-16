import React from "react";
import CtaImage from "../../components/CtaImage";
import styles from "../../styles/Home/CTA.module.css";

const CTA = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content_container}>
        <div>
          <p className={styles.text}>
            Our Latest Collection of <br />
            Original{" "}
            <span className={styles.highlight}>Artworks & Paintings</span>
          </p>
        </div>
        <div className={styles.img_container}>
          <div className={styles.img_row_1}>
            <CtaImage imgSrc="/oil_paint.png" />
            <CtaImage imgSrc="/oil_paint3.png" />
          </div>
          <div className={styles.img_row_2}>
            <CtaImage imgSrc="/oil_paint2.png" />
            <CtaImage imgSrc="/oil_paint4.png" />
          </div>
        </div>
      </div>
      <div className={styles.bg}>
        <div className={styles.bg_left}>
          <img src="/cta_left.svg" alt="" />
        </div>
        <div className={styles.bg_right}>
          {/* <img src="/cta_right.svg" alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default CTA;
