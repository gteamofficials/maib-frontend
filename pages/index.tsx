import cn from "classnames";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  ButtonLink,
  HijriCalendar,
  RecentEvent,
  SalahSchedule,
  ServiceCard,
} from "../components";
import InformationServices from "../services/informations";
import styles from "../styles/home.module.scss";
import { InformationType } from "../types/response";

type LandingPageProps = {
  informations: InformationType[];
};

const Home: NextPage<LandingPageProps> = ({ informations }) => {
  return (
    <>
      <section className={styles.banner}>
        <Swiper modules={[Autoplay]} autoplay={{ delay: 1500 }}>
          <SwiperSlide>
            <div className={styles.media}>
              <Image
                src={"https://source.unsplash.com/random/?city,night"}
                alt="img"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.media}>
              <Image
                src={"https://source.unsplash.com/random/?city,night"}
                alt="img"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <RecentEvent
          href="ramadhan halal"
          title="Ramadan Halal Bihalal"
          media={{
            src: "https://source.unsplash.com/random/?ramadhan",
            alt: "random",
          }}
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, proin suscipit ut eleifend amet nisi. Morbi felis scelerisque sit sit malesuada scelerisque. Vitae ac etiam consectetur quis egestas libero. Lacus, malesuada lobortis duis posuere sed. Ullamcorper tortor tempor vitae cras. Fermentum a in vitae, bibendum. Donec sollicitudin dolor praesent nibh elit libero sollicitudin. Pharetra neque integer nulla purus diam sit."
          className={styles.recentEvent}
        />
      </section>
      <section className={cn(styles.desktop, styles.highlight)}>
        <SalahSchedule className={styles.salahSchedule} />
        <HijriCalendar />
      </section>
      <section className={styles.services}>
        <div className={styles.serviceCards}>
          <ServiceCard
            media={{
              src: "https://source.unsplash.com/random/?city,night",
              alt: "alt",
            }}
            title="Layanan Kurban"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum enim tellus mauris condimentum. Viverra enim faucibus lectus sapien dis. Nulla sed urna ac diam in purus."
            href="https://www.google.com/"
          />
          <ServiceCard
            media={{
              src: "https://source.unsplash.com/random/?city,night",
              alt: "alt",
            }}
            title="Layanan Kurban"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum enim tellus mauris condimentum. Viverra enim faucibus lectus sapien dis. Nulla sed urna ac diam in purus."
            href="https://www.google.com/"
          />
          <ServiceCard
            media={{
              src: "https://source.unsplash.com/random/?city,night",
              alt: "alt",
            }}
            title="Layanan Kurban"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum enim tellus mauris condimentum. Viverra enim faucibus lectus sapien dis. Nulla sed urna ac diam in purus."
            href="https://www.google.com/"
          />
          <ServiceCard
            media={{
              src: "https://source.unsplash.com/random/?city,night",
              alt: "alt",
            }}
            title="Layanan Kurban"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum enim tellus mauris condimentum. Viverra enim faucibus lectus sapien dis. Nulla sed urna ac diam in purus."
            href="https://www.google.com/"
          />
        </div>
        <div className={styles.serviceTexts}>
          <div className={styles.upperTexts}>
            <h4>Layanan Masjid Al-Ikhlas</h4>
            <h1>Layanan yang terdapat pada Masjid Al-Ikhlas</h1>
            <p>
              Layanan terdekat yang akan dibuka Masjid Al-Ikhlas adalah qurban
              idul adha
            </p>
          </div>
          <div className={styles.lowerTexts}>
            <p>
              Layanan dapat dilakukan dengan menghubungi kontak kami yang
              tertera pada bagian bawah atau dapat dengan menekan tombol di
              bawah ini.
            </p>
            <ButtonLink href="/contact" size="medium" variant="primary">
              Kontak Kami
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getStaticProps() {
  const res = await InformationServices.GetAll({});
  const informations: InformationType[] = res;

  return {
    props: {
      informations,
    },
  };
}

export default Home;
