import { dataURL } from "../../utils/apiURL";
import { apiRequest } from "../../utils/api-request";
export function requestAction(actionTypeString, userInfo) {
  switch (actionTypeString) {
    case "request":
      return {
        type: "(auth)REQUEST",
      };
    case "error":
      return {
        type: "(auth)ERROR",
      };
    case "success":
      return {
        type: "(auth)SUCCESS",
        payload: userInfo,
      };
    default:
      return {
        type: "(auth)REQUEST",
      };
  }
}

export function sendRequest(requestBody, path) {
  return async function loginRequestThunk(dispatch) {
    dispatch(requestAction());
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

      dispatch(requestAction("success", userInfo));
    } catch (error) {
      dispatch(requestAction("error"));
      console.log(error);
    }
  };
}
