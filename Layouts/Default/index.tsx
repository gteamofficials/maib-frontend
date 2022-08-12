import Head from "next/head";
import { ReactNode } from "react";
import { useWindowScroll } from "react-use";
import { Footer, Navbar, NavDropDown } from "../../components";
import styles from "./Default.module.scss";

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  const { y } = useWindowScroll();

  return (
    <>
      <Head>
        <title>Masjid Al-Ikhlas</title>
        <meta name="description" content="Website Masjid Al-Ikhlas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar opaque={y > 0 ? true : false}>
        <Navbar.Item active href="/">
          Beranda
        </Navbar.Item>
        <Navbar.Item>
          <NavDropDown title="Informasi">
            <NavDropDown.Item href="news">Berita</NavDropDown.Item>
            <NavDropDown.Item href="article">Artikel</NavDropDown.Item>
          </NavDropDown>
        </Navbar.Item>
        <Navbar.Item href="/about">Tentang</Navbar.Item>
        <Navbar.Item href="#">Kontak</Navbar.Item>
      </Navbar>
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
