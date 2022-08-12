import Head from "next/head";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { useWindowScroll } from "react-use";
import { Footer, Navbar, NavDropDown } from "../../components";
import styles from "./Default.module.scss";

interface AppContextInterface {
  setActiveNav: Dispatch<SetStateAction<string>>;
}

const AppCtx = createContext<AppContextInterface | null>(null);

export function useAppContext() {
  return useContext(AppCtx);
}

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  const { y } = useWindowScroll();
  const [activeNav, setActiveNav] = useState("landing");
  const providerValue: AppContextInterface = {
    setActiveNav,
  };

  return (
    <AppCtx.Provider value={providerValue}>
      <Head>
        <title>Masjid Al-Ikhlas</title>
        <meta name="description" content="Website Masjid Al-Ikhlas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar opaque={y > 0 ? true : false}>
        <Navbar.Item active={activeNav === "landing"} href="/">
          Beranda
        </Navbar.Item>
        <Navbar.Item active={activeNav === "information"}>
          <NavDropDown title="Informasi">
            <NavDropDown.Item href="news">Berita</NavDropDown.Item>
            <NavDropDown.Item href="article">Artikel</NavDropDown.Item>
          </NavDropDown>
        </Navbar.Item>
        <Navbar.Item href="/about" active={activeNav === "about"}>
          Tentang
        </Navbar.Item>
        <Navbar.Item href="#">Kontak</Navbar.Item>
      </Navbar>
      <main className={styles.main}>{children}</main>
      <Footer />
    </AppCtx.Provider>
  );
};

export default DefaultLayout;
