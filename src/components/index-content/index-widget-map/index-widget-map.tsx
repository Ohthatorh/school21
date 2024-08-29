import styles from "./index-widget-map.module.scss";
import { FC } from "react";

interface IIndexWidgetMap {}

export const IndexWidgetMap: FC<IIndexWidgetMap> = () => {
  return (
    <div
      className={styles.map}
      dangerouslySetInnerHTML={{
        __html: `<div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/org/srednyaya_obshcheobrazovatelnaya_shkola_21/1071762754/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Средняя общеобразовательная школа № 21</a><a href="https://yandex.ru/maps/7/kostroma/category/school/184106240/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">Общеобразовательная школа в Костроме</a><iframe src="https://yandex.ru/map-widget/v1/org/srednyaya_obshcheobrazovatelnaya_shkola_21/1071762754/?ll=40.909359%2C57.739023&z=16" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>`,
      }}
    ></div>
  );
};
