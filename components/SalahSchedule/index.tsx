import { FiClock } from "react-icons/fi";
import cn from "classnames";
import styles from "./SalahSchedule.module.scss";

const RecentEvent = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(styles.salahSchedule, {
        [className!]: className,
      })}
    >
      <div className={styles.dawnTime}>
        <div className={styles.dawnTimeInner}>
          <h4 className={styles.label}>Terbit Fajar</h4>
          <time className={styles.time}>05:41</time>
        </div>
      </div>
      <div className={styles.salahTable}>
        <div className={styles.th}>
          <h4>Shalat</h4>
          <h4>Adzan</h4>
          <h4>Iqomah</h4>
        </div>
        <div className={styles.tr}>
          <h4>Subuh</h4>
          <time>04.19</time>
          <time>04.30</time>
        </div>
        <div className={styles.tr}>
          <h4>Dzuhur</h4>
          <time>11.35</time>
          <time>12.00</time>
        </div>
        <div className={styles.tr}>
          <h4>Ashar</h4>
          <time>14.56</time>
          <time>15.10</time>
        </div>
        <div className={styles.tr}>
          <h4>Magrib</h4>
          <time>17.28</time>
          <time>17.45</time>
        </div>
        <div className={styles.tr}>
          <h4>Isya</h4>
          <time>18.41</time>
          <time>18.55</time>
        </div>
      </div>
    </div>
  );
};

export default RecentEvent;
