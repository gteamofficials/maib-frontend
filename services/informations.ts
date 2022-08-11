import { InformationType } from "../types/response";
import { strapiApi } from "./api";

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
  //Need to be checked on params category
  if (params.category) {
    url += "&filters[category][category][$eq]" + params.category;
  }
  const res = await strapiApi.get(url);
  const response: InformationType[] = res.data.data;
  return response;
};

const GetBySlug = async (slug: string) => {
  const res = await strapiApi.get(
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
