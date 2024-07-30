import Image from "next/image";
import styles from "../profile.module.css";

import { MatchStats } from "@/app/lib/definitions";

export function GCC({ match }: { match: MatchStats }) {
  const { gold, creepScore, creepScorePerMin, controlWards } = match;

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
        {creepScore} ({creepScorePerMin})
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
