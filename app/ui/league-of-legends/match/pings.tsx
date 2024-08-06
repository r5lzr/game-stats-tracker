import Image from "next/image";
import styles from "../profile.module.css";
import { MatchStats } from "@/app/lib/definitions";

export function Pings({ match }: { match: MatchStats }) {
  const {
    visionPings,
    pushPings,
    dangerPings,
    pathingPings,
    assistPings,
    missingPings,
  } = match;

  return (
    <>
      <div className={styles["ping-column"]}>
        <div className={styles["vision-ping"]}>
          <Image
            src={`/images/match/vision.png`}
            width={20}
            height={20}
            alt="vision"
          />
          {visionPings}
        </div>
        <div className={styles["pathing-ping"]}>
          <Image
            src={`/images/match/pathing.png`}
            width={20}
            height={20}
            alt="pathing"
          />
          {pathingPings}
        </div>
      </div>
      <div className={styles["ping-column"]}>
        <div className={styles["push-ping"]}>
          <Image
            src={`/images/match/push.png`}
            width={20}
            height={20}
            alt="push"
          />
          {pushPings}
        </div>
        <div className={styles["assist-ping"]}>
          <Image
            src={`/images/match/assist.png`}
            width={20}
            height={20}
            alt="assist"
          />
          {assistPings}
        </div>
      </div>
      <div className={styles["ping-column"]}>
        <div className={styles["danger-ping"]}>
          <Image
            src={`/images/match/danger.png`}
            width={20}
            height={20}
            alt="danger"
          />
          {dangerPings}
        </div>
        <div className={styles["missing-ping"]}>
          <Image
            src={`/images/match/missing.png`}
            width={20}
            height={20}
            alt="missing"
          />
          {missingPings}
        </div>
      </div>
    </>
  );
}
