import styles from "./app-footer.module.scss";
import { FC } from "react";

interface IAppFooter {}

export const AppFooter: FC<IAppFooter> = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__content}>
          <div className={styles.footer__text_container}>
            <p className={styles.footer__text}>
              © 2017-2024, Муниципальное бюджетное общеобразовательное
              учреждение города Костромы Средняя общеобразовательная школа №21
            </p>
            <p className={styles.footer__text}>
              При использовании материалов прямая гиперссылка обязательна.
            </p>
          </div>
          <div className={styles.footer__tel_container}>
            <p className={styles.footer__text}>
              Единый всероссийский телефон доверия
            </p>
            <a href="tel:88002000112" className={styles.footer__tel}>
              8-800-2000-122
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
