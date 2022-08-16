import { CardProps } from "../../types/components";
import ImageOverlayCard from "../ImageOverlayCard";
import styles from "./AdditionalInfoCard.module.scss";

const AdditionalInfoCard = ({ media, title, date, href }: CardProps) => {
  return (
    <ImageOverlayCard className={styles.additionalInfoCard}>
      <ImageOverlayCard.Media src={media.src} alt={media.alt} />
      <ImageOverlayCard.Content>
        <h5 className={styles.header}>{title}</h5>
        <time className={styles.date}>{date}</time>
      </ImageOverlayCard.Content>
      <ImageOverlayCard.Action
        href={href}
        ariaLabel={`Baca lebih lanjut mengenai ${title}`}
      />
    </ImageOverlayCard>
  );
};

export default AdditionalInfoCard;
