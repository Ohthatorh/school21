import styles from "./app-header-text.module.scss";
import { FC } from "react";

interface IAppHeaderText {}

export const AppHeaderText: FC<IAppHeaderText> = () => {
  return (
    <div className={styles.text__container}>
      <p className={styles.text_small}>
        Муниципальное бюджетное общеобразовательное учреждение города Костромы
      </p>
      <p className={styles.text}>{`"Средняя общеобразовательная школа №21"`}</p>
    </div>
  );
};
