"use client";

import Link from "next/link";
import "./navbar.css";
import styles from "./navbar.module.css";

export const Navbar = () => {
  return (
    <nav>
      <Link href="/" className={styles.title}>
        <span className={styles.name}>METRICS</span>
        <span className={styles.domain}>.GA</span>
      </Link>
    </nav>
  );
};
