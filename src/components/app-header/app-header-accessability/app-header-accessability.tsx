import { Glasses } from "lucide-react";
import styles from "./app-header-accessability.module.scss";
import { FC } from "react";

interface IAppHeaderAccessability {}

export const AppHeaderAccessability: FC<IAppHeaderAccessability> = () => {
  return (
    <div className={styles.accessability__container}>
      <button className={styles.accessability__button}>
        <Glasses className={styles.accessability__icon} color={"#fff"} />
        <span>ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ</span>
      </button>
    </div>
  );
};
