import styles from "./app-header.module.css";
import { NavLink } from "react-router-dom";

import { ProfileIcon } from "../profile-icon/profile-icon";

import { Logo } from "../logo/logo";
export function AppHeader() {
  return (
    <header className={`${styles["header"]}`}>
      <div className={`${styles["navbar"]}`}>
        <NavLink to="/" end>
          {({ isActive }) => {
            return (
              <div className={`${styles["logo-box"]}`}>
                <Logo isActive={false} />
              </div>
            );
          }}
        </NavLink>
        <nav className={`${styles["navbar_menu-container"]}`}>
          <ul className={`${styles["navbar_menu"]}`}>
            <li className={`${styles["menu-item"]}`}>
              <NavLink to="/" end>
                {({ isActive }) => {
                  return (
                    <div
                      className={`${
                        isActive
                          ? styles["menu-item_content_active"]
                          : styles["menu-item_content"]
                      }`}
                    >
                      Главная
                    </div>
                  );
                }}
              </NavLink>
            </li>
            <li className={`${styles["menu-item"]}`}>
              <NavLink to="/docs" end>
                {({ isActive }) => {
                  return (
                    <div
                      className={`${
                        isActive
                          ? styles["menu-item_content_active"]
                          : styles["menu-item_content"]
                      }`}
                    >
                      Документация
                    </div>
                  );
                }}
              </NavLink>
            </li>
            <li className={`${styles["menu-item"]}`}>
              <NavLink to="/constructor" end>
                {({ isActive }) => {
                  return (
                    <div
                      className={`${
                        isActive
                          ? styles["menu-item_content_active"]
                          : styles["menu-item_content"]
                      }`}
                    >
                      Конструктор
                    </div>
                  );
                }}
              </NavLink>
            </li>
            <li className={`${styles["menu-item"]}`}>
              <NavLink to="/profile">
                {({ isActive }) => {
                  return <ProfileIcon isActive={isActive} />;
                }}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
