import Link from "next/link";
import React from "react";
import styles from "../styles/Post.module.css";
import Image from "next/image";

const Post = ({ imgSrc, title, price, desc, id, style }) => {
  return (
    <Link href={`/products/${id}`}>
      <div className={styles.container} style={style}>
        <div className={styles.art_container}>
          <div className={styles.art}>
            <Image src={imgSrc} alt={desc} layout="fill" objectFit="cover" />
          </div>
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
