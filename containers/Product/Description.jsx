import React from "react";
import styles from "../../styles/Product/Description.module.css";

const Description = ({ description }) => {
  return (
    <div className={styles.container}>
      <h2>Description</h2>
      <hr align="center" />
      <p>{description}</p>
    </div>
  );
};

export default Description;
