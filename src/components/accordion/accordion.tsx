"use client";

import { ChevronDown } from "lucide-react";
import styles from "./accordion.module.scss";
import { FC, ReactElement, useRef, useState } from "react";

interface IAccordion {
  titleElement: ReactElement;
  body: ReactElement;
}

export const Accordion: FC<IAccordion> = ({ titleElement, body }) => {
  const contentHeight = useRef<any>();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div className={styles.accordion}>
      <button className={styles.accordion__title_button} onClick={handleClick}>
        {titleElement}
        <ChevronDown
          className={
            isOpen ? styles.accordion__icon_active : styles.accordion__icon
          }
        />
      </button>
      <div
        ref={contentHeight}
        className={styles.accordion__text_container}
        style={
          isOpen
            ? { height: contentHeight.current.scrollHeight }
            : { height: "0px" }
        }
      >
        {body}
      </div>
    </div>
  );
};
