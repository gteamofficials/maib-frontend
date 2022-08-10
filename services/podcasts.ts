import { PodcastType } from "../types/response";
import { strapiApi } from "./api";

const GetAll = async () => {
  const res = await strapiApi.get(`podcasts?populate=*`);
  const response: PodcastType[] = res.data.data;
  return response;
};

const PodcastServices = {
  GetAll,
};

export default PodcastServices;
