import Image from "next/image";
import styles from "./SmallInfoCard.module.scss";
import sampleImg from "../../public/samples/3.jpg";

const SmallInfoCard = () => {
  return (
    <article className={styles.SmallInfoCard}>
      <Image
        src={sampleImg}
        alt="image of"
        width={160}
        height={104}
        className={styles.media}
      />
      <div className={styles.content}>
        <h3 className={styles.header}>Sharing Anak Yatim</h3>
        <time className={styles.date}>Selasa | 24 Mei 2022</time>
        <a href="#" className={styles.action}>
          Lihat detail
        </a>
      </div>
    </article>
  );
};

export default SmallInfoCard;
