import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import styles from "./ImageOverlayCard.module.scss";

const ImageOverlayCard = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) => {
  return (
    <article
      className={cn(styles.imageOverlayCard, {
        [className]: className,
      })}
    >
      {children}
    </article>
  );
};

const Media = ({ src, alt }: { src: string; alt: string }) => (
  <span className={styles.media}>
    <Image
      className={styles.image}
      src={src}
      alt={alt}
      layout="fill"
      objectFit="cover"
    />
  </span>
);

const Content = ({ children }: { children: ReactNode }) => (
  <div className={styles.content}>{children}</div>
);

const Action = ({ href, ariaLabel }: { href: string; ariaLabel: string }) => (
  <Link href={href}>
    <a className={styles.action} aria-label={ariaLabel} />
  </Link>
);

ImageOverlayCard.Media = Media;
ImageOverlayCard.Content = Content;
ImageOverlayCard.Action = Action;

export default ImageOverlayCard;
