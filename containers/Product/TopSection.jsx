import Image from "next/image";
import React from "react";
import styles from "../../styles/Product/TopSection.module.css";

const TopSection = ({
  title,
  price,
  category,
  available,
  imgSrc,
  description,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={imgSrc} layout="fill" objectFit="cover" />
      </div>
      <div className={styles.desc}>
        <h2>{title}</h2>
        <div className={styles.property}>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.properties}>
          <div className={styles.property}>
            <span className={styles.key}>Price : </span>
            <span className={styles.value}> {price} </span>
          </div>
          <div className={styles.property}>
            <span className={styles.key}>Type : </span>
            <span className={styles.value}>{category}</span>
          </div>
          <div className={styles.property}>
            <span className={styles.value}>Availability :</span>
            <span
              className={styles.key}
              style={{ color: "rgba(251, 192, 135, 1)" }}
            >
              {available ? "IN STOCK" : "SOLD"}
            </span>
          </div>
        </div>
        <button>Pursue</button>
      </div>
    </div>
  );
};

export default TopSection;
