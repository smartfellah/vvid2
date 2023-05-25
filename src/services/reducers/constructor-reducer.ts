// import { FORM_CHANGED } from "../actions/constructor-actions";

import { createSlice } from "@reduxjs/toolkit";

type TConstructorState = {
  settingsTextField_left: string;
  settingsTextField_right: string;
  settingsTextField_bottom: string;
  checkbox1: boolean;
  checkbox2: boolean;
  checkbox3: boolean;
  checkbox4: boolean;
  checkbox5: boolean;
  radio: string;
  info1: string;
  info2: string;
};

const initialState: TConstructorState = {
  settingsTextField_left: "",
  settingsTextField_right: "",
  settingsTextField_bottom: "",
  checkbox1: false,
  checkbox2: false,
  checkbox3: false,
  checkbox4: false,
  checkbox5: false,
  radio: "",
  info1: "",
  info2: "",
};

const constructorSlice = createSlice({
  name: "constructor",
  initialState,
  reducers: {
    formChanged(state, action) {
      state = { ...state, ...action.payload };
    },
  },
});

export const { formChanged } = constructorSlice.actions;
export default constructorSlice.reducer;
// export function constructorReducer(state = initialState, action) {
//   switch (action.type) {
//     case FORM_CHANGED:
//       return {
//         ...state,
//         ...action.payload,
//       };
//     default:
//       return { ...state };
//   }
// }
