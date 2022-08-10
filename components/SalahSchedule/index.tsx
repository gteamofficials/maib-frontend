import { FiClock } from "react-icons/fi";
import cn from "classnames";
import styles from "./SalahSchedule.module.scss";
import { SalahScheduleType } from "../../types/response";
import { iqomah } from "../../utils/date";

const SalahSchedule = ({
  className,
  salahSchedule,
}: {
  className?: string;
  salahSchedule: SalahScheduleType;
}) => {
  return (
    <div
      className={cn(styles.salahSchedule, {
        [className!]: className,
      })}
    >
      <div className={styles.dawnTime}>
        <div className={styles.dawnTimeInner}>
          <h4 className={styles.label}>Terbit Fajar</h4>
          <time className={styles.time}>{salahSchedule.terbit}</time>
        </div>
      </div>
      <div className={styles.salahTable}>
        <div className={styles.th}>
          <h4>Shalat</h4>
          <h4>Adzan</h4>
          <h4>Iqomah</h4>
        </div>
        <div className={styles.tr}>
          <h4>
            <FiClock />
            Subuh
          </h4>
          <time>{salahSchedule.subuh}</time>
          <time>{iqomah(salahSchedule.subuh)}</time>
        </div>
        <div className={styles.tr}>
          <h4>
            <FiClock />
            Dzuhur
          </h4>
          <time>{salahSchedule.dzuhur}</time>
          <time>{iqomah(salahSchedule.dzuhur)}</time>
        </div>
        <div className={styles.tr}>
          <h4>
            <FiClock />
            Ashar
          </h4>
          <time>{salahSchedule.ashar}</time>
          <time>{iqomah(salahSchedule.ashar)}</time>
        </div>
        <div className={styles.tr}>
          <h4>
            <FiClock />
            Magrib
          </h4>
          <time>{salahSchedule.maghrib}</time>
          <time>{iqomah(salahSchedule.maghrib)}</time>
        </div>
        <div className={styles.tr}>
          <h4>
            <FiClock />
            Isya
          </h4>
          <time>{salahSchedule.isya}</time>
          <time>{iqomah(salahSchedule.isya)}</time>
        </div>
      </div>
    </div>
  );
};

export default SalahSchedule;
