import styles from "./InfoMenuCard.module.scss";
import Image from "next/image";
import { CardWithBodyProps } from "../../types/components";
import Link from "next/link";

const InfoMenuCard = ({
  date,
  href,
  title,
  media,
  body,
}: CardWithBodyProps) => {
  return (
    <Link href={href} passHref>
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
        <p className={styles.content}>{body}</p>
      </article>
    </Link>
  );
};

export default InfoMenuCard;
