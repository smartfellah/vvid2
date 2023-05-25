// import { requestAction } from "../actions/auth-actions";

import { createSlice } from "@reduxjs/toolkit";

type TAuthState = {
  user: string | null;
  requestPending: boolean;
  requestError: boolean;
  authChecked: boolean;
};

const initialState = {
  user: null,
  requestPending: false,
  requestError: false,
  authChecked: false,
} as TAuthState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    request(state) {
      state.requestPending = true;
    },
    error(state) {
      state.requestError = true;
    },
    success(state, action) {
      state.requestPending = false;
      state.requestError = false;
      state.authChecked = true;
      state.user = action.payload;
    },
  },
});

export const { request, error, success } = authSlice.actions;
export default authSlice.reducer;

// export function authReducer(state = initialState, action) {
//   switch (action.type) {
//     case requestAction("request").type:
//       return {
//         ...state,
//         requestPending: true,
//       };
//     case requestAction("error").type:
//       return {
//         ...state,
//         requestPending: false,
//         requestError: true,
//         authChecked: true,
//       };
//     case requestAction("success").type:
//       return {
//         ...state,
//         requestPending: false,
//         requestError: false,
//         authChecked: true,
//         user: action.payload,
//       };
//     default:
//       return {
//         ...state,
//       };
//   }
// }
