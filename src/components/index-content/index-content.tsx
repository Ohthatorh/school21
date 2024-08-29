import { IndexAchievements } from "./index-achievements/index-achievements";
import { IndexBanners } from "./index-banners/index-banners";
import styles from "./index-content.module.scss";
import { FC } from "react";
import { IndexHello } from "./index-hello/index-hello";
import { IndexWidgetMap } from "./index-widget-map/index-widget-map";
import { IndexContacts } from "./index-contacts/index-contacts";
import { IndexGosuslugi } from "./index-gosuslugi/index-gosuslugi";
import { IndexKazn } from "./index-kazn/index-kazn";
import { IndexNews } from "./index-news/index-news";

interface IIndexContent {}

export const IndexContent: FC<IIndexContent> = () => {
  return (
    <main>
      <IndexBanners />
      <IndexHello />
      <IndexAchievements />
      <IndexGosuslugi />
      <IndexNews />
      <IndexWidgetMap />
      <IndexContacts />
      <IndexKazn />
    </main>
  );
};
