import { CategoryType } from "../types/response";
import api from "./api";

const GetAll = async (params: { limit?: number; offset?: number }) => {
  let url = "information-categories?populate=*";
  if (params.limit) {
    url += "&pagination[limit]=" + params.limit;
  }
  if (params.offset) {
    url += "&pagination[start]=" + params.offset;
  }
  const res = await api.get(url);
  const response: CategoryType[] = res.data.data;
  return response;
};

const CategoryServices = {
  GetAll,
};

export default CategoryServices;
