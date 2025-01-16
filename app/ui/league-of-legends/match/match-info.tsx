import styles from "../profile.module.css";
import { MatchStats } from "@/app/lib/definitions";

type MatchInfo = Pick<
  MatchStats,
  "outcome" | "queueInfo" | "relativeTime" | "gameDuration"
>;

export function MatchInfo({
  outcome,
  queueInfo,
  relativeTime,
  gameDuration,
}: MatchInfo) {
  return (
    <>
      <div className={styles["gamemode-label"]}>{queueInfo}</div>
      <div className={styles["days-label"]}>{relativeTime}</div>
      <div className={styles["gametime-label"]}>{gameDuration}</div>
      <div
        className={`${styles["outcome-label"]} ${
          outcome === "VICTORY" ? styles["victory"] : styles["defeat"]
        }`}
      >
        {outcome}
      </div>
    </>
  );
}
