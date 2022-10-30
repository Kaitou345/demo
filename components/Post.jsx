import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/Post.module.css";
import Image from "next/image";
import { FaRegCopy } from "react-icons/fa";

const Post = ({ src, title, price, desc, id, style }) => {
  const [copied, setCopied] = useState(false);

  const copyId = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <Link href={`/products/${id}`}>
      <div className={styles.container} style={style}>
        <div className={styles.art_container}>
          <div className={styles.art}>
            <Image
              // loader={() => src}
              src={src}
              alt={desc}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className={styles.sub_container}>
          <p className={styles.subtitle}>{title}</p>
          <div
            data-content={copied ? "Copied!" : "Click to copy"}
            onClick={copyId}
            className={styles.id_container}
          >
            <span className={styles.id_span}>
              ID : <b>{id}</b>
            </span>
            <FaRegCopy className={styles.copy_icon} />
          </div>

          <span className={styles.price}>{price}</span>
        </div>
      </div>
    </Link>
  );
};

export default Post;
