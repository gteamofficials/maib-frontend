import styles from "./BigInfoCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import Button from "../button";
import { CardWithBodyProps } from "../../types/components";

const BigInfoCard = ({ date, href, title, media, body }: CardWithBodyProps) => {
  return (
    <article className={styles.bigInfoCard}>
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
      <Link href={href}>
        <Button size="medium" variant="primary" className={styles.link}>
          Selengkapnya
        </Button>
      </Link>
    </article>
  );
};

export default BigInfoCard;
