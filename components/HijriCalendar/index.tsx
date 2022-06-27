import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import cn from "classnames";
import HijriDate from "../HijriDate";
import styles from "./HijriCalendar.module.scss";

const HijriCalendar = () => {
  const Day = ["Ahd", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
  const startDay: String = "Sab";

  return (
    <div className={styles.hijriCalendar}>
      <h4 className={styles.month}>Ramadhan 1443H</h4>
      <div className={styles.calendar}>
        {Day.map((day, i) => (
          <div className={styles.dayName} key={i}>
            {day}
          </div>
        ))}
        {[...Array(30)].map((_, i) => (
          <HijriDate
            className={cn({
              [styles.ahd]: i === 0 && startDay === "Ahd",
              [styles.sen]: i === 0 && startDay === "Sen",
              [styles.sel]: i === 0 && startDay === "Sel",
              [styles.rab]: i === 0 && startDay === "Rab",
              [styles.kam]: i === 0 && startDay === "Kam",
              [styles.jum]: i === 0 && startDay === "Jum",
              [styles.sab]: i === 0 && startDay === "Sab",
            })}
            key={i}
          >
            {i + 1}
          </HijriDate>
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
