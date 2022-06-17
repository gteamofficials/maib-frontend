import styles from "./ServiceCard.module.scss"
import cn from "classnames";
import Image from "next/image";

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
            width={104}
            height={104}
            objectFit="cover"
            />
        </span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.content}>{content}</p>
    </article>
  )
}

export default ServiceCard;
