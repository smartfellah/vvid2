import styles from "../styles/constructor.module.css";

export function Constructor() {
  return (
    <div className={`${styles.constructor_container}`}>
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
      <div className={`${styles.constructor_body}`}>
        <div className={`${styles["body_controls"]}`}>
          <section className={`${styles["controls-section"]}`}>
            <h1 className={`${styles["section-header"]}`}>Настройки</h1>
            <div className={`${styles["settings-grid-container"]}`}>
              <label htmlFor="">
                <span className={`${styles["label-span"]}`}>Имя</span>
                <input className={`${styles["text-input"]}`} />
              </label>
              <label htmlFor="">
                {" "}
                <span className={`${styles["label-span"]}`}>Символ</span>
                <input className={`${styles["text-input"]}`} />
              </label>
            </div>
            <label htmlFor="">
              <span className={`${styles["label-span"]}`}>Символ</span>
              <input className={`${styles["text-input"]}`} />
            </label>
          </section>

          <section className={`${styles["controls-section"]}`}>
            <h1 className={`${styles["section-header"]}`}>Параметры</h1>
            <div className={`${styles["checkbox-group"]}`}>
              <label className={`${styles["checkbox-container"]}`} htmlFor="">
                <input
                  className={`${styles["checkmark"]}`}
                  type="checkbox"
                  name="checkbox1"
                  id="1"
                />
                Чекбокс 1
              </label>
              <label className={`${styles["checkbox-container"]}`} htmlFor="">
                <input
                  className={`${styles["checkmark"]}`}
                  type="checkbox"
                  name="checkbox2"
                  id="2"
                />
                Чекбокс 2
              </label>
              <label className={`${styles["checkbox-container"]}`} htmlFor="">
                <input
                  className={`${styles["checkmark"]}`}
                  type="checkbox"
                  name="checkbox3"
                  id="3"
                />
                Чекбокс 3
              </label>
              <label className={`${styles["checkbox-container"]}`} htmlFor="">
                <input
                  className={`${styles["checkmark"]}`}
                  type="checkbox"
                  name="checkbox4"
                  id="4"
                />
                Чекбокс 4
              </label>
              <label className={`${styles["checkbox-container"]}`} htmlFor="">
                <input
                  className={`${styles["checkmark"]}`}
                  type="checkbox"
                  name="checkbox5"
                  id="5"
                />
                Чекбокс 5
              </label>
            </div>
          </section>

          {/* Controls section */}
          <section className={`${styles["controls-section"]}`}>
            <h1 className={`${styles["section-header"]}`}>Контроль доступа</h1>
            <div className={`${styles["checkbox-group"]}`}>
              <label className={`${styles["radio-container"]}`} htmlFor="">
                <input
                  className={`${styles["radio-mark"]}`}
                  type="radio"
                  name="variant1"
                  id=""
                />
                Вариант 1
              </label>
              <label className={`${styles["radio-container"]}`} htmlFor="">
                <input
                  className={`${styles["radio-mark"]}`}
                  type="radio"
                  name="variant1"
                  id=""
                />
                Вариант 2
              </label>
            </div>
          </section>
          <section className={`${styles["controls-section"]}`}>
            <h1 className={`${styles["section-header"]}`}>Инфо</h1>
            <label htmlFor="">
              <span className={`${styles["label-span"]}`}>Инфо 1</span>
              <input className={`${styles["text-input"]}`} placeholder="hmm" />
            </label>
            <label htmlFor="">
              <span className={`${styles["label-span"]}`}>Инфо 2</span>
              <input
                className={`${styles["text-input"]}`}
                placeholder="hmmmmm"
              />
            </label>
          </section>
        </div>
        <div className={`${styles["body_output"]}`}></div>
      </div>
    </div>
  );
}
