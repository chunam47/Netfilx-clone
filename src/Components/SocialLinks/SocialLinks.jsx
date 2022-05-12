import React from "react";

import FacebookIcon from "./FacebookIcon";
import InstagramIcon from "./InstagramIcon";
import TwiterIcon from "./TwiterIcon";
import YoutubeIcon from "./YoutubeIcon";

import styles from "./SocialLinks.module.css";
const SocialLinks = () => {
  return (
    <div className={styles.socialLinks}>
      <a href="/" className={styles.iconLink}>
        <FacebookIcon />
      </a>
      <a href="/" className={styles.iconLink}>
        <InstagramIcon />
      </a>
      <a href="/" className={styles.iconLink}>
        <TwiterIcon />
      </a>
      <a href="/" className={styles.iconLink}>
        <YoutubeIcon />
      </a>
    </div>
  );
};

export default SocialLinks;
