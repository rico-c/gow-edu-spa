import axios from "axios";
import { host } from "../config/fetch";

export const fetchNewLetter = ({ first_name, email_address, client_scope }) => {
  const res = axios.post(`${host}/newsletter`, {
    first_name,
    email_address,
    client_scope: 'webapp01'
  });
  return res;
};
