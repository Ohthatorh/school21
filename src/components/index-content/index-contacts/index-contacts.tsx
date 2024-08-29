import styles from "./index-contacts.module.scss";
import { FC } from "react";

interface IIndexContacts {}

export const IndexContacts: FC<IIndexContacts> = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.contacts__content}>
          <div className={styles.contacts__item}>
            <div className={styles.contacts__title__container}>
              <h2 className={styles.contacts__title}>Наши контакты</h2>
            </div>
            <div className={styles.contacts__item__content}>
              <div className={styles.contacts__text__container}>
                <div className={styles.contacts__job}>
                  <p className={styles.contacts__text_grey}>Директор</p>
                </div>
                <p className={styles.contacts__text}>
                  Морозова Людмила Анатольевна
                </p>
                <a href="tel:84942531992" className={styles.contacts__text}>
                  <p className={styles.contacts__text_grey}>Тел.:</p>8(4942)
                  53-19-92
                </a>
                <a
                  href="mailto:mousoch21@mail.ru"
                  className={styles.contacts__text}
                >
                  <p className={styles.contacts__text_grey}>Email:</p>
                  mousoch21@mail.ru
                </a>
              </div>
              <div className={styles.contacts__text__container}>
                <div className={styles.contacts__job}>
                  <p className={styles.contacts__text_grey}>
                    Заведующая канцелярией
                  </p>
                </div>
                <p className={styles.contacts__text}>
                  Благодарева Людмила Владимировна
                </p>
                <a href="tel:84942531992" className={styles.contacts__text}>
                  <p className={styles.contacts__text_grey}>Тел.:</p>8(4942)
                  53-19-92
                </a>
                <a
                  href="mailto:mousoch21@mail.ru"
                  className={styles.contacts__text}
                >
                  <p className={styles.contacts__text_grey}>Email:</p>
                  mousoch21@mail.ru
                </a>
              </div>
            </div>
          </div>
          <div className={styles.contacts__item}>
            <div className={styles.contacts__title__container}>
              <h2 className={styles.contacts__title}>
                Дополнительные контакты
              </h2>
            </div>
            <div className={styles.contacts__item__content}>
              <div className={styles.contacts__text__container}>
                <div className={styles.contacts__job}>
                  <p className={styles.contacts__text_grey}>
                    По вопросам содержания и качества образования
                  </p>
                </div>
                <p className={styles.contacts__text}>
                  Голубева Марина Борисовна
                </p>
                <p className={styles.contacts__text}>
                  Новикова Людмила Алексеевна
                </p>
                <a href="tel:84942532212" className={styles.contacts__text}>
                  <p className={styles.contacts__text_grey}>Тел.:</p>8(4942)
                  53-22-12
                </a>
                <a
                  href="mailto:mousoch21@mail.ru"
                  className={styles.contacts__text}
                >
                  <p className={styles.contacts__text_grey}>Email:</p>
                  mousoch21@mail.ru
                </a>
              </div>
              <div className={styles.contacts__text__container}>
                <div className={styles.contacts__job}>
                  <p className={styles.contacts__text_grey}>
                    По вопросам питания
                  </p>
                </div>
                <p className={styles.contacts__text}>Вовк Светлана Андреевна</p>
                <a href="tel:84942532971" className={styles.contacts__text}>
                  <p className={styles.contacts__text_grey}>Тел.:</p>8(4942)
                  53-29-71
                </a>
                <a
                  href="mailto:mousoch21@mail.ru"
                  className={styles.contacts__text}
                >
                  <p className={styles.contacts__text_grey}>Email:</p>
                  mousoch21@mail.ru
                </a>
              </div>
              <div className={styles.contacts__text__container}>
                <div className={styles.contacts__job}>
                  <p className={styles.contacts__text_grey}>
                    По вопросам воспитания, дополнительного образования и
                    социализации
                  </p>
                </div>
                <p className={styles.contacts__text}>
                  Завьялова Наталья Александровна
                </p>
                <a href="tel:84942531992" className={styles.contacts__text}>
                  <p className={styles.contacts__text_grey}>Тел.:</p>8(4942)
                  53-19-92
                </a>
                <a
                  href="mailto:mousoch21@mail.ru"
                  className={styles.contacts__text}
                >
                  <p className={styles.contacts__text_grey}>Email:</p>
                  mousoch21@mail.ru
                </a>
              </div>
              <div className={styles.contacts__text__container}>
                <div className={styles.contacts__job}>
                  <p className={styles.contacts__text_grey}>
                    Вахта/медицинский работник
                  </p>
                </div>
                <p className={styles.contacts__text}>
                  Завьялова Наталья Александровна
                </p>
                <a href="tel:84942533772" className={styles.contacts__text}>
                  <p className={styles.contacts__text_grey}>Тел.:</p>8(4942)
                  53-37-72
                </a>
                <a
                  href="mailto:mousoch21@mail.ru"
                  className={styles.contacts__text}
                >
                  <p className={styles.contacts__text_grey}>Email:</p>
                  mousoch21@mail.ru
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
