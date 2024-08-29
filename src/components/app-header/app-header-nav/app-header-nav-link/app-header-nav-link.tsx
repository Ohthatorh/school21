"use client";

import Link from "next/link";
import styles from "./app-header-nav-link.module.scss";
import { FC } from "react";
import classNames from "classnames";
import { usePathname } from "next/navigation";

interface IAppHeaderNavLink {
  href: string;
  text: string;
}

export const AppHeaderNavLink: FC<IAppHeaderNavLink> = ({ href, text }) => {
  const pathname = usePathname();
  const linkStyles = classNames({
    [styles.link]: true,
    [styles.link_active]: href === pathname,
  });
  return (
    <Link href={href} className={linkStyles}>
      {text}
    </Link>
  );
};
