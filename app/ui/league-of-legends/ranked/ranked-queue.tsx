import Image from "next/image";
import styles from "../profile.module.css";

const highRanks = ["CHALLENGER", "GRANDMASTER", "MASTER"];

export function RankedQueue({
  rankedInfo,
  label,
}: {
  rankedInfo: any[] | boolean;
  label: string;
}) {
  let rankedTier = null;
  let rankedRank = null;
  let rankedLP = null;
  let rankedWins = null;
  let rankedLosses = null;
  let rankedRatio = null;
  let showRank = true;

  if (Array.isArray(rankedInfo)) {
    rankedTier = rankedInfo[0];
    rankedRank = rankedInfo[1];
    rankedLP = rankedInfo[2];
    rankedWins = rankedInfo[3];
    rankedLosses = rankedInfo[4];

    rankedRatio = Math.ceil((rankedWins / (rankedWins + rankedLosses)) * 100);
  } else {
    rankedTier = "UNRANKED";
  }

  if (highRanks.includes(rankedTier)) {
    showRank = false;
  }

  return (
    <>
      <span className={styles["ranked-label"]}>{label}</span>
      <div className={styles["ranked-outcome"]}>
        <div className={styles["ranked-icon-container"]}>
          {rankedInfo && (
            <Image
              src={`/images/ranked/${rankedTier}.png`}
              fill
              sizes="50px"
              alt="rank-icon"
            />
          )}
        </div>
        <div className={styles["ranked-type-container"]}>
          <div className={styles["tier-rank-container"]}>
            <div className={styles["tier-title"]}>{rankedTier}</div>
            {showRank && (
              <div className={styles["division-title"]}>{rankedRank}</div>
            )}
            <div className={styles["LP-title"]}>{rankedLP}</div>
          </div>
          {rankedInfo && (
            <div className={styles["winloss-container"]}>
              <div className={styles["win-title"]}>
                {rankedWins}
                <span style={{ color: "var(--blue-color1)" }}>W</span>
              </div>
              <span style={{ color: "white" }}>-</span>
              <div className={styles["loss-title"]}>
                {rankedLosses}
                <span style={{ color: "var(--red-color1)" }}>L</span>
              </div>
              <div className={styles["ratio-title"]}>({rankedRatio}%)</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
