import styles from "./styles/profile.module.css";
import { NavLink, Outlet } from "react-router-dom";
export function Profile() {
  return (
    <>
      <div>
        <header className={`${styles["profile-header"]}`}>
          <ul className={`${styles["profile-nav"]}`}>
            <li className={`${styles["profile-nav_item"]}`}>
              <NavLink
                to=""
                className={({ isActive }) =>
                  isActive
                    ? `${styles["nav-item_link"]} ${styles["nav-item_link_active"]}`
                    : `${styles["nav-item_link"]}`
                }
                end
              >
                Личная информация
              </NavLink>
            </li>
            <li className={`${styles["profile-nav_item"]}`}>
              <NavLink
                to="snippet-redactor"
                className={({ isActive }) =>
                  isActive
                    ? `${styles["nav-item_link"]} ${styles["nav-item_link_active"]}`
                    : `${styles["nav-item_link"]}`
                }
              >
                Редактор сниппетов
              </NavLink>
            </li>
            <li className={`${styles["profile-nav_item"]}`}>
              <NavLink
                to="options"
                className={({ isActive }) =>
                  isActive
                    ? `${styles["nav-item_link"]} ${styles["nav-item_link_active"]}`
                    : `${styles["nav-item_link"]}`
                }
              >
                Настройки
              </NavLink>
            </li>
            <li className={`${styles["profile-nav_item"]}`}>
              <button>Выход</button>
            </li>
          </ul>
        </header>
      </div>
      <Outlet />
    </>
  );
}
