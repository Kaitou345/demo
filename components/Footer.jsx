import React from "react";
import styles from "../styles/Home/Footer.module.css";
import Logo from "./Logo";
import { FaFacebookSquare } from "react-icons/fa";
import { BsYoutube, BsPinterest } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import Link from "next/link";
import {
  facebookLink,
  instagramLink,
  pinterestLink,
  youtubeLink,
} from "../constants/ social_links";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <div className={styles.footer_upper_left}>
          <Link href="/">
            <a className={styles.footer_link}>Home</a>
          </Link>

          <Link href="/about">
            <a className={styles.footer_link}>About</a>
          </Link>
          <Link href="/products">
            <a className={styles.footer_link}>Product</a>
          </Link>
          <Link href="/contact">
            <a className={styles.footer_link}>Contact me</a>
          </Link>
        </div>
        <div className={styles.social_links}>
          <a href={pinterestLink} target="_blank" rel="noreferrer">
            <BsPinterest />
          </a>
          <a href={instagramLink} target="_blank" rel="noreferrer">
            <RiInstagramFill />
          </a>
          <a href={facebookLink} target="_blank" rel="noreferrer">
            <FaFacebookSquare />
          </a>
          <a href={youtubeLink} target="_blank" rel="noreferrer">
            <BsYoutube />
          </a>
        </div>
      </div>
      <div className={styles.border} />
      <div className={styles.lower}>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} ZOEEGALLERY. All rights reserved.
        </div>
        <div>
          <Logo />
        </div>
        <div className={`${styles.copyright} ${styles.policy_links}`}>
          <a href="">Terms of Service</a>
          <a href="">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
