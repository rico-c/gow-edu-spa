import axios from "axios";
import { host } from "../config/fetch";

export const fetchSelectList = async () => {
  const res = await axios.get(`${host}/rank`);
  return res.data;
};

export const fetchRankingList = async ({ country, year, locale }) => {
  const res = await axios.get(`${host}/rank/list`, {
    params: {
      country,
      year,
    },
  });
  return res.data;
};
export const fetchSchool = async ({ id, year, locale }) => {
  const res = await axios.get(`${host}/rank/school/${id}`, {
    params: {
      year,
    },
  });
  return res.data;
};
