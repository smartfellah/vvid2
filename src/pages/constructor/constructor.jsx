import styles from "../styles/constructor.module.css";
import { useForm } from "./hooks/useForm";
import { useEffect } from "react";
import { CodeBlock } from "../../components/code-block/code-block";
import { useDispatch } from "react-redux";
import { FORM_CHANGED } from "../../services/actions/constructor-actions";
import Prism from "prismjs";

export function Constructor() {
  const dispatch = useDispatch();

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
  const code = `use solana_program::{
    account_info::AccountInfo,
    entrypoint,
    entrypoint::ProgramResult,
    pubkey::Pubkey,
    msg,
};

${values.settingsTextField_left}

// declare and export the program's entrypoint
entrypoint!(process_instruction);

${
  values.checkbox1
    ? `//Это просто тесты они тут не нужны
pub fn add(left: usize, right: usize) -> usize {
    left + right
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let result = add(2, 2);
        assert_eq!(result, 4);
    }
}
//Это просто тесты они тут не нужны

use solana_program::{
    account_info::{next_account_info, AccountInfo},     //AccountInfo - Структура данных (инфо об аккаунте), next_account-info - ф-ция позволяющая получить следующий элемент в итераторе с AccountInfo
    entrypoint, //указывает на ф-ция-обработчик инструкции
    entrypoint::ProgramResult,  //Возвращаемый тип
    program::invoke,    //ф-ция вызова межпрограммных инструкций
    program_error::ProgramError,        //enum с ошибками программы
    pubkey::Pubkey,     //Структура данных с инфомрацией об аккаунте
    system_instruction,     //модуль для взаимодействия с System program.
};

entrypoint!(process_instruction);

pub fn process_instruction (
    _program_id: &Pubkey,   //Адрес программы
    accounts: &[AccountInfo],   //массив аккаунтов
    instruction_data: &[u8],        //произвольный набор байтов
) -> ProgramResult {
    //Итератор
    let accounts_iter = &mut accounts.iter();
    //аккаунт отправителя
    let sender = next_account_info(accounts_iter)?;
    //аккаунт получателя
    let destination = next_account_info(accounts_iter)?;

    //Десериализируем набор байтов (я не знаю как это работает)
    let amount = instruction_data
    .get(..8)
    .and_then(|slice| slice.try_into().ok())
    .map(u64::from_le_bytes)
    .ok_or(ProgramError::InvalidInstructionData)?;

    //Инструкция о переводе lamports
    let transfer_instruction = system_instruction::transfer(
        sender.key,     //публичный адрес отправителя
        destination.key,    //публичный адрес получателя
        amount  //кол-во lamorts
    );
    //вызов межпрограммной инструкции на перевод  sol через System Program
    invoke(
        &transfer_instruction,
        &[sender.clone(), destination.clone()], //Передаем аккаунты получателя и отправителя
    )?;

    Ok(())
}


`
    : ""
}
// program entrypoint's implementation
pub fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8]
) -> ProgramResult {
    // log a message to the blockchain
    msg!("Hello, world!");

    // gracefully exit the program
    Ok(())
}
  `;

  function onFormChange(e) {
    handleChange(e);
    dispatch({ type: FORM_CHANGED, payload: values });
  }
  useEffect(() => {
    Prism.highlightAll();
  }, [values]);
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
                  onChange={onFormChange}
                  className={`${styles["text-input"]}`}
                  value={values.settingsTextField_left}
                  name="settingsTextField_left"
                />
              </label>
              <label>
                {" "}
                <span className={`${styles["label-span"]}`}>Символ</span>
                <input
                  onChange={onFormChange}
                  value={values.settingsTextField_right}
                  name="settingsTextField_right"
                  className={`${styles["text-input"]}`}
                />
              </label>
            </div>
            <label>
              <span className={`${styles["label-span"]}`}>Символ</span>
              <input
                onChange={onFormChange}
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
                  onChange={onFormChange}
                  value={values.checkbox1}
                  name="checkbox1"
                />
                Чекбокс 1
              </label>
              <label className={`${styles["checkbox-container"]}`}>
                <input
                  className={`${styles["checkmark"]}`}
                  type="checkbox"
                  onChange={onFormChange}
                  value={values.checkbox2}
                  name="checkbox2"
                />
                Чекбокс 2
              </label>
              <label className={`${styles["checkbox-container"]}`}>
                <input
                  className={`${styles["checkmark"]}`}
                  type="checkbox"
                  onChange={onFormChange}
                  value={values.checkbox3}
                  name="checkbox3"
                />
                Чекбокс 3
              </label>
              <label className={`${styles["checkbox-container"]}`}>
                <input
                  className={`${styles["checkmark"]}`}
                  type="checkbox"
                  onChange={onFormChange}
                  value={values.checkbox4}
                  name="checkbox4"
                />
                Чекбокс 4
              </label>
              <label className={`${styles["checkbox-container"]}`}>
                <input
                  className={`${styles["checkmark"]}`}
                  type="checkbox"
                  onChange={onFormChange}
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
                  onChange={onFormChange}
                  value="variant1"
                />
                Вариант 1
              </label>
              <label className={`${styles["radio-container"]}`}>
                <input
                  className={`${styles["radio-mark"]}`}
                  type="radio"
                  name="radio"
                  onChange={onFormChange}
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
                onChange={onFormChange}
                name="info1"
                value={values.info1}
                className={`${styles["text-input"]}`}
                placeholder="hmm"
              />
            </label>
            <label>
              <span className={`${styles["label-span"]}`}>Инфо 2</span>
              <input
                onChange={onFormChange}
                name="info2"
                value={values.info2}
                className={`${styles["text-input"]}`}
                placeholder="hmmmmm"
              />
            </label>
          </section>
        </div>
        <div className={`${styles["body_output"]}`}>
          <CodeBlock code={code} language="rust" />
        </div>
      </div>
    </div>
  );
}
