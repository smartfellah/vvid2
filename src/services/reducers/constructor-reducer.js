import { FORM_CHANGED } from "../actions/constructor-actions";

const initialState = {
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

export function constructorReducer(state = initialState, action) {
  switch (action.type) {
    case FORM_CHANGED:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return { ...state };
  }
}
