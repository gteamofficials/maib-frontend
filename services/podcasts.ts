import { PodcastType } from "../types/response";
import api from "./api";

const GetAll = async () => {
  const res = await api.get(`podcasts?populate=*`);
  const response: PodcastType[] = res.data.data;
  return response;
};

const PodcastServices = {
  GetAll,
};

export default PodcastServices;
