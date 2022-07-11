import Image from "next/image";
import { ReactNode } from "react";
import logo from "../../public/Logo.png";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
        <li>Made with ❤️ by G-Team &copy; {new Date().getFullYear()}</li>
        <li>
          <ul className={styles.nestedList}>
            <li>Layanan Kami</li>
            <li>Berita</li>
            <li>Artikel</li>
          </ul>
        </li>
        <li>
          <div className={styles.logo}>
            <Image src={logo} alt="logo" width="60" height="40" />
            <p>Masjid Al-Ikhlas Bulusan</p>
          </div>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
