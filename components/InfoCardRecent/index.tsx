import styles from "./InfoCardRecent.module.scss";
import Image from "next/image";
import Link from "next/link";
import { CardProps } from "../../types/components";

const InfoCardRecent = ({ date, href, title, media }: CardProps) => {
  return (
    <Link href={href}>
      <article className={styles.infoCardRecent}>
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
      </article>
    </Link>
  );
};

export default InfoCardRecent;
