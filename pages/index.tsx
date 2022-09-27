import { Tab } from "@headlessui/react";
import { count } from "console";
import type { NextPage } from "next";
import Image from "next/image";
import { Fragment } from "react";
import { useMedia, useMount } from "react-use";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigationContext } from "../action/navigation";
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

const Landing: NextPage<LandingPageProps> = ({
  news,
  articles,
  services,
  salahSchedule,
  hijriCalendar,
}) => {
  const [_, dispatch] = useNavigationContext();
  const isMobile = useMedia("(min-width: 376px)");
  useMount(() => {
    dispatch("landing");
  });

  const HomeImage = [
    "https://images.unsplash.com/photo-1599230080795-a48439229cb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1187&q=80",
    "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1134&q=80",
    "https://images.unsplash.com/photo-1658472047673-8825f8639dca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  ];

  return (
    <>
      <section className={styles.banner}>
        <Swiper modules={[Autoplay]} autoplay={{ delay: 1500 }}>
          {HomeImage.map((image, i) => (
            <SwiperSlide key={i}>
              <div className={styles.media}>
                <Image src={image} alt="img" layout="fill" objectFit="cover" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <RecentEvent
          href={`/news/${news[0]?.attributes.slug}`}
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
      <section className={styles.services} id="services">
        <Ornament className={styles.ornament} type="base" scale={1.2} />
        <div className={styles.servicesContent}>
          {isMobile ? (
            <div className={styles.serviceCards}>
              {services.map((service, i) => (
                <ServiceCard
                  key={i}
                  media={{
                    src: service.attributes.icon.data.attributes.url,
                    alt: service.attributes.icon.data.attributes
                      .alternativeText,
                  }}
                  title={service.attributes.title}
                  content={service.attributes.description}
                />
              ))}
            </div>
          ) : (
            <div className={styles.serviceMobile}>
              <Swiper
                spaceBetween={200}
                modules={[Pagination, Autoplay]}
                autoplay={{ delay: 1500 }}
                pagination={{
                  clickable: true,
                  bulletClass: styles.serviceBullet,
                  bulletActiveClass: styles.serviceBulletActive,
                }}
                className={styles.serviceSlider}
              >
                {services.map((service, i) => (
                  <SwiperSlide key={i}>
                    <ServiceCard
                      media={{
                        src: service.attributes.icon.data.attributes.url,
                        alt: service.attributes.icon.data.attributes
                          .alternativeText,
                      }}
                      title={service.attributes.title}
                      content={service.attributes.description}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
          <div className={styles.serviceTexts}>
            <div className={styles.upperTexts}>
              <h4>Layanan Masjid Al-Ikhlas</h4>
              <h1>Layanan yang terdapat pada Masjid Al-Ikhlas</h1>
            </div>
            <div className={styles.lowerTexts}>
              <p>
                Layanan dapat dilakukan dengan menghubungi kontak kami yang
                tertera pada bagian bawah atau dapat dengan menekan tombol di
                bawah ini.
              </p>
              <ButtonLink href="#" size="medium" variant="primary">
                Kontak Kami
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
      <Tab.Group as="section" className={styles.info}>
        <Tab.List>
          <Tab className={styles.infoTab}>
            {({ selected }) => (
              <ContentTitle active={selected}>Berita</ContentTitle>
            )}
          </Tab>
          <Tab className={styles.infoTab}>
            {({ selected }) => (
              <ContentTitle active={selected}>Artikel</ContentTitle>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels as={Fragment}>
          <Tab.Panel className={styles.infoPanel}>
            <BigInfoCard
              date={new Date(news[0]?.attributes.date).toLocaleDateString(
                "id-ID",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}
              media={{
                src: news[0]?.attributes.coverImage.data.attributes.url,
                alt: news[0]?.attributes.coverImage.data.attributes
                  .alternativeText,
              }}
              title={news[0]?.attributes.title}
              body={news[0]?.attributes.description}
              href={`/news/${news[0]?.attributes.slug}`}
            />
            {isMobile ? (
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
                          date={new Date(
                            news.attributes.date
                          ).toLocaleDateString("id-ID", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                          href={`/news/${news.attributes.slug}`}
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
                <ButtonLink href="/news" size="medium" variant="primary">
                  Lihat Semua
                </ButtonLink>
              </div>
            ) : (
              <ButtonLink href="/news" size="medium" variant="primary">
                Lihat Semua
              </ButtonLink>
            )}
          </Tab.Panel>
          <Tab.Panel className={styles.infoPanel}>
            <BigInfoCard
              date={new Date(articles[0]?.attributes.date).toLocaleDateString(
                "id-ID",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}
              media={{
                src: articles[0]?.attributes.coverImage.data.attributes.url,
                alt: articles[0]?.attributes.coverImage.data.attributes
                  .alternativeText,
              }}
              title={articles[0]?.attributes.title}
              body={articles[0]?.attributes.description}
              href={`/article/${articles[0]?.attributes.slug}`}
            />
            {isMobile ? (
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
                          date={new Date(
                            news.attributes.date
                          ).toLocaleDateString("id-ID", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                          href={`/news/${news.attributes.slug}`}
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
                <ButtonLink href="/news" size="medium" variant="primary">
                  Lihat Semua
                </ButtonLink>
              </div>
            ) : (
              <ButtonLink href="/news" size="medium" variant="primary">
                Lihat Semua
              </ButtonLink>
            )}
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

export default Landing;
