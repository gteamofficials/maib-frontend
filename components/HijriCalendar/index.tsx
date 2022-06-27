import { ReactNode } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import HijriDate from "../HijriDate";
import styles from "./HijriCalendar.module.scss";

const HijriCalendar = ({ children }: { children: ReactNode }) => {
  const Day = ["Ahd", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
  const startDay = "ahad";

  return (
    <div className={styles.hijriCalendar}>
      <h4 className={styles.month}>Ramadhan 1443H</h4>
      <div className={styles.calendar}>
        {Day.map((day, i) => (
          <div className={styles.dayName} key={i}>
            {day}
          </div>
        ))}
        {[...Array(30)].map((_, j) => (
          <HijriDate key={j}>{j + 1}</HijriDate>
        ))}
      </div>
      <div className={styles.monthChanger}>
        <button>
          <MdKeyboardArrowLeft />
          Syaban
        </button>
        <button>
          Dzulqaidah
          <MdKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
};

export default HijriCalendar;
