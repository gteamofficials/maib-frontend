import styles from "./InfoMenuCard.module.scss";
import Image from "next/image";

type AppProps = {
    media: {
        src: string;
        alt: string;
      };
    title: string;
    date: string;
    content: string;
};

const InfoMenuCard = ({ media, title, date, content }: AppProps) => {
  return (
    <article className={styles.infoMenuCard}>
        <span className={styles.media}>
            <Image
            src={media.src}
            alt={media.alt}
            layout="fill"
            objectFit="cover"
            className={styles.media}
            />
        </span>
        <h3 className={styles.title}>{title}</h3>
        <time className={styles.date}>{date}</time>
        <p className={styles.content}>{content}</p>
    </article>
  );
};

export default InfoMenuCard;
