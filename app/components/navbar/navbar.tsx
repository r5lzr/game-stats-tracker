"use client";

import Link from "next/link";
import "./navbar.css";
import styles from "./navbar.module.css";
import { GrLogin } from "react-icons/gr";

export const Navbar = () => {
  return (
    <nav>
      <Link href="/" className={styles.title}>
        <span className={styles.name}>METRICS</span>
        <span className={styles.domain}>.GA</span>
      </Link>
      <Link href="/login" className={styles["login-btn"]}>
        Login
        <span className={styles["login-icon"]}>
          <GrLogin size={30} />
        </span>
      </Link>
    </nav>
  );
};
