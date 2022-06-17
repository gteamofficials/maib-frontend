import Image from "next/image";
import styles from "./SmallInfoCard.module.scss";
import Link from "next/link";

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
    <article className={styles.smallInfoCard}>
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
      <Link href={href}>
        <a className={styles.action}>Lihat detail</a>
      </Link>
    </article>
  );
};

export default SmallInfoCard;
