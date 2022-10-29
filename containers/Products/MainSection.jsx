import React, { useState } from "react";
import TagsGallery from "../../components/TagsGallery";
import styles from "../../styles/Products/MainSection.module.css";
import Filters from "./Filters";
const MainSection = () => {
  const [toggle, setToggle] = useState(false);
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
      <div className={styles.filter_container}>
        <button
          className={styles.filter_toggle}
          onClick={() => setToggle((prev) => !prev)}
        >
          {">"} Filters
        </button>
        {toggle && <Filters />}
      </div>
      <TagsGallery />
    </div>
  );
};

export default MainSection;
