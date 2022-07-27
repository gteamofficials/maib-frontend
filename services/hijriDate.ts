import { getTodayHijriMonth, getTodayHijriYear } from "../utils/hijriDate";
import { hijriDateApi } from "./api";

const ThisMonth = async () => {
  const res = await hijriDateApi.get(
    `${getTodayHijriMonth()}/${getTodayHijriYear()}`
  );

  const response = res.data.data;

  return response;
};

const SalahScheduleServices = {
  ThisMonth,
};

export default SalahScheduleServices;
