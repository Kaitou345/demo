import React, { useState } from "react";
import TagsGallery from "../../components/TagsGallery";
import styles from "../../styles/Products/MainSection.module.css";
import Filters from "./Filters";

const MainSection = ({
  posts,
  category,
  setCategory,
  setTag,
  setPriceRange,
}) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Products</h1>
        <div>
          <span className={styles.sort_heading}>Sort By&nbsp;:</span>
          <select onChange={(e) => setTag(e.target.value)} name="" id="">
            <option value="" defaultChecked>
              ...
            </option>
            <option value="latest">Latest</option>

            <option value="trending">Trending</option>
            <option value="featured">Featured</option>
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
        {toggle && (
          <Filters
            category={category}
            setCategory={setCategory}
            setPriceRange={setPriceRange}
          />
        )}
      </div>
      <TagsGallery posts={posts} />
    </div>
  );
};

export default MainSection;
