import { Tab } from "@headlessui/react";
import type { NextPage } from "next";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  ButtonLink,
  HijriCalendar,
  RecentEvent,
  SalahSchedule,
  ServiceCard,
  SmallInfoCard,
} from "../components";
import BigInfoCard from "../components/BigInfoCard";
import ContentTitle from "../components/ContentTitle";
import InformationServices from "../services/informations";
import styles from "../styles/home.module.scss";
import {
  HijriDateType,
  InformationType,
  SalahScheduleType,
} from "../types/response";
import SalahScheduleServices from "../services/salahSchedule";
import HijriDateServices from "../services/hijriDate";

type LandingPageProps = {
  informations: InformationType[];
  salahSchedule: SalahScheduleType;
  hijriDate: HijriDateType[];
};

const Home: NextPage<LandingPageProps> = ({
  informations,
  salahSchedule,
  hijriDate,
}) => {
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
      <section className={styles.highlight}>
        <SalahSchedule
          className={styles.salahSchedule}
          salahSchedule={salahSchedule}
        />
        <HijriCalendar hijriDate={hijriDate} />
      </section>
      <section className={styles.services}>
        <div className={styles.servicesContent}>
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
        </div>
      </section>
      <section className={styles.news}>
        <Tab.Group>
          <Tab.List>
            <Tab className={styles.newsTab}>
              {({ selected }) => (
                <ContentTitle active={selected}>Berita</ContentTitle>
              )}
            </Tab>
            <Tab className={styles.newsTab}>
              {({ selected }) => (
                <ContentTitle active={selected}>Article</ContentTitle>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel className={styles.newsPanel}>
              <BigInfoCard
                date={"Senin 12 July 2022"}
                media={{
                  src: "https://source.unsplash.com/random/?city,night",
                  alt: "alt",
                }}
                title="Layanan Kurban"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum enim tellus mauris condimentum. Viverra enim faucibus lectus sapien dis. Nulla sed urna ac diam in purus."
                href="https://www.google.com/"
              />
              <div className={styles.moreInfo}>
                <Swiper
                  direction={"vertical"}
                  modules={[Pagination]}
                  slidesPerView={3}
                  pagination={{
                    clickable: true,
                    bulletActiveClass: styles.bulletActive,
                    bulletClass: styles.bullet,
                  }}
                  className={styles.infoVerticalCarousel}
                >
                  {[...Array(6)].map((_, i) => (
                    <SwiperSlide key={i}>
                      <SmallInfoCard
                        date="Selasa | 9 Feb 2022"
                        href="/random"
                        media={{
                          src: "https://source.unsplash.com/random/?islam",
                          alt: "alt",
                        }}
                        title="Sharing Anak Yatim"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <ButtonLink href="/berita" size="medium" variant="primary">
                  Lihat Semua
                </ButtonLink>
              </div>
            </Tab.Panel>
            <Tab.Panel className={styles.newsPanel}>
              <BigInfoCard
                date={"Senin 12 July 2022"}
                media={{
                  src: "https://source.unsplash.com/random/?city,night",
                  alt: "alt",
                }}
                title="Layanan Kurban"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum enim tellus mauris condimentum. Viverra enim faucibus lectus sapien dis. Nulla sed urna ac diam in purus."
                href="https://www.google.com/"
              />
              <div className={styles.moreInfo}>
                <Swiper
                  direction={"vertical"}
                  modules={[Pagination]}
                  slidesPerView={3}
                  pagination={{
                    clickable: true,
                    bulletActiveClass: styles.bulletActive,
                    bulletClass: styles.bullet,
                  }}
                  className={styles.infoVerticalCarousel}
                >
                  {[...Array(6)].map((_, i) => (
                    <SwiperSlide key={i}>
                      <SmallInfoCard
                        date="Selasa | 9 Feb 2022"
                        href="/random"
                        media={{
                          src: "https://source.unsplash.com/random/?islam",
                          alt: "alt",
                        }}
                        title="Sharing Anak Yatim"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <ButtonLink href="/berita" size="medium" variant="primary">
                  Lihat Semua
                </ButtonLink>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </section>
    </>
  );
};

export async function getStaticProps() {
  const informations: InformationType[] = await InformationServices.GetAll({});
  const salahSchedule = await SalahScheduleServices.Today();
  const hijriDate = await HijriDateServices.ThisMonth();

  return {
    props: {
      salahSchedule,
      informations,
      hijriDate,
    },
  };
}

export default Home;
