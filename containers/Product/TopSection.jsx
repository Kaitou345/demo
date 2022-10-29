import Image from "next/image";
import React from "react";
import styles from "../../styles/Product/TopSection.module.css";

const TopSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src="/art.png" layout="fill" />
      </div>
      <div className={styles.desc}>
        <h2>Multi-Color art on canvas</h2>
        <div className={styles.properties}>
          <div className={styles.property}>
            <span className={styles.key}>Price : </span>
            <span className={styles.value}>5 USD</span>
          </div>
          <div className={styles.property}>
            <span className={styles.key}>Type : </span>
            <span className={styles.value}>Color Art</span>
          </div>
          <div className={styles.property}>
            <span className={styles.value}>Availability :</span>
            <span
              className={styles.key}
              style={{ color: "rgba(251, 192, 135, 1)" }}
            >
              In Stock
            </span>
          </div>
        </div>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default TopSection;
