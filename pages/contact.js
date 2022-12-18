import React from "react";
import ContactForm from "../containers/Contact/ContactForm";
import ContactInfo from "../containers/Contact/ContactInfo";
import styles from "../styles/Contact/index.module.css";
import Head from "next/head";
import { api, baseUrl } from "../api/api";
import { siteInfoQuery } from "../api/queries";

const contact = ({ info }) => {
  return (
    <>
      <Head>
        <title>Contact me</title>
        <meta name="description" content="Get in touch with Zoee" />
        <meta
          name="keywords"
          content="Arts, Zoee, Fine Arts, Water Colors, Oil Painting, Abstract, Abstract Art"
        />
        <meta name="author" content="Zoee" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <ContactInfo info={info} />
        <ContactForm info={info} />
      </div>
    </>
  );
};

export default contact;

export async function getServerSideProps(ctx) {
  const siteInfo = await fetch(`${baseUrl}${siteInfoQuery}`);
  const parsedInfo = await siteInfo.json();
  const info = await parsedInfo.data;

  return {
    props: { info: info.attributes },
  };
}
