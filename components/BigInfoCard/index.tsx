import styles from "./BigInfoCard.module.scss"
import Image from "next/image";
import Link from "next/link";
import Button from "../button";

type AppProps = {
    media: {
        src: string;
        alt: string;
      };
      title: string;
      date: string;
      href: string;
      content: string;
};

const BigInfoCard = ({ media, title, date, href, content }: AppProps) => {
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
      <p className={styles.content}>{content}</p>
      <Link href={href}>
        <Button children="Selengkapnya" size="medium" variant="primary" disabled={false}></Button>
      </Link>
    </article>
  )
}

export default BigInfoCard;