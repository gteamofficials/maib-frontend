import { InformationType } from "../types/response";
import api from "./api";

const GetAll = async (params: {
  type?: string;
  limit?: string;
  category?: string;
}) => {
  let url = "informations?populate=*&_sort=DESC";
  if (params.type) {
    url += "&type=" + params.type;
  }
  if (params.limit) {
    url += "&_limit=" + params.limit;
  }
  if (params.category) {
    url += "&category=" + params.category;
  }
  const res = await api.get(url);
  const response: InformationType[] = res.data.data;
  return response;
};

const GetBySlug = async (slug: string) => {
  const res = await api.get(`informations/${slug}?populate=*&_sort=DESC`);
  const response: InformationType[] = res.data.data;
  return response;
};

const InformationServices = {
  GetAll,
  GetBySlug,
};

export default InformationServices;
