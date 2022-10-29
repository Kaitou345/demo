import { useRouter } from "next/router";
import React from "react";
import Description from "../../containers/Product/Description";
import TopSection from "../../containers/Product/TopSection";
import styles from "../../styles/Product/Index.module.css";
import Related from "../../containers/Product/Related";
const Product = () => {
  const { id } = useRouter().query;
  return (
    <div className={styles.container}>
      <TopSection />
      <Description />
      <Related />
    </div>
  );
};

export default Product;
