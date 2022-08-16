import Image from "next/image";
import { CardWithBodyProps } from "../../types/components";
import ButtonLink from "../ButtonLink";
import styles from "./BigInfoCard.module.scss";

const BigInfoCard = ({ date, href, title, media, body }: CardWithBodyProps) => {
  return (
    <article className={styles.bigInfoCard}>
      <span className={styles.media}>
        {media.src ? (
          <Image
            src={media.src}
            alt={media.alt}
            layout="fill"
            objectFit="cover"
            className={styles.media}
          />
        ) : (
          <div className={styles.media}></div>
        )}
      </span>
      <h3 className={styles.title}>{title}</h3>
      <time className={styles.date}>{date}</time>
      <p className={styles.content}>{body}</p>
      <ButtonLink
        size="medium"
        variant="primary"
        href={href}
        className={styles.action}
      >
        Selangkapnya
      </ButtonLink>
    </article>
  );
};

export default BigInfoCard;
