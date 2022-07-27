import cn from "classnames";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { HijriDateType } from "../../types/response";
import HijriDate from "../HijriDate";
import styles from "./HijriCalendar.module.scss";

const HijriCalendar = ({ hijriDate }: { hijriDate: HijriDateType[] }) => {
  const Day = ["Ahd", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
  const startDay: String = hijriDate[0].hijri.weekday.en;

  return (
    <div className={styles.hijriCalendar}>
      <h4
        className={styles.month}
      >{`${hijriDate[0].hijri.month.en} - ${hijriDate[0].hijri.year}`}</h4>
      <div className={styles.calendar}>
        {Day.map((day, i) => (
          <div className={styles.dayName} key={i}>
            {day}
          </div>
        ))}
        {hijriDate.map((date, i) => (
          <HijriDate
            className={cn({
              [styles.ahd]: i === 0 && startDay === "Al Ahad",
              [styles.sen]: i === 0 && startDay === "Al Athnayn",
              [styles.sel]: i === 0 && startDay === "Al Thalaata",
              [styles.rab]: i === 0 && startDay === "Al Arba'a",
              [styles.kam]: i === 0 && startDay === "Al Khamees",
              [styles.jum]: i === 0 && startDay === "Al Juma'a",
              [styles.sab]: i === 0 && startDay === "Al Sabt",
            })}
            key={i}
            event={date.hijri.holidays.toString()}
          >
            {i + 1}
          </HijriDate>
        ))}
      </div>
      <div className={styles.monthChanger}>
        {/* Turned off because of hard time calling api
         <button>
          <MdKeyboardArrowLeft />
          Syaban
        </button>
        <button>
          Dzulqaidah
          <MdKeyboardArrowRight />
        </button>
        */}
      </div>
    </div>
  );
};

export default HijriCalendar;
