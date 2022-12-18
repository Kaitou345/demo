import React from "react";
import styles from "../../styles/Contact/ContactInfo.module.css";
const ContactInfo = ({ info }) => {
  return (
    <div className={styles.container}>
      <div>
        <h1>Contact Us</h1>
        <p className={styles.subtitle}>
          Feel free to contact or visit my gallery
        </p>
      </div>
      <div className={styles.info}>
        <div className={styles.entry}>
          <span className={styles.title}>Address&nbsp;&nbsp;&nbsp;&nbsp;:</span>
          <p className={styles.address}>{info.Address}</p>
        </div>
        <div className={styles.entry}>
          <span className={styles.title}>Contacts&nbsp;&nbsp;:</span>
          <p className={styles.address}>
            {info.PhoneNumber} <br />
            {info.Email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
