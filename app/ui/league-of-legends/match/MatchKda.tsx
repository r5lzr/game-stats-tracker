import styles from "../profile.module.css";
import { MatchStats } from "@/app/lib/definitions";

export function MatchKda({ match }: { match: MatchStats }) {
  const { kills, deaths, assists, kdaRatio, kpRatio } = match;

  return (
    <div className={styles["kda-container"]}>
      <div className={styles["kda-num"]}>
        {kills}
        <span className={styles["kda-slash"]}> / </span>
        <span className={styles["kda-death"]}>{deaths}</span>
        <span className={styles["kda-slash"]}> / </span>
        {assists}
      </div>
      <div className={styles["kda-ratio"]}>{kdaRatio} KDA</div>
      <div className={styles["kp-ratio"]}>{kpRatio}% KP</div>
    </div>
  );
}
