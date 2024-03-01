import axios from "axios";
import { host } from "../config/fetch";

export const submit_student = async ({
  first_name,
  last_name,
  email_address,
  mobile_area_code,
  mobile_no,
  study_country,
  study_year,
  study_area,
  is_on_update,
  current_country
}) => {
  const res = await axios.post(`${host}/form/student`, {
    first_name,
    last_name,
    email_address,
    mobile_area_code,
    mobile_no,
    study_country,
    study_year,
    study_area,
    is_on_update,
    current_country
  });
  console.log(res.data);
  return res.data;
};
