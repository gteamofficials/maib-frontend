import Image from "next/image";
import Link from "next/link";
import { CardWithBodyProps } from "../../types/components";
import styles from "./CategoryInfoCard.module.scss";

const CategoryInfoCard = ({
  date,
  href,
  title,
  media,
  body,
}: CardWithBodyProps) => {
  return (
    <article className={styles.categoryInfoCard}>
      <span className={styles.media}>
        <Image
          src={media.src}
          alt={media.alt}
          layout="fill"
          objectFit="cover"
        />
      </span>
      <h5 className={styles.header}>{title}</h5>
      <time className={styles.date}>{date}</time>
      <p className={styles.body}>{body}</p>
      <Link href={href}>
        <a className={styles.action}>Lihat detail</a>
      </Link>
    </article>
  );
};

export default CategoryInfoCard;
