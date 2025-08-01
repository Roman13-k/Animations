import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { navData } from "@/utils/nav";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            {navData.map((nav, index) => (
              <li key={index} className={styles.item}>
                <Link className={styles.link} href={nav.link}>
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
