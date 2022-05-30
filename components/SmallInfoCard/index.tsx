import Image from "next/image";
import styles from "./SmallInfoCard.module.scss";
import sampleImg from "../../public/samples/3.jpg";

type AppProps = {
  media: {
    src: string;
    alt: string;
  };
  title: string;
  date: string;
  href: string;
};

const SmallInfoCard = ({ media, title, date, href }: AppProps) => {
  return (
    <article className={styles.SmallInfoCard}>
      <span className={styles.media}>
        <Image
          src={media.src}
          alt={media.alt}
          layout="fill"
          objectFit="cover"
          className={styles.media}
        />
      </span>
      <h3 className={styles.header}>{title}</h3>
      <time className={styles.date}>{date}</time>
      <a href={href} className={styles.action}>
        Lihat detail
      </a>
    </article>
  );
};

export default SmallInfoCard;
