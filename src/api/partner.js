import axios from "axios";
import {host} from "../config/fetch";

export const fetchVerifyCode = async ({email_address}) => {
  const res = await axios.post(`${host}/form/newcode`, {
    email_address,
  });
  return res.data;
};

export const doVerify = async ({email_address, code}) => {
  const res = await axios.post(`${host}/form/verify`, {
    email_address,
    code
  });
  return res.data;
};

export const doSubmit = async (params) => {
  const res = await axios.post(`${host}/form/partner`, params);
  return res.data;
};
