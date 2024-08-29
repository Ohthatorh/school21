import { IndexAchievement } from "./index-achievement/index-achievement";
import styles from "./index-achievements.module.scss";
import { FC } from "react";

interface IIndexAchievements {}

export const IndexAchievements: FC<IIndexAchievements> = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Достижения школы</h2>
      </div>
      <div className={styles.achievements__content}>
        <div className="container">
          <div className={styles.achievements}>
            <IndexAchievement
              title={"69"}
              text={"Золотых медалей «За особые успехи в учении»"}
            />
            <IndexAchievement
              title={"40"}
              text={"Серебряных медалей «За особые успехи в учении»"}
            />
            <IndexAchievement
              title={"13"}
              text={"Выпускников, сдавших ЕГЭ на 100 баллов"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
