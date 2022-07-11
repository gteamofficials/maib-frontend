import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import styles from "./RecentEvent.module.scss";

const RecentEvent = ({
  href,
  title,
  media,
  body,
  className,
}: {
  href: string;
  title: string;
  media: { src: string; alt: string };
  body: string;
  className?: string;
}) => {
  return (
    <article
      className={cn(styles.recentEvent, {
        [className!]: className,
      })}
    >
      <span className={styles.media}>
        <Image
          src={media.src}
          alt={media.alt}
          layout="fill"
          objectFit="cover"
        />
      </span>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.content}>{body}</p>
      <Link href={href}>
        <a href="href" className={styles.action}>
          Lihat Detail
        </a>
      </Link>
    </article>
  );
};

export default RecentEvent;
