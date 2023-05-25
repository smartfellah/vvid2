import { dataURL } from "../../utils/apiURL";
import { apiRequest } from "../../utils/api-request";
import { request, success, error } from "../reducers/auth-reducer";

export function sendRequest(requestBody, path) {
  return async function loginRequestThunk(dispatch) {
    dispatch(request());
    console.log(`${dataURL}/${path}`);

    try {
      const response = await apiRequest(`${dataURL}${path}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...requestBody }),
      });

      //setTokenCookies(response);

      const userInfo = response.user || response.token;

      //localStorage.setItem("name", userInfo.name);
      //localStorage.setItem("email", userInfo.email);

      dispatch(success(userInfo));
    } catch (error) {
      dispatch(error());
      console.log(error);
    }
  };
}
