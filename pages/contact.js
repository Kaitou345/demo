import React from "react";
import ContactForm from "../containers/Contact/ContactForm";
import ContactInfo from "../containers/Contact/ContactInfo";
import styles from "../styles/Contact/index.module.css";

const contact = () => {
  return (
    <div className={styles.container}>
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default contact;
