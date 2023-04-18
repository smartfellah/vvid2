import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendRequest } from "../../services/actions/auth-actions";
import { useForm } from "../constructor/hooks/useForm";
import styles from "./styles/form.module.css";

export function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { values, handleChange } = useForm({
    login: "",
    email: "",
    password: "",
  });

  const onLoginClick = (e) => {
    e.preventDefault();
    navigate("/login", { replace: true });
  };

  const onRegisterClick = (e) => {
    e.preventDefault();
    dispatch(sendRequest({ ...values }, "register"));
  };
  return (
    <div className={`${styles["form-wrapper"]}`}>
      <div className={`${styles["form_container"]}`}>
        <h1 className={`${styles["form_header"]}`}>Регистрация</h1>
        <div className={`${styles["form_body"]}`}>
          <label>
            <input
              className={`${styles["input"]}`}
              placeholder="cumdrainer"
              type="text"
              value={values.login}
              name="login"
              onChange={handleChange}
            />
          </label>
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
            onClick={onRegisterClick}
            style={{ cursor: "pointer" }}
          >
            Отправить
          </button>
          <button
            className={`${styles["button"]} ${styles["button_secondary"]}`}
            onClick={onLoginClick}
            style={{ cursor: "pointer" }}
          >
            Войти
          </button>
        </div>
      </div>
    </div>
  );
}
