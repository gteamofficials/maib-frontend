import { Menu } from "@headlessui/react";
import cn from "classnames";
import { Fragment } from "react";
import { MdArrowDropDown, MdArrowRight } from "react-icons/md";
import styles from "./NavDropDown.module.scss";

const NavDropDown = ({ active }: { active?: boolean }) => {
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
            Informasi {open ? <MdArrowDropDown /> : <MdArrowRight />}
          </button>
        )}
      </Menu.Button>
      <Menu.Items className={styles.items}>
        <Menu.Item as="div" className={styles.item}>
          {({ active }) => (
            <a className={styles.link} href="/visi-misi">
              Visi Misi
            </a>
          )}
        </Menu.Item>
        <Menu.Item as="div" className={styles.item}>
          {({ active }) => (
            <a className={styles.link} href="/sejarah">
              Sejarah
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default NavDropDown;
