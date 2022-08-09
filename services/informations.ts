import { InformationType } from "../types/response";
import api from "./api";

const GetAll = async (params: {
  type?: string;
  limit?: number;
  offset?: number;
  category?: string | undefined;
}) => {
  let url = "informations?populate=%2A&sort=createdAt%3Adesc";
  if (params.type) {
    url += "&filters[type][$eq]=" + params.type;
  }
  if (params.limit) {
    url += "&pagination[limit]=" + params.limit;
  }
  if (params.offset) {
    url += "&pagination[start]=" + params.offset;
  }
  if (params.category) {
    url += "&category=" + params.category;
  }
  const res = await api.get(url);
  const response: InformationType[] = res.data.data;
  return response;
};

const GetBySlug = async (slug: string) => {
  const res = await api.get(`informations/${slug}?populate=*`);
  const response: InformationType = res.data.data;
  return response;
};

const InformationServices = {
  GetAll,
  GetBySlug,
};

export default InformationServices;
