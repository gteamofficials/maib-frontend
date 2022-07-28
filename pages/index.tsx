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
import HijriCalendarServices from "../services/hijriCalendar";
import { useState } from "react";

type LandingPageProps = {
  news: InformationType[];
  articles: InformationType[];
  salahSchedule: SalahScheduleType;
  hijriCalendar: HijriDateType[];
};

const Home: NextPage<LandingPageProps> = ({
  news,
  articles,
  salahSchedule,
  hijriCalendar,
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
        <HijriCalendar hijriCalendar={hijriCalendar} />
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
                <ContentTitle active={selected}>Artikel</ContentTitle>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel className={styles.newsPanel}>
              <BigInfoCard
                date={news[0].attributes.date}
                media={{
                  src: news[0].attributes.coverImage.data.attributes.url,
                  alt: news[0].attributes.coverImage.data.attributes
                    .alternativeText,
                }}
                title={news[0].attributes.title}
                body={news[0].attributes.description}
                href={`/infromation/${news[0].attributes.slug}`}
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
                  {news
                    .filter((_, i) => i !== 0)
                    .map((news, i) => (
                      <SwiperSlide key={i}>
                        <SmallInfoCard
                          date={news.attributes.date}
                          href={`/infromation/${news.attributes.slug}`}
                          media={{
                            src: news.attributes.coverImage.data.attributes.url,
                            alt: news.attributes.coverImage.data.attributes
                              .alternativeText,
                          }}
                          title={news.attributes.title}
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
                date={articles[0].attributes.date}
                media={{
                  src: articles[0].attributes.coverImage.data.attributes.url,
                  alt: articles[0].attributes.coverImage.data.attributes
                    .alternativeText,
                }}
                title={articles[0].attributes.title}
                body={articles[0].attributes.description}
                href={`/information/${articles[0].attributes.slug}`}
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
                  {articles
                    .filter((_, i) => i !== 0)
                    .map((article, i) => (
                      <SwiperSlide key={i}>
                        <SmallInfoCard
                          date={article.attributes.date}
                          href={`/information/${article.attributes.slug}`}
                          media={{
                            src: article.attributes.coverImage.data.attributes
                              .url,
                            alt: article.attributes.coverImage.data.attributes
                              .alternativeText,
                          }}
                          title={article.attributes.title}
                        />
                      </SwiperSlide>
                    ))}
                </Swiper>
                <ButtonLink href="/artikel" size="medium" variant="primary">
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
  const articles = informations.filter(
    (article) => article.attributes.type === "Artikel"
  );
  const news = informations.filter((news) => news.attributes.type === "Berita");

  // TODO: Change props fetching startegy because getStaticProps only run in build
  const salahSchedule = await SalahScheduleServices.Today();
  const hijriCalendar = await HijriCalendarServices.ThisMonth();

  return {
    props: {
      salahSchedule,
      news,
      articles,
      hijriCalendar,
    },
    revalidate: 60,
  };
}

export default Home;
