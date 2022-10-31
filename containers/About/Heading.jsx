import Image from "next/image";
import React from "react";
import styles from "../../styles/About/Heading.module.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
const Heading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.title}>
          Zoee <br /> Gallery
        </h1>
        <div className={styles.subtitle}>
          <p>Abstract painter.</p>
          <p>Art educator.</p>
        </div>
      </div>
      <div className={styles.mid}>
        <div className={styles.image}>
          <Image src="/art.png" layout="fill" />
        </div>
        <div className={styles.socials}>
          <div className={styles.social}>
            <FaInstagram className={`${styles.icon} ${styles.insta}`} />
            <div>
              <h2>1.8M+</h2>
              <p>Likes</p>
            </div>
          </div>
          <div className={styles.social}>
            <FaFacebookF className={styles.icon} />
            <div>
              <h2>1.8M+</h2>
              <p>Likes</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.desc}>
        <div className={styles.margin}></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut neque
          congue turpis urna. Aliquam tempus, nisl, nunc at malesuada morbi.
          Laoreet egestas malesuada sit viverra ultrices rutrum in. Est bibendum
          enim
        </p>
      </div>
    </div>
  );
};

export default Heading;
