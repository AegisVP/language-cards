import { fetchWrapper } from "utils";

export const getDictionary = async (userId = null) => {
  let dictionary = (await fetchWrapper(`/constants/translations`)) || [];
  if (userId === null) return dictionary;

  // const users = await fetchWrapper(`/constants/users`);
  return dictionary;
};
