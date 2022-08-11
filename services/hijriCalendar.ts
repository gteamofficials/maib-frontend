import { getTodayHijriMonth, getTodayHijriYear } from "../utils/hijriDate";
import { hijriCalendarApi } from "./api";

const ThisMonth = async () => {
  const res = await hijriCalendarApi.get(
    `${getTodayHijriMonth()}/${getTodayHijriYear()}`
  );

  const response = res.data.data;

  return response;
};

const HijriCalendarServices = {
  ThisMonth,
};

export default HijriCalendarServices;
