import React from "react";
import ContactForm from "../containers/Contact/ContactForm";
import ContactInfo from "../containers/Contact/ContactInfo";
import styles from "../styles/Contact/index.module.css";

const contact = () => {
  return (
    <div className={styles.container}>
      <ContactInfo />
      <ContactForm />
      <div className={styles.bg}>
        <div className={styles.bg_left}>
          <img src="/cta_left.svg" alt="" />
        </div>
        <div className={styles.bg_right}>
          <img src="/cta_right.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default contact;
