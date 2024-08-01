import Image from "next/image";
import styles from "../profile.module.css";
import { MatchStats } from "@/app/lib/definitions";

export function Pings({ match }: { match: MatchStats }) {
  const { dangerPings, pathingPings, assistPings, missingPings } = match;

  return (
    <>
      <div className={styles["danger-ping"]}>
        <Image
          src={`/images/match/danger.png`}
          width={24}
          height={24}
          className={styles["danger-styling"]}
          alt="danger"
        />
        {dangerPings}
      </div>
      <div className={styles["pathing-ping"]}>
        <Image
          src={`/images/match/pathing.png`}
          width={24}
          height={24}
          className={styles["pathing-styling"]}
          alt="pathing"
        />
        {pathingPings}
      </div>
      <div className={styles["assist-ping"]}>
        <Image
          src={`/images/match/assist.png`}
          width={24}
          height={24}
          className={styles["assist-styling"]}
          alt="assist"
        />
        {assistPings}
      </div>
      <div className={styles["missing-ping"]}>
        <Image
          src={`/images/match/missing.png`}
          width={24}
          height={24}
          className={styles["missing-styling"]}
          alt="missing"
        />
        {missingPings}
      </div>
    </>
  );
}
