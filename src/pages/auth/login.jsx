import { useForm } from "../constructor/hooks/useForm";
import { useNavigate } from "react-router-dom";

export function Login() {
  const { values, handleChange } = useForm({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const onRegisterClick = (e) => {
    e.preventDefault();
    navigate("/register");
  };
  return (
    <div>
      <div>
        <h1>Введите имейл и пороль</h1>
        <label>
          <input
            placeholder="cumdrainer@test.com"
            type="email"
            value={values.email}
            name="email"
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            placeholder="********"
            type="password"
            value={values.passwrord}
            name="password"
            onChange={handleChange}
          />
        </label>
      </div>
      <button onClick={onRegisterClick} style={{ cursor: "pointer" }}>
        Зарегистрироваться
      </button>
    </div>
  );
}
