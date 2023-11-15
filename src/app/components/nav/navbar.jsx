"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import "./navbar.css"
import styles from "./navbar.module.css"

export const Navbar = () => {
  const pathname = usePathname()
  return (
    <nav>
      <Link href="/" className={styles.title}>Tracker Website</Link>
      <ul>
        <li>
          <Link href="/league-of-legends" className={pathname === '/league-of-legends' ? styles.active : ''}>League of Legends</Link>
        </li>
        <li>
          <Link href="/rocket-league" className={pathname === '/rocket-league"' ? styles.active : ''}>Rocket League</Link>
        </li>
        <li>
          <Link href="/counter-strike" className={pathname === '/counter-strike' ? styles.active : ''}>Counter Strike</Link>
        </li>
      </ul>
      <div className={styles["nav-divider"]}></div>
      <Link href="/login" className={styles["login-btn"]}>Log in</Link>
    </nav>
  );
}
