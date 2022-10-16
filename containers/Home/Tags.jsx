import React from "react";
import TagsGallery from "../../components/TagsGallery";
import styles from "../../styles/Home/Tags.module.css";

const Tags = () => {
  return (
    <div className={styles.container}>
      <div className="">
        <h2 className={styles.tagsText}>Trending Product</h2>
      </div>
      <div className={styles.selection_container}>
        <button className={`${styles.selection_btn} ${styles.selected_btn}`}>
          Featured
        </button>
        <button className={styles.selection_btn}>Latest</button>
        <button className={styles.selection_btn}>Trending</button>
      </div>
      <div className="">
        <TagsGallery />
      </div>
    </div>
  );
};

export default Tags;
