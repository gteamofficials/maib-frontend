import Image from "next/image";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ContentTitle from "../../components/ContentTitle";
import InfoCardRecent from "../../components/InfoCardRecent";
import styles from "./DetailPage.module.scss";
import { InformationType } from "../../types/response";

const DetailPage = ({
  information,
  allInformations,
  type,
}: {
  information: InformationType;
  allInformations: InformationType[];
  type: "article" | "news";
}) => {
  const date = new Date(information.attributes.date);
  const dateId = date.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const displayType = type === "article" ? "Artikel" : "Berita";

  return (
    <div>
      <section className={styles.section1}>
        <Image
          src={information.attributes.coverImage.data.attributes.url}
          alt={information.attributes.coverImage.data.attributes.alternativeText}
          layout="fill"
          objectFit="cover"
        />
      </section>
      <div className={styles.detailInformation}>
        <section className={styles.section2}>
          <div className={styles.left}>
            <h1 className={styles.title}>{information.attributes.title}</h1>
            <h3 className={styles.date}>{dateId}</h3>
            <p className={styles.content}>
              {information.attributes.description}
            </p>
          </div>
          <div className={styles.right}>
            <Swiper modules={[Autoplay]} autoplay={{ delay: 2000 }} loop>
              {information.attributes.images.data.map((image, i) => (
                <SwiperSlide key={i}>
                  <div className={styles.media}>
                    <Image
                      src={image.attributes.url}
                      alt={image.attributes.alternativeText}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        <section className={styles.section3}>
          <ContentTitle active>{`${displayType} Terkini`}</ContentTitle>
          <div className={styles.informationRecent}>
            {allInformations.map((information, i) => (
              <InfoCardRecent
                key={i}
                media={{
                  src: information.attributes.coverImage.data.attributes.url,
                  alt: information.attributes.coverImage.data.attributes
                    .alternativeText,
                }}
                title={information.attributes.title}
                date={new Date(information.attributes.date).toLocaleDateString(
                  "id-ID",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
                href={`/${type}/${information.attributes.slug}`}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DetailPage;
