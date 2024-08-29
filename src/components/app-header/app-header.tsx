import styles from "./app-header.module.scss";
import { FC } from "react";
import { AppHeaderAccessability } from "./app-header-accessability/app-header-accessability";
import { AppHeaderLogo } from "./app-header-logo/app-header-logo";
import { AppHeaderText } from "./app-header-text/app-header-text";
import { AppHeaderNav } from "./app-header-nav/app-header-nav";

interface IAppHeader {}

export const AppHeader: FC<IAppHeader> = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className="container">
          <div className={styles.header__content}>
            <AppHeaderLogo />
            <AppHeaderText />
            <AppHeaderAccessability />
          </div>
        </div>
      </div>
      <AppHeaderNav />
    </header>
  );
};
