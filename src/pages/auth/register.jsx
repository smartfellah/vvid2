import { useForm } from "../constructor/hooks/useForm";

export function Register() {
  const { values, handleChange } = useForm({
    login: "",
    email: "",
    password: "",
  });
  return (
    <div>
      <div>
        <h1>Введите имейл и пороль</h1>
        <label>
          <input
            placeholder="cumdrainer"
            type="text"
            value={values.login}
            name="login"
            onChange={handleChange}
          />
        </label>
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
    </div>
  );
}
