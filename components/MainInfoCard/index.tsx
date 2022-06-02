import { CardProps } from "../../types/components";
import ImageOverlayCard from "../ImageOverlayCard";
import styles from "./MainInfoCard.module.scss";

const MainInfoCard = ({ media, title, date, href }: CardProps) => {
  return (
    <ImageOverlayCard className={styles.mainInfoCard}>
      <ImageOverlayCard.Media src={media.src} alt={media.alt} />
      <ImageOverlayCard.Content>
        <h3 className={styles.header}>{title}</h3>
        <time className={styles.date}>{date}</time>
      </ImageOverlayCard.Content>
      <ImageOverlayCard.Action
        href={href}
        ariaLabel={`Baca lebih lanjut mengenai ${title}`}
      />
    </ImageOverlayCard>
  );
};

export default MainInfoCard;
