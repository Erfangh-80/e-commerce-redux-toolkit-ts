import { FC } from "react";
// icons
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
// styles
import styles from "./Footer.module.css";

const Footer: FC = (): JSX.Element => {
  return (
    <footer className={styles.container}>
      <div className={styles.footerItem}>
        <h3>Links</h3>
        <p>About us</p>
        <p>Contact us</p>
        <p>Blog</p>
        <p>FAQ's</p>
      </div>
      <div className={styles.footerItem}>
        <h3>Policies</h3>
        <p>Terms & Conditions</p>
        <p>Cookies Policy</p>
        <p>Data Policy</p>
      </div>
      <div className={styles.footerItem}>
        <h3>About Shopping Hub</h3>
        <p>Company Info</p>
        <p>Branches</p>
        <p>Store</p>
      </div>
      <div className={styles.footerItem}>
        <h3>Contact</h3>
        <div>
          <BsFillTelephoneFill className={styles.icon} />
          <span>+678 004 5754</span>
        </div>
        <div>
          <HiOutlineMail className={styles.icon} />
          <span>info@shophub.com</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
