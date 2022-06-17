import { Menu } from "@headlessui/react";
import cn from "classnames";
import Link from "next/link";
import { Fragment, ReactNode } from "react";
import { MdArrowDropDown, MdArrowRight } from "react-icons/md";
import styles from "./NavDropDown.module.scss";

const NavDropDown = ({
  active,
  title,
  children,
}: {
  active?: boolean;
  title: string;
  children: ReactNode;
}) => {
  return (
    <Menu as="div" className={styles.navDropDown}>
      <Menu.Button as={Fragment}>
        {({ open }) => (
          <button
            className={cn(styles.button, {
              [styles.open]: open,
              [styles.active]: active && !open,
            })}
          >
            {title} {open ? <MdArrowDropDown /> : <MdArrowRight />}
          </button>
        )}
      </Menu.Button>
      <Menu.Items className={styles.items}>{children}</Menu.Items>
    </Menu>
  );
};

const Item = ({ href, children }: { href: string; children: ReactNode }) => {
  return (
    <Menu.Item as="div" className={styles.item}>
      {({ active }) => (
        <Link href={href}>
          <a className={styles.link}>{children}</a>
        </Link>
      )}
    </Menu.Item>
  );
};

NavDropDown.Item = Item;

export default NavDropDown;
