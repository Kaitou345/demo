import React, { useEffect, useState } from "react";
import Filters from "../../containers/Products/Filters";
import MainSection from "../../containers/Products/MainSection";
import styles from "../../styles/Products/Index.module.css";
import { api, baseUrl } from "../../api/api";
import { All } from "../../constants/categories";
import { productListingQuery } from "../../api/queries";
import Head from "next/head";
import { useSelector } from "react-redux";
import { BDT, USD } from "../../constants/currency";

const products = ({ posts }) => {
  const [postsWithFilter, setPostsWithFilter] = useState(posts);
  const [category, setCategory] = useState(All);
  const [tag, setTag] = useState("");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });
  const { currency } = useSelector((state) => state.region);

  useEffect(() => {
    if (category === All) {
      setPostsWithFilter(posts);
      return;
    }
    const newPosts = posts.filter(
      (post) => post.attributes.category === category
    );
    setPostsWithFilter(newPosts);
  }, [category]);

  useEffect(() => {
    if (tag === "latest") {
      setPostsWithFilter((prev) => prev.slice().sort((a, b) => b.id - a.id));
    } else if (tag === "trending") {
      setPostsWithFilter((prev) =>
        prev.slice().sort((a, b) => (a.attributes.trending ? -1 : 1))
      );
    } else if (tag === "featured") {
      setPostsWithFilter((prev) =>
        prev.slice().sort((a, b) => (a.attributes.featured ? -1 : 1))
      );
    }
  }, [tag]);

  useEffect(() => {
    console.log(priceRange);
  }, [priceRange]);

  function priceRangeFilter(posts) {
    if (priceRange.min === priceRange.max && priceRange.min === 0) return posts;

    if (currency === USD) {
      return posts.filter(
        (post) =>
          post.attributes.usd_price >= priceRange.min &&
          post.attributes.usd_price <= priceRange.max
      );
    } else if (currency === BDT) {
      return posts.filter(
        (post) =>
          post.attributes.bdt_price >= priceRange.min &&
          post.attributes.bdt_price <= priceRange.max
      );
    }
  }

  return (
    <>
      <Head>
        <title>Gallery</title>
        <meta
          name="description"
          content="Browse through my collection of paintings"
        />
        <meta
          name="keywords"
          content="Arts, Zoee, Fine Arts, Water Colors, Oil Painting, Abstract, Abstract Art"
        />
        <meta name="author" content="Zoee" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Filters
          category={category}
          setCategory={setCategory}
          className={styles.filter}
          setPriceRange={setPriceRange}
        />
        <MainSection
          posts={priceRangeFilter(postsWithFilter)}
          category={category}
          setCategory={setCategory}
          setTag={setTag}
          setPriceRange={setPriceRange}
        />
      </div>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const post = await fetch(`${baseUrl}${productListingQuery}`);

  const parsedPosts = await post.json();
  const data = parsedPosts.data;
  return {
    props: { posts: data },
  };
}

export default products;
