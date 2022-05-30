import Image from "next/image";
import styles from "./SmallInfoCard.module.scss";
import sampleImg from "../../public/samples/3.jpg";

const SmallInfoCard = () => {
  return (
    <article className={styles.SmallInfoCard}>
      <span className={styles.media}>
        <Image
          src={sampleImg}
          alt="image of"
          layout="fill"
          objectFit="cover"
          className={styles.media}
        />
      </span>
      <h3 className={styles.header}>Sharing Anak Yatim</h3>
      <time className={styles.date}>Selasa | 24 Mei 2022</time>
      <a href="#" className={styles.action}>
        Lihat detail
      </a>
    </article>
  );
};

export default SmallInfoCard;
