import { useState } from "react";
import styles from "./HijriDate.module.scss";

type AppProps = {
  children: number;
  event?: string;
};

const HijriDate = ({ children, event }: AppProps) => {
  const [popUp, setPopUp] = useState(false);

  const eventOnly = event ? styles.event : "";
  const eventOnClick = popUp && event ? styles.active : "";
  const togglePopUp = () => setPopUp(!popUp);

  return (
    <button
      type="button"
      className={`${styles.tooltip} ${styles.hijriDate} ${eventOnly} ${eventOnClick}`}
      onClick={togglePopUp}
    >
      <span>{children}</span>
      {popUp && event && (
        <span className={`${styles.tip} ${styles.bottom}`}>{event}</span>
      )}
    </button>
  );
};

export default HijriDate;
