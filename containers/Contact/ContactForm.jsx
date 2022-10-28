import React from "react";
import styles from "../../styles/Contact/ContactForm.module.css";
const ContactForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <p>Fill out the form and I will contact you soon.</p>
        <form action="" method="post">
          <input type="text" placeholder="Enter your full name*" />
          <input type="text" placeholder="Enter your Phone number*" />
          <input type="email" placeholder="Enter your e-mail*" />
          <textarea
            className={styles.text}
            type="text"
            placeholder="Type your message"
          />
          <button type="submit">Send a Request</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
