import { baseURL } from "utils/config.js";
export const fetchWrapper = async (path = "/", options = { method: "GET" }) =>
  await fetch(`${baseURL}${path}`, { ...options, headers: { "content-type": "application/json", ...options.headers } }).then((res) => res.json());
