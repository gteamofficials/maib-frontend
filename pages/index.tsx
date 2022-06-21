import cn from "classnames";
import type { NextPage } from "next";
import Image from "next/image";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import InformationServices from "../services/informations";
import styles from "../styles/home.module.scss";
import { InformationType } from "../types/response";

type LandingPageProps = {
  informations: InformationType[];
};

const Home: NextPage<LandingPageProps> = ({ informations }) => {
  return (
    <>
      <section className={styles.carousel}>
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
      </section>
      <section className={cn(styles.desktop)}>
        <ol>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ol>
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
