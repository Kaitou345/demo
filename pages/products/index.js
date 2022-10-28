import React from "react";
import Filters from "../../containers/Products/Filters";
import MainSection from "../../containers/Products/MainSection";
import styles from "../../styles/Products/Index.module.css";
const products = () => {
  return (
    <div className={styles.container}>
      <Filters />
      <MainSection />
    </div>
  );
};

export default products;
