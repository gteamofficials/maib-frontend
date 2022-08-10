import { salahScheduleApi } from "./api";

const Today = async () => {
  const today = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
  const res = await salahScheduleApi.get(today);
  const response = res.data.data.jadwal;

  return response;
};

const SalahScheduleServices = {
  Today,
};

export default SalahScheduleServices;
