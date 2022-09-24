import { ReactNode } from "react";
import styles from "./Navbar.module.scss";
import logo from "../../public/Logo.png";
import Image from "next/image";
import cn from "classnames";
import Link from "next/link";

const Navbar = ({
  children,
  opaque,
}: {
  children: ReactNode;
  opaque?: boolean;
}) => {
  return (
    <header
      className={cn(styles.navbar, {
        [styles.opaque]: opaque,
      })}
    >
      <nav className={styles.content}>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" width="64" height="64" />
          <p>Masjid Al-Ikhlas Bulusan</p>
        </div>
        <ol className={styles.list}>{children}</ol>
      </nav>
    </header>
  );
};

const Item = ({
  href,
  children,
  active,
}: {
  href?: string;
  children: ReactNode;
  active?: boolean;
}) => {
  return (
    <li
      className={cn(styles.item, {
        [styles.active]: active,
      })}
    >
      {href ? (
        <Link href={href}>
          <a>{children}</a>
        </Link>
      ) : (
        children
      )}
    </li>
  );
};

Navbar.Item = Item;

export default Navbar;
