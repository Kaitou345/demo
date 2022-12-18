import Image from "next/image";
import React from "react";
import styles from "../../styles/Home/About.module.css";

const About = ({ info }) => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutImg_container}>
        {/* <img src="/about.png" alt="art-piece"  /> */}
        <div className={styles.aboutImg}>
          <Image
            src="/about.png"
            alt="art-piece"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles.about_text}>
        <h6>About</h6>
        <h1>ZOEEGALLERY</h1>
        <p>{info.HomeAboutSectionWriting}</p>
      </div>
    </div>
  );
};

export default About;
