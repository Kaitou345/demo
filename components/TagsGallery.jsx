import React from "react";
import Post from "./Post";
import styles from "../styles/Home/Gallery.module.css";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { BDT, USD } from "../constants/currency";
import { imageApi } from "../api/api";

const TagsGallery = ({ posts }) => {
  const { currency } = useSelector((state) => state.region);
  return (
    <div className={styles.container}>
      {posts.map((post, i) => (
        <Post
          src={post.attributes.art.data.attributes.url}
          desc="nice"
          id={post.id}
          key={post.id}
          title={post.attributes.title}
          price={
            currency === USD
              ? `$ ${post.attributes.usd_price}`
              : `৳ ${post.attributes.bdt_price}`
          }
          style={{
            margin: "2rem",
          }}
        />
      ))}
    </div>
  );
};

export default TagsGallery;
