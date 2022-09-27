import Image from "next/image";
import styles from "./ServiceCard.module.scss";

type AppProps = {
  media: {
    src: string;
    alt: string;
  };
  title: string;
  content: string;
};

const ServiceCard = ({ media, title, content }: AppProps) => {
  return (
    <article className={styles.serviceCard}>
      <span className={styles.media}>
        <Image
          src={media.src}
          alt={media.alt}
          layout="fill"
          objectFit="contain"
        />
      </span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.content}>{content}</p>
    </article>
  );
};

export default ServiceCard;
