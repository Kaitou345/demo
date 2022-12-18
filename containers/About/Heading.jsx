import Image from "next/image";
import React from "react";
import styles from "../../styles/About/Heading.module.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Heading = ({ info }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.title}>
          Zoee <br /> Gallery
        </h1>
        <div className={styles.subtitle}>
          <p>{info.ArtistType}</p>
          <p>{info.Profession}</p>
        </div>
      </div>
      <div className={styles.mid}>
        <div className={styles.image}>
          <Image src="/art.png" layout="fill" alt="art-piece" />
        </div>
        <div className={styles.socials}>
          <div className={styles.social}>
            <FaInstagram className={`${styles.icon} ${styles.insta}`} />
            <div>
              <h2>{info.InstagramLikesCount}</h2>
              <p>Likes</p>
            </div>
          </div>
          <div className={styles.social}>
            <FaFacebookF className={styles.icon} />
            <div>
              <h2>{info.FacebookLikesCount}</h2>
              <p>Likes</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.desc}>
        <div className={styles.margin}></div>
        <p>{info.AboutPageWriting}</p>
      </div>
    </div>
  );
};

export default Heading;
