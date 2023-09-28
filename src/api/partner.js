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

export const doSubmit = async ({first_name, last_name, email_address, address1, state, mobile_area_code, mobile_no, country_code, country_name, abn, entity_name, entity_type}) => {
  const res = await axios.post(`${host}/form/partner`, {
    first_name, last_name, email_address, address1, state, mobile_area_code, mobile_no, country_code, country_name, abn, entity_name, entity_type
  });
  return res.data;
};
