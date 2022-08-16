import { AboutType } from "../types/response";
import { strapiApi } from "./api";

const GetAll = async () => {
  const res = await strapiApi.get(`abouts?populate=*`);
  const response: AboutType[] = res.data.data;
  return response;
};

const AboutServices = {
  GetAll,
};

export default AboutServices;
