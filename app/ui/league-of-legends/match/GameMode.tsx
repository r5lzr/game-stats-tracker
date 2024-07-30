import styles from "../profile.module.css";

export function GameMode({ label }: { label: string }) {
  return <button className={styles["gamemode-tab"]}>{label}</button>;
}
