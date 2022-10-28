import React from "react";
import TagsGallery from "../../components/TagsGallery";
import styles from "../../styles/Products/MainSection.module.css";
const MainSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Products</h1>
        <div>
          <span className={styles.sort_heading}>Sort By&nbsp;:</span>
          <select name="" id="">
            <option value="trending">Trending</option>
            <option value="trending">Trending</option>
            <option value="trending">Trending</option>
          </select>
        </div>
      </div>
      <TagsGallery />
    </div>
  );
};

export default MainSection;
