import { Tab } from "@headlessui/react";
import type { NextPage } from "next";
import Image from "next/image";
import { useMount } from "react-use";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  BigInfoCard,
  ButtonLink,
  ContentTitle,
  HijriCalendar,
  Ornament,
  RecentEvent,
  SalahSchedule,
  ServiceCard,
  SmallInfoCard,
} from "../components";
import { useAppContext } from "../Layouts/Default";
import HijriCalendarServices from "../services/hijriCalendar";
import InformationServices from "../services/informations";
import SalahScheduleServices from "../services/salahSchedule";
import ServiceServices from "../services/services";
import styles from "../styles/home.module.scss";
import {
  HijriDateType,
  InformationType,
  SalahScheduleType,
  ServiceType,
} from "../types/response";

type LandingPageProps = {
  news: InformationType[];
  articles: InformationType[];
  services: ServiceType[];
  salahSchedule: SalahScheduleType;
  hijriCalendar: HijriDateType[];
};

const Home: NextPage<LandingPageProps> = ({
  news,
  articles,
  services,
  salahSchedule,
  hijriCalendar,
}) => {
  const appCtx = useAppContext();

  useMount(() => {
    appCtx?.setActiveNav("landing");
  });

  return (
    <>
      <section className={styles.banner}>
        <Swiper modules={[Autoplay]} autoplay={{ delay: 1500 }}>
          {[...Array(3)].map((_, i) => (
            <SwiperSlide key={i}>
              <div className={styles.media}>
                <Image
                  src={
                    "https://source.unsplash.com/random/?mosque,islam,ramadhan"
                  }
                  alt="img"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <RecentEvent
          href={`/information/${news[0]?.attributes.slug}`}
          title={news[0].attributes.title}
          media={{
            src: news[0]?.attributes.coverImage.data.attributes.url,
            alt: news[0]?.attributes.coverImage.data.attributes.alternativeText,
          }}
          body={news[0]?.attributes.description}
          className={styles.recentEvent}
        />
        <Ornament className={styles.ornament} type="primary" scale={1.2} />
      </section>
      <section className={styles.highlight}>
        <SalahSchedule
          className={styles.salahSchedule}
          salahSchedule={salahSchedule}
        />
        <HijriCalendar hijriCalendar={hijriCalendar} />
      </section>
      <section className={styles.services}>
        <Ornament className={styles.ornament} type="base" scale={1.2} />
        <div className={styles.servicesContent}>
          <div className={styles.serviceCards}>
            {services.map((service, i) => (
              <ServiceCard
                key={i}
                media={{
                  src: service.attributes.icon.data.attributes.url,
                  alt: service.attributes.icon.data.attributes.alternativeText,
                }}
                title={service.attributes.title}
                content={service.attributes.description}
              />
            ))}
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
      <Tab.Group as="section" className={styles.news}>
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
              date={news[0]?.attributes.date}
              media={{
                src: news[0]?.attributes.coverImage.data.attributes.url,
                alt: news[0]?.attributes.coverImage.data.attributes
                  .alternativeText,
              }}
              title={news[0]?.attributes.title}
              body={news[0]?.attributes.description}
              href={`/information/${news[0]?.attributes.slug}`}
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
                        href={`/information/${news.attributes.slug}`}
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
              date={articles[0]?.attributes.date}
              media={{
                src: articles[0]?.attributes.coverImage.data.attributes.url,
                alt: articles[0]?.attributes.coverImage.data.attributes
                  .alternativeText,
              }}
              title={articles[0]?.attributes.title}
              body={articles[0]?.attributes.description}
              href={`/information/${articles[0]?.attributes.slug}`}
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
    </>
  );
};

export async function getStaticProps() {
  const informations: InformationType[] = await InformationServices.GetAll({});
  const services: ServiceType[] = await ServiceServices.GetAll();
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
      services,
    },
    revalidate: 60,
  };
}

export default Home;
