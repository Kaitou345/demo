import React from "react";
import Post from "./Post";
import styles from "../styles/Home/Gallery.module.css";
import Link from "next/link";
import Image from "next/image";

const TagsGallery = () => {
  return (
    <div className={styles.container}>
      <Post
        imgSrc={"/art.png"}
        desc="nice"
        id={1}
        title="Hummingbird"
        price="$12.99"
        style={{
          margin: "2rem",
        }}
      />
      <Post
        imgSrc={"/art2.png"}
        desc="nice"
        id={1}
        title="Hummingbird"
        price="$12.99"
        style={{
          margin: "2rem",
        }}
      />
      <Post
        imgSrc={"/art3.png"}
        desc="nice"
        id={1}
        title="Hummingbird"
        price="$12.99"
        style={{
          margin: "2rem",
        }}
      />
      <Post
        imgSrc={"/art4.png"}
        desc="nice"
        id={1}
        title="Hummingbird"
        price="$12.99"
        style={{
          margin: "2rem",
        }}
      />
      <Post
        imgSrc={"/art5.png"}
        desc="nice"
        id={1}
        title="Hummingbird"
        price="$12.99"
        style={{
          margin: "2rem",
        }}
      />
      <Post
        imgSrc={"/art6.png"}
        desc="nice"
        id={1}
        title="Hummingbird"
        price="$12.99"
        style={{
          margin: "2rem",
        }}
      />
    </div>
  );
};

export default TagsGallery;
