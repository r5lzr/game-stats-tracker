"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import "./navbar.css"
import styles from "./navbar.module.css"

const NavLink = ({ href, children, ...props }) => {
  const pathname = usePathname()

  return <Link href={href} className={pathname === href ? styles.active : ''} {...props}>{children}</Link>
}

export const Navbar = () => {
  return (
    <nav>
      <Link href="/" className={styles.title}>Tracker Website</Link>
      <ul>
        <li>
          <NavLink href="/league-of-legends">League of Legends</NavLink>
        </li>
        <li>
          <NavLink href="/rocket-league">Rocket League</NavLink>
        </li>
        <li>
          <NavLink href="/counter-strike">Counter Strike</NavLink>
        </li>
      </ul>
      <div className={styles["nav-divider"]}></div>
      <Link href="/login" className={styles["login-btn"]}>Log in</Link>
    </nav>
  );
}
