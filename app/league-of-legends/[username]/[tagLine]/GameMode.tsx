import styles from "./page.module.css";

export function GameMode({ label }: { label: string }) {
  return <button className={styles["gamemode-tab"]}>{label}</button>;
}
