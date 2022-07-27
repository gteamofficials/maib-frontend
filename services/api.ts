import axios from "axios";

const instance = (baseURL: string | undefined) =>
  axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });

export const strapiApi = instance(process.env.strapiApiUrl);
export const salahScheduleApi = instance(process.env.salahScheduleApiUrl);
export const hijriDateApi = instance(process.env.hijriDateApiUrl);
