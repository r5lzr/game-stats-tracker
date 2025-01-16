import styles from "../profile.module.css";
import { MatchStats } from "@/app/lib/definitions";

type KDA = Pick<
  MatchStats,
  "kills" | "deaths" | "assists" | "kdaRatio" | "kpRatio"
>;

export function KDA({ match }: { match: KDA }) {
  const { kills, deaths, assists, kdaRatio, kpRatio } = match;

  return (
    <div className={styles["kda-container"]}>
      <div className={styles["kda-num"]}>
        <span data-testid="kda-kills">{kills}</span>
        <span className={styles["kda-slash"]} data-testid="kda-slash1">
          {" "}
          /{" "}
        </span>
        <span className={styles["kda-death"]} data-testid="kda-death">
          {deaths}
        </span>
        <span className={styles["kda-slash"]} data-testid="kda-slash2">
          {" "}
          /{" "}
        </span>
        <span data-testid="kda-assists">{assists}</span>
      </div>
      <div className={styles["kda-ratio"]}>{kdaRatio} KDA</div>
      <div className={styles["kp-ratio"]}>{kpRatio}% KP</div>
    </div>
  );
}
