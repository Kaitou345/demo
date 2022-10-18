import React from "react";
import styles from "../../styles/Home/About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutImg_container}>
        <img src="/about.png" alt="art-piece" className={styles.aboutImg} />
      </div>
      <div className={styles.about_text}>
        <h6>About</h6>
        <h1>ZOEEGALLERY</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
        </p>
      </div>
    </div>
  );
};

export default About;
