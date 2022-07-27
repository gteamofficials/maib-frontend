import { ServiceType } from "../types/response";
import { strapiApi } from "./api";

const GetAll = async () => {
  const res = await strapiApi.get(`services?populate=*`);
  const response: ServiceType[] = res.data.data;
  return response;
};

const ServiceServices = {
  GetAll,
};

export default ServiceServices;
