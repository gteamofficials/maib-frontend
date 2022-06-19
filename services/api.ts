import axios from "axios";

const instance = axios.create({
  baseURL: process.env.strapiApiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
