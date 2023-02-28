import styles from "../styles/constructor.module.css";
import { useForm } from "./hooks/useForm";

export function Constructor() {
  const { values, handleChange } = useForm({
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
  });

  return (
    <div className={`${styles.constructor_container}`}>
      {/* Constructor header */}
      <header className={`${styles.constructor_header}`}>
        <menu className={`${styles["header_lang-menu"]}`}>
          <button
            className={`${styles["lang-menu_button"]} ${styles["lang-menu_button_active"]}`}
          >
            Solana
          </button>
          <button className={`${styles["lang-menu_button"]}`}>
            Hyperledger Fabric
          </button>
        </menu>
        <menu className={`${styles["header_action-menu"]}`}>
          <button className={`${styles["action-menu_button"]}`}>
            Copy to clipboard
          </button>
          <button className={`${styles["action-menu_button"]}`}>
            Download
          </button>
        </menu>
      </header>

      {/* Constructor body */}
      <div className={`${styles.constructor_body}`}>
        {/*Constructor options*/}
        <div className={`${styles["body_controls"]}`}>
          <section className={`${styles["controls-section"]}`}>
            <h1 className={`${styles["section-header"]}`}>Настройки</h1>
            <div className={`${styles["settings-grid-container"]}`}>
              <label>
                <span className={`${styles["label-span"]}`}>Имя</span>
                <input
                  onChange={handleChange}
                  className={`${styles["text-input"]}`}
                  value={values.settingsTextField_left}
                  name="settingsTextField_left"
                />
              </label>
              <label>
                {" "}
                <span className={`${styles["label-span"]}`}>Символ</span>
                <input
                  onChange={handleChange}
                  value={values.settingsTextField_right}
                  name="settingsTextField_right"
                  className={`${styles["text-input"]}`}
                />
              </label>
            </div>
            <label>
              <span className={`${styles["label-span"]}`}>Символ</span>
              <input
                onChange={handleChange}
                value={values.settingsTextField_bottom}
                name="settingsTextField_bottom"
                className={`${styles["text-input"]}`}
              />
            </label>
          </section>

          <section className={`${styles["controls-section"]}`}>
            <h1 className={`${styles["section-header"]}`}>Параметры</h1>
            <div className={`${styles["checkbox-group"]}`}>
              <label className={`${styles["checkbox-container"]}`}>
                <input
                  className={`${styles["checkmark"]}`}
                  type="checkbox"
                  onChange={handleChange}
                  value={values.checkbox1}
                  name="checkbox1"
                />
                Чекбокс 1
              </label>
              <label className={`${styles["checkbox-container"]}`}>
                <input
                  className={`${styles["checkmark"]}`}
                  type="checkbox"
                  onChange={handleChange}
                  value={values.checkbox2}
                  name="checkbox2"
                />
                Чекбокс 2
              </label>
              <label className={`${styles["checkbox-container"]}`}>
                <input
                  className={`${styles["checkmark"]}`}
                  type="checkbox"
                  onChange={handleChange}
                  value={values.checkbox3}
                  name="checkbox3"
                />
                Чекбокс 3
              </label>
              <label className={`${styles["checkbox-container"]}`}>
                <input
                  className={`${styles["checkmark"]}`}
                  type="checkbox"
                  onChange={handleChange}
                  value={values.checkbox4}
                  name="checkbox4"
                />
                Чекбокс 4
              </label>
              <label className={`${styles["checkbox-container"]}`}>
                <input
                  className={`${styles["checkmark"]}`}
                  type="checkbox"
                  onChange={handleChange}
                  value={values.checkbox5}
                  name="checkbox5"
                />
                Чекбокс 5
              </label>
            </div>
          </section>

          <section className={`${styles["controls-section"]}`}>
            <h1 className={`${styles["section-header"]}`}>Контроль доступа</h1>
            <div className={`${styles["checkbox-group"]}`}>
              <label className={`${styles["radio-container"]}`}>
                <input
                  className={`${styles["radio-mark"]}`}
                  type="radio"
                  name="radio"
                  onChange={handleChange}
                  value="variant1"
                />
                Вариант 1
              </label>
              <label className={`${styles["radio-container"]}`}>
                <input
                  className={`${styles["radio-mark"]}`}
                  type="radio"
                  name="radio"
                  onChange={handleChange}
                  value="variant2"
                />
                Вариант 2
              </label>
            </div>
          </section>

          <section className={`${styles["controls-section"]}`}>
            <h1 className={`${styles["section-header"]}`}>Инфо</h1>
            <label>
              <span className={`${styles["label-span"]}`}>Инфо 1</span>
              <input
                onChange={handleChange}
                name="info1"
                value={values.info2}
                className={`${styles["text-input"]}`}
                placeholder="hmm"
              />
            </label>
            <label>
              <span className={`${styles["label-span"]}`}>Инфо 2</span>
              <input
                onChange={handleChange}
                name="info2"
                value={values.info2}
                className={`${styles["text-input"]}`}
                placeholder="hmmmmm"
              />
            </label>
          </section>
        </div>
        <div className={`${styles["body_output"]}`}>
          <code>Something</code>
        </div>
      </div>
    </div>
  );
}
