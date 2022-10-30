import React from "react";
import Post from "./Post";
import styles from "../styles/Home/Gallery.module.css";
import Link from "next/link";
import Image from "next/image";

const TagsGallery = () => {
  return (
    <div className={styles.container}>
      <Post
        src={"/art.png"}
        desc="nice"
        id={1}
        title="Hummingbird"
        price="$12.99"
        style={{
          margin: "2rem",
        }}
      />
      <Post
        src={"/art2.png"}
        desc="nice"
        id={1}
        title="Hummingbird"
        price="$12.99"
        style={{
          margin: "2rem",
        }}
      />
      <Post
        src={"/art3.png"}
        desc="nice"
        id={1}
        title="Hummingbird"
        price="$12.99"
        style={{
          margin: "2rem",
        }}
      />
      <Post
        src={"/art4.png"}
        desc="nice"
        id={1}
        title="Hummingbird"
        price="$12.99"
        style={{
          margin: "2rem",
        }}
      />
      <Post
        src={"/art5.png"}
        desc="nice"
        id={1}
        title="Hummingbird"
        price="$12.99"
        style={{
          margin: "2rem",
        }}
      />
      <Post
        src={"/art6.png"}
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
