import React from "react";
import styles from "../../styles/Products/Filters.module.css";
const Filters = ({ className }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.category}>
        <h1>Category</h1>
        <hr align="left" />
        <div>
          <ul>
            <li className={styles.active}>Historical</li>
            <li>Abstract</li>
            <li>Landscape</li>
            <li>Oil Painting</li>
            <li>Portrait</li>
          </ul>
        </div>
      </div>
      <div className={styles.category}>
        <h1>Filter: Price</h1>
        <hr align="left" />
        <div>
          <ul>
            <li className={styles.active}>{">"} 10-15</li>
            <li>{">"} 15-30</li>
            <li>{">"} 30-100</li>
            <li>{">"} 100-500</li>
            <li>{">"} 500-1000</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filters;
