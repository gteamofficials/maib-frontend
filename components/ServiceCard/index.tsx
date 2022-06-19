import styles from "./ServiceCard.module.scss"
import Image from "next/image";
import Link from "next/link";

type AppProps = {
  media: {
    src: string;
    alt: string;
  };
  title: string;
  content: string;
  href: string;
};

const ServiceCard = ({ media, title, content, href }: AppProps) => {
  return (
    <Link href={href}>
      <article className={styles.serviceCard}>
          <span className={styles.media}>
              <Image
                src={media.src}
                alt={media.alt}
                layout="fill"
                objectFit="cover"
              />
          </span>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.content}>{content}</p>
      </article>
    </Link>
  )
}

export default ServiceCard;
