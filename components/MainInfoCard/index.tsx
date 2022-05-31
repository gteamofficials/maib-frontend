import Image from "next/image";
import Link from "next/link";
import styles from "./MainInfoCard.module.scss";

type AppProps = {
  media: {
    src: string;
    alt: string;
  };
  title: string;
  date: string;
  href: string;
};

const MainInfoCard = ({ media, title, date, href }: AppProps) => {
  return (
    <article className={styles.mainInfoCard}>
      <span className={styles.media}>
        <Image
          className={styles.image}
          alt={media.alt}
          src={media.src}
          layout="fill"
          objectFit="cover"
        />
      </span>
      <div className={styles.content}>
        <h3 className={styles.header}>{title}</h3>
        <time className={styles.date}>{date}</time>
      </div>
      <Link href={href}>
        <a className={styles.action}>Try it now</a>
      </Link>
    </article>
  );
};

export default MainInfoCard;
