import { requestAction } from "../actions/auth-actions";

const initialState = {
  user: null,
  requestPending: false,
  requestError: false,
  authChecked: false,
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case requestAction("request").type:
      return {
        ...state,
        requestPending: true,
      };
    case requestAction("error").type:
      return {
        ...state,
        requestPending: false,
        requestError: true,
        authChecked: true,
      };
    case requestAction("success").type:
      return {
        ...state,
        requestPending: false,
        requestError: false,
        authChecked: true,
        user: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
