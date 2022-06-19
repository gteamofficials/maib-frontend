import { ServiceType } from "../types/response";
import api from "./api";

const GetAll = async () => {
  const res = await api.get(`services?populate=*`);
  const response: ServiceType[] = res.data.data;
  return response;
};

const ServiceServices = {
  GetAll,
};

export default ServiceServices;
