import { useRouter } from "next/router";
import React from "react";
import Description from "../../containers/Product/Description";
import TopSection from "../../containers/Product/TopSection";
import styles from "../../styles/Product/Index.module.css";
import Related from "../../containers/Product/Related";
import { api, baseUrl, imageApi } from "../../api/api";
import { useSelector } from "react-redux";
import { BDT, USD } from "../../constants/currency";
import { productDetailsQuery, relatedPostQuery } from "../../api/queries";
import Head from "next/head";

const Product = ({ post, relatedPosts }) => {
  const { currency } = useSelector((state) => state.region);
  return (
    <>
      <Head>
        <title>{post.attributes.title}</title>
        <meta name="description" content={post.attributes.description} />
        <meta name="keywords" content={post.attributes.category} />
        <meta name="author" content="Zoee" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <TopSection
          title={post.attributes.title}
          price={
            currency === USD
              ? `$ ${post.attributes.usd_price}`
              : `৳ ${post.attributes.bdt_price}`
          }
          category={post.attributes.category}
          available={post.attributes.available}
          imgSrc={post.attributes.art.data.attributes.url}
          description={post.attributes.description}
        />
        <Related posts={relatedPosts} />
      </div>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const { params } = ctx;
  const { id } = params;

  const post = await fetch(`${baseUrl}${productDetailsQuery(id)}`);

  const parsedPosts = await post.json();
  const data = parsedPosts.data;

  const relatedPosts = await fetch(
    `${baseUrl}${relatedPostQuery(data.attributes.category)}`
  );

  const parsedRelated = await relatedPosts.json();
  const related = parsedRelated.data;

  return {
    props: { post: data, relatedPosts: related },
  };
}

export default Product;
