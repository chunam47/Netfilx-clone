import React from "react";
import FooterLinks from "../FooterLinks/FooterLinks";
import SocialLinks from "../SocialLinks/SocialLinks";

import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <footer>
        <SocialLinks className={styles.socialLinks} />
        <FooterLinks />
      </footer>
    </div>
  );
};

export default Footer;
