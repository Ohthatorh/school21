import styles from "./app-header-nav.module.scss";
import { FC } from "react";
import { AppHeaderNavLink } from "./app-header-nav-link/app-header-nav-link";

interface IAppHeaderNav {}

export const AppHeaderNav: FC<IAppHeaderNav> = () => {
  return (
    <div className={styles.nav__container}>
      <div className="container">
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <AppHeaderNavLink href={"/"} text={"Главная"} />
            </li>
            <li className={styles.nav__item}>
              <AppHeaderNavLink href={"/school"} text={"Школа"} />
            </li>
            <li className={styles.nav__item}>
              <AppHeaderNavLink href={"/s"} text={"Сведения об организации"} />
            </li>
            <li className={styles.nav__item}>
              <AppHeaderNavLink href={"/asd"} text={"Обучающимся"} />
            </li>
            <li className={styles.nav__item}>
              <AppHeaderNavLink href={"/asd"} text={"Родителям"} />
            </li>
            <li className={styles.nav__item}>
              <AppHeaderNavLink href={"/sad"} text={"Поступающим"} />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
