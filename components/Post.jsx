import Link from "next/link";
import React from "react";
import styles from "../styles/Post.module.css";

const Post = ({ imgSrc, title, price, desc, id, style }) => {
  return (
    <Link href="/">
      <div className={styles.container} style={style}>
        <div className={styles.art_container}>
          <img className={styles.art} src={imgSrc} alt={desc} />
        </div>
        <div className={styles.sub_container}>
          <p className={styles.subtitle}>{title}</p>
          <span className={styles.price}>{price}</span>
        </div>
      </div>
    </Link>
  );
};

export default Post;
