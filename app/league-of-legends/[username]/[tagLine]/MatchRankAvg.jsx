import Image from "next/image";
import styles from "./page.module.css";

export function MatchRankAvg({ matchAvg, rankBaseline }) {
  let avgRankTitle = null;
  let rankEmblem = null;

  const matchAvgRounded = Math.ceil(matchAvg / 100) * 100;

  for (const rank in rankBaseline) {
    if (rankBaseline[rank] === matchAvgRounded) {
      avgRankTitle = rank;
      rankEmblem = avgRankTitle.slice(0, avgRankTitle.indexOf("-"));
      break;
    }
  }

  return (
    <>
      {rankEmblem && (
        <Image
          src={`/images/ranked/${rankEmblem}.png`}
          width={35}
          height={35}
          alt="rank-emblem"
        />
      )}
      <span className={styles["matchrank-title"]}>{avgRankTitle}</span>
    </>
  );
}
