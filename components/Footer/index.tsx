import Image from "next/image";
import Link from "next/link";
import logo from "../../public/Logo.png";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.content}>
        <ul className={styles.list}>
          <li>
            <Link href="#">
              <a>Made with ❤️ by G-Team &copy; {new Date().getFullYear()}</a>
            </Link>
          </li>
          <li>
            <ul className={styles.nestedList}>
              <li>
                <Link href="/#services" scroll={false}>
                  <a>Layanan Kami</a>
                </Link>
              </li>
              <li>
                <Link href="/news">
                  <a>Berita</a>
                </Link>
              </li>
              <li>
                <Link href="/article">
                  <a>Artikel</a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/">
              <a className={styles.logo}>
                <Image src={logo} alt="logo" width="60" height="40" />
                <p>Masjid Al-Ikhlas Bulusan</p>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
