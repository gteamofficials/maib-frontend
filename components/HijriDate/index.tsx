import { useState } from "react";
import cn from "classnames";
import styles from "./HijriDate.module.scss";

type AppProps = {
  children: number;
  event?: string;
};

const HijriDate = ({ children, event }: AppProps) => {
  const [popUp, setPopUp] = useState(false);
  const togglePopUp = () => setPopUp(!popUp);

  return (
    <button
      type="button"
      className={cn(styles.hijriDate, {
        [styles.event]: event,
        [styles.popUp]: event && popUp,
      })}
      onClick={togglePopUp}
      disabled={!event}
    >
      <span>{children}</span>
      {event && popUp && <span className={styles.detail}>{event}</span>}
    </button>
  );
};

export default HijriDate;
