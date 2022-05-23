import { useState } from "react";
import styles from "./HijriDate.module.scss";

type AppProps = {
  children: number;
  event?: string;
};

const HijriDate = ({ children, event }: AppProps) => {
  const [active, setActive] = useState(false);

  return (
    <div className={styles.tooltip} onClick={() => setActive(!active)}>
      <span
        className={`${styles.hijriDate} ${event && styles.event} ${
          active && event && styles.active
        }`}
      >
        {children}
      </span>
      {active && event && (
        <div className={`${styles.tip} ${styles.bottom}`}>{event}</div>
      )}
    </div>
  );
};

export default HijriDate;
