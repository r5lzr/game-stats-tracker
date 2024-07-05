import styles from "./page.module.css";

export function MatchKda({ match, params }) {
  let kills = null;
  let deaths = null;
  let assists = null;
  let kdaRatio = null;
  let kpRatio = null;

  match.info.participants.forEach((item) => {
    if (item.riotIdGameName === params.username) {
      kills = item.kills;
      deaths = item.deaths;
      assists = item.assists;

      kdaRatio = item.challenges.kda.toFixed(2);

      kpRatio = (item.challenges.killParticipation * 100).toFixed();
    }
  });

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
