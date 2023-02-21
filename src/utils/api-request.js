import { checkResponse } from "./check-response";
export const apiRequest = async (url, options) => {
  let data;
  let response;
  try {
    response = await fetch(url, options);
    data = await checkResponse(response);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
