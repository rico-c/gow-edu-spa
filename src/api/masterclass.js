import axios from "axios";
import {host} from "../config/fetch";
import {fetchCountry} from '../utils/fetchCountry'

export const fetchCourses = async (filter) => {
  const cc = await fetchCountry();
  const res = await axios.get(`${host}/courses`, {
    params: {
      filter,
      cc
    }
  });
  return res.data;
};

export const fetchCourseInfo = async ({id}) => {
  const cc = await fetchCountry();
  const res = await axios.get(`${host}/courses/info/${id}`, {
    params: {
      cc
    },
  });
  return res.data;
};
