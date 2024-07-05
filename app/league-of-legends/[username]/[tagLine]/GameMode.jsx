import styles from "./page.module.css";

export function GameMode({ label }) {
  return <button className={styles["gamemode-tab"]}>{label}</button>;
}
