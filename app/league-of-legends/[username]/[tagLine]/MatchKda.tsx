import styles from "./page.module.css";
import { MatchInfo } from "./page";
import { PlayerParams } from "./page";

export function MatchKda({
  match,
  params,
}: {
  match: MatchInfo;
  params: PlayerParams;
}) {
  let kills = null;
  let deaths = null;
  let assists = null;
  let kdaRatio = null;
  let kpRatio = null;

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
