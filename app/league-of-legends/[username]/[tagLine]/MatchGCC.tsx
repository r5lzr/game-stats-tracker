import Image from "next/image";
import styles from "./page.module.css";
import { MatchInfo } from "./page";
import { PlayerParams } from "./page";

export function MatchGCC({
  match,
  params,
}: {
  match: MatchInfo;
  params: PlayerParams;
}) {
  let gold = null;
  let creepScore = null;
  let creepScorePerMinute = null;
  let controlWards = null;

  match.info.participants.forEach((item) => {
    if (item.riotIdGameName === params.username) {
      gold = item.goldEarned;

      creepScore = item.totalMinionsKilled;
      const minutes = Math.floor(match.info.gameDuration / 60);
      const seconds = match.info.gameDuration % 60;
      creepScorePerMinute = (creepScore / (minutes + seconds / 60)).toFixed(1);

      controlWards = item.challenges.controlWardsPlaced;
    }
  });

  return (
    <div className={styles["gcc-container"]}>
      <div className={styles["gold-income"]}>
        <Image
          src={`/images/match/emoney.png`}
          width={16}
          height={16}
          className={styles["gold-styling"]}
          alt="gold"
        />
        {gold}
      </div>
      <div className={styles["creep-score"]}>
        <Image
          src={`/images/match/minion.png`}
          width={16}
          height={16}
          className={styles["cs-styling"]}
          alt="creep score"
        />
        {creepScore} ({creepScorePerMinute})
      </div>
      <div className={styles["control-wards"]}>
        <Image
          src={`/images/match/controlward.png`}
          width={16}
          height={16}
          className={styles["cw-styling"]}
          alt="control ward"
        />
        {controlWards}
      </div>
    </div>
  );
}
