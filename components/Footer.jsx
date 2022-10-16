import React from "react";
import styles from "../styles/Home/Footer.module.css";
import Logo from "./Logo";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitter, BsVimeo, BsYoutube } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <div className={styles.footer_upper_left}>
          <Link href="/">
            <a className={styles.footer_link}>Home</a>
          </Link>
          <Link href="/products">
            <a className={styles.footer_link}>Product</a>
          </Link>
          <Link href="/about">
            <a className={styles.footer_link}>About us</a>
          </Link>
          <Link href="/contact">
            <a className={styles.footer_link}>Contact us</a>
          </Link>
        </div>
        <div className={styles.social_links}>
          <a href="">
            <FaFacebookSquare />
          </a>
          <a href="">
            <BsTwitter />
          </a>
          <a href="">
            <BsVimeo />
          </a>
          <a href="">
            <BsYoutube />
          </a>
        </div>
      </div>
      <div className={styles.border} />
      <div className={styles.lower}>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} ZOOEGALLERY. All rights reserved.
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
