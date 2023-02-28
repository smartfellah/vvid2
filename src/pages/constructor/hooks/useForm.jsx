import { useState } from "react";

export function useForm(initFormState) {
  const [values, setValues] = useState(initFormState);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;

    let value;
    if (target.type === "checkbox") {
      value = target.checked;
    } else if (target.type === "radio") {
      value = target.value;
    } else value = target.value;

    setValues({ ...values, [name]: value });
  };

  return { values, handleChange, setValues };
}
