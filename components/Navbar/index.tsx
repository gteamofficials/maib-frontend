import { ReactNode } from "react";
import styles from "./Navbar.module.scss";
import logo from "../../public/Logo.png";
import Image from "next/image";
import cn from "classnames";
import Link from "next/link";
import { MdBarChart } from "react-icons/md";
import { useToggle } from "react-use";

const Navbar = ({
  children,
  opaque,
}: {
  children: ReactNode;
  opaque?: boolean;
}) => {
  const [mobileMenuOn, mobileMenuToggle] = useToggle(false);

  return (
    <header
      className={cn(styles.navbar, {
        [styles.opaque]: opaque,
      })}
    >
      <nav className={styles.content}>
        <div className={styles.logo}>
          <span className={styles.icon}>
            <Image src={logo} alt="logo" layout="fill" objectFit="contain" />
          </span>
          <p>Masjid Al-Ikhlas Bulusan</p>
        </div>
        <MdBarChart className={styles.menu} onClick={mobileMenuToggle} />
        <ol
          className={cn(styles.list, {
            [styles.mobileActive]: mobileMenuOn,
          })}
          onClick={mobileMenuToggle}
        >
          {children}
        </ol>
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
