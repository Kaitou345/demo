import React, { useState } from "react";
import TagsGallery from "../../components/TagsGallery";
import styles from "../../styles/Home/Tags.module.css";

const Tags = () => {
  const [tag, setTag] = useState("featured");

  return (
    <div className={styles.container}>
      <div className="">
        <h2 className={styles.tagsText}>Trending Product</h2>
      </div>
      <div className={styles.selection_container}>
        <button
          className={
            tag === "featured"
              ? `${styles.selection_btn} ${styles.selected_btn}`
              : `${styles.selection_btn}`
          }
          onClick={() => setTag("featured")}
        >
          Featured
        </button>
        <button
          className={
            tag === "latest"
              ? `${styles.selection_btn} ${styles.selected_btn}`
              : `${styles.selection_btn}`
          }
          onClick={() => setTag("latest")}
        >
          Latest
        </button>
        <button
          className={
            tag === "trending"
              ? `${styles.selection_btn} ${styles.selected_btn}`
              : `${styles.selection_btn}`
          }
          onClick={() => setTag("trending")}
        >
          Trending
        </button>
      </div>
      <div className="">
        {tag === "featured" ? <TagsGallery /> : null}
        {tag === "latest" ? <TagsGallery /> : null}
        {tag === "trending" ? <TagsGallery /> : null}
      </div>
    </div>
  );
};

export default Tags;
