import React from "react";
import TagsGallery from "../../components/TagsGallery";
import styles from "../../styles/Product/Related.module.css";

const Related = ({ posts }) => {
  return (
    <div className={styles.container}>
      <h1>Related Products</h1>
      <TagsGallery posts={posts} />
    </div>
  );
};

export default Related;
