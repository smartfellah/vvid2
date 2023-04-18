import { useForm } from "../constructor/hooks/useForm";
import { useNavigate } from "react-router-dom";
import { sendRequest } from "../../services/actions/auth-actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles/form.module.css";
import { useState } from "react";

export function Login() {
  const [reload, setReload] = useState(false);
  const { values, handleChange } = useForm({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegisterClick = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  const onLoginClick = (e) => {
    dispatch(sendRequest({ ...values }, "login"));
    setReload(!reload);
  };
  return (
    <div className={`${styles["form-wrapper"]}`}>
      <div className={`${styles["form_container"]}`}>
        <h1 className={`${styles["form_header"]}`}>Вход</h1>
        <div className={`${styles["form_body"]}`}>
          <label>
            <input
              className={`${styles["input"]}`}
              placeholder="cumdrainer@test.com"
              type="email"
              value={values.email}
              name="email"
              onChange={handleChange}
            />
          </label>
          <label>
            <input
              className={`${styles["input"]}`}
              placeholder="********"
              type="password"
              value={values.passwrord}
              name="password"
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={`${styles["form_buttons"]}`}>
          <button
            className={`${styles["button"]} ${styles["button_primary"]}`}
            onClick={onLoginClick}
            style={{ cursor: "pointer" }}
          >
            Отправить
          </button>
          <button
            className={`${styles["button"]} ${styles["button_secondary"]}`}
            onClick={onRegisterClick}
            style={{ cursor: "pointer" }}
          >
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  );
}
