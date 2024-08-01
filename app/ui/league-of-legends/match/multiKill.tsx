import styles from "../profile.module.css";
import { MatchStats } from "@/app/lib/definitions";

export function MultiKill({ match }: { match: MatchStats }) {
  let isMultiKill = true;
  const { multiKill } = match;

  if (multiKill === null) {
    isMultiKill = false;
  }

  return (
    <>
      {isMultiKill && (
        <div className={styles["multikill-placeholder"]}>
          <div
            className={`${styles["multikill-container"]} ${
              multiKill === "PENTAKILL" ? styles["pentakill"] : null
            }`}
          >
            <span className={styles["multikill-title"]}>{multiKill}</span>
          </div>
        </div>
      )}
    </>
  );
}
