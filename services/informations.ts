import { InformationType } from "../types/response";
import api from "./api";

const GetAll = async (params: {
  type?: string;
  limit?: string;
  category?: string;
}) => {
  let url = "informations?populate=*&_sort=DESC";
  if (params.type) {
    url += "&filters[type][$eq]=" + params.type;
  }
  if (params.limit) {
    url += "&pagination[limit]=" + params.limit;
  }
  //Need to be checked on params category
  if (params.category) {
    url += "&filters[category][$eq]=" + params.category;
  }
  const res = await api.get(url);
  const response: InformationType[] = res.data.data;
  return response;
};

const GetBySlug = async (slug: string) => {
  const res = await api.get(
    `informations?filters[slug][$eq]=${slug}&populate=*&_sort=DESC`
  );
  const response: InformationType[] = res.data.data[0];
  return response;
};

const InformationServices = {
  GetAll,
  GetBySlug,
};

export default InformationServices;
