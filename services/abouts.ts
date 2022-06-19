import { AboutType } from "../types/response";
import api from "./api";

const GetAll = async () => {
  const res = await api.get(`abouts?populate=*`);
  const response: AboutType[] = res.data.data;
  return response;
};

const AboutServices = {
  GetAll,
};

export default AboutServices;
