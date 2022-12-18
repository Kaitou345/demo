import React from "react";
import Heading from "../containers/About/Heading";
import styles from "../styles/About/index.module.css";
import Head from "next/head";
import { siteInfoQuery } from "../api/queries";
import { api, baseUrl } from "../api/api";

const about = ({ info }) => {
  return (
    <>
      <Head>
        <title>ZoeeGallery</title>
        <meta name="description" content="Learn about Zoee's background" />
        <meta
          name="keywords"
          content="Arts, Zoee, Fine Arts, Water Colors, Oil Painting, Abstract, Abstract Art"
        />
        <meta name="author" content="Zoee" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Heading info={info} />
      </div>
    </>
  );
};

export default about;

export async function getServerSideProps(ctx) {
  const siteInfo = await fetch(`${baseUrl}${siteInfoQuery}`);
  const parsedInfo = await siteInfo.json();
  const info = await parsedInfo.data;

  return {
    props: { info: info.attributes },
  };
}
