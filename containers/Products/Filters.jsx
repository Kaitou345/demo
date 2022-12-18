import React from "react";
import styles from "../../styles/Products/Filters.module.css";
import {
  Historical,
  Landscape,
  Abstract,
  OilPainting,
  Portrait,
  All,
} from "../../constants/categories";
import { useSelector } from "react-redux";

const usd_ranges = ["$5 - $10", "$10 - $20", "$20 - $40", "$40 - $50"];

const Filters = ({ className, category, setCategory, setPriceRange }) => {
  const { currency } = useSelector((state) => state.region);

  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.category}>
        <h1>Category</h1>
        <hr align="left" />
        <div>
          <ul>
            <li
              onClick={(e) => setCategory(All)}
              className={category === All ? styles.active : ""}
            >
              All
            </li>
            <li
              onClick={(e) => setCategory(Historical)}
              className={category === Historical ? styles.active : ""}
            >
              Historical
            </li>
            <li
              onClick={(e) => setCategory(Abstract)}
              className={category === Abstract ? styles.active : ""}
            >
              Abstract
            </li>
            <li
              onClick={(e) => setCategory(Landscape)}
              className={category === Landscape ? styles.active : ""}
            >
              Landscape
            </li>
            <li
              onClick={(e) => setCategory(OilPainting)}
              className={category === OilPainting ? styles.active : ""}
            >
              Oil Painting
            </li>
            <li
              onClick={(e) => setCategory(Portrait)}
              className={category === Portrait ? styles.active : ""}
            >
              Portrait
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.category}>
        <h1>Price {`(${currency})`} </h1>
        <hr align="left" />
        <div>
          {/* <ul>
            <li className={styles.active}>{">"} All</li>
            <li>{">"} 10-15</li>
            <li>{">"} 15-30</li>
            <li>{">"} 30-100</li>
            <li>{">"} 100-500</li>
            <li>{">"} 500-1000</li>
          </ul> */}
          <div className={styles.price_range}>
            <label htmlFor="min">Start</label>
            <input
              type="number"
              name="min"
              id=""
              min={0}
              defaultValue={0}
              onChange={(e) =>
                setPriceRange((prev) => ({ ...prev, min: +e.target.value }))
              }
            />
          </div>

          <div className={styles.price_range}>
            <label htmlFor="max">Stop</label>
            <input
              type="number"
              name="max"
              id=""
              min={0}
              defaultValue={0}
              onChange={(e) =>
                setPriceRange((prev) => ({ ...prev, max: +e.target.value }))
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
