import { InformationType } from "../types/response";
import { strapiApi } from "./api";

const GetAll = async (params: {
  type?: string;
  limit?: string;
  category?: string;
}) => {
  let url = "informations?populate=%2A&sort=createdAt%3Adesc";
  if (params.type) {
    url += "&type=" + params.type;
  }
  if (params.limit) {
    url += "&_limit=" + params.limit;
  }
  if (params.category) {
    url += "&category=" + params.category;
  }
  const res = await strapiApi.get(url);
  const response: InformationType[] = res.data.data;
  return response;
};

const GetBySlug = async (slug: string) => {
  const res = await strapiApi.get(`informations/${slug}?populate=*&_sort=DESC`);
  const response: InformationType[] = res.data.data;
  return response;
};

const InformationServices = {
  GetAll,
  GetBySlug,
};

export default InformationServices;
