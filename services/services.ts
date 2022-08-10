import { ServiceType } from "../types/response";
import { strapiApi } from "./api";

const GetAll = async () => {
  const res = await strapiApi.get(
    `services?populate=%2A&sort=createdAt%3Adesc&pagination[limit]=4`
  );
  const response: ServiceType[] = res.data.data;
  return response;
};

const ServiceServices = {
  GetAll,
};

export default ServiceServices;
