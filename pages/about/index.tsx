import Image from "next/image";
import AboutServices from "../../services/abouts";
import { AboutType } from "../../types/response";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import styles from "../../styles/about.module.scss";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMount } from "react-use";
import { useNavigationContext } from "../../action/navigation";

const About = ({ abouts }: { abouts: AboutType[] }) => {
  const vision = abouts.filter((e) => e.attributes.category == "visi");
  const mission = abouts.filter((e) => e.attributes.category == "misi");
  const histories = abouts.filter((e) => e.attributes.category == "sejarah");

  const [_, dispatch] = useNavigationContext();
  useMount(() => {
    dispatch("about");
  });

  return (
    <div className={styles.about}>
      <section className={styles.vision}>
        <div className={styles.vision__body}>
          <div className={styles.vision__body__content}>
            <h1 className={styles.vision__body__content__title}>
              {vision[0].attributes.title}
            </h1>
            <p className={styles.vision__body__content__description}>
              {vision[0].attributes.description}
            </p>
          </div>
          <div className={styles.vision__body__images}>
            <span className={styles.vision__body__images__first}>
              <Image
                src={vision[0].attributes.images.data[0].attributes.url}
                alt={
                  vision[0].attributes.images.data[0].attributes.alternativeText
                }
                layout={`fill`}
              />
            </span>
            <span className={styles.vision__body__images__second}>
              <Image
                src={vision[0].attributes.images.data[1].attributes.url}
                alt={
                  vision[0].attributes.images.data[1].attributes.alternativeText
                }
                layout={`fill`}
              />
            </span>
          </div>
        </div>
      </section>

      <section className={styles.mission}>
        <div className={styles.mission__body}>
          <div className={styles.mission__body__images}>
            <span className={styles.mission__body__images__first}>
              <Image
                src={mission[0].attributes.images.data[0].attributes.url}
                alt={
                  mission[0].attributes.images.data[0].attributes
                    .alternativeText
                }
                layout={`fill`}
              />
            </span>
            <span className={styles.mission__body__images__second}>
              <Image
                src={mission[0].attributes.images.data[1].attributes.url}
                alt={
                  mission[0].attributes.images.data[1].attributes
                    .alternativeText
                }
                layout={`fill`}
              />
            </span>
          </div>
          <div className={styles.mission__body__content}>
            <h1 className={styles.mission__body__content__title}>
              {mission[0].attributes.title}
            </h1>
            <p className={styles.mission__body__content__description}>
              {mission[0].attributes.description}
            </p>
          </div>
        </div>
      </section>

      <section className={styles.history}>
        <div className={styles.history__title}>
          <h1>{histories[0].attributes.title}</h1>
        </div>
        <div className={styles.history__body}>
          <Swiper
            modules={[Navigation]}
            grabCursor={true}
            navigation={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            centeredSlides={true}
          >
            {histories.map((history, i) => (
              <SwiperSlide key={i}>
                <div
                  className={styles.history__body__bg}
                  style={{
                    backgroundImage: `url(${history.attributes.images.data[0].attributes.url})`,
                  }}
                >
                  <div className={styles.history__body__description}>
                    <p>{history.attributes.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export async function getStaticProps() {
  const res = await AboutServices.GetAll();
  const abouts: AboutType[] = res;

  return {
    props: {
      abouts,
    },
  };
}

export default About;
