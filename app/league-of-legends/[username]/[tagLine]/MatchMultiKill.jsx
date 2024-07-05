import styles from "./page.module.css";

export function MatchMultiKill({ match, params }) {
  let isMultiKill = false;
  let multiKillType = null;
  let multiKill = null;

  const participant = match.info.participants.find(
    (player) => player.riotIdGameName === params.username
  );

  if (participant) {
    multiKillType =
      participant.pentaKills ||
      participant.quadraKills ||
      participant.tripleKills ||
      participant.doubleKills;

    switch (multiKillType) {
      case participant.pentaKills:
        multiKill = "PENTAKILL";
        break;
      case participant.quadraKills:
        multiKill = "Quadra kill";
        break;
      case participant.tripleKills:
        multiKill = "Triple kill";
        break;
      case participant.doubleKills:
        multiKill = "Double kill";
        break;
      default:
        multiKill = "Unknown";
        break;
    }

    isMultiKill = true;
  }

  return (
    <>
      {isMultiKill && (
        <div
          className={`${styles["multikill-container"]} ${
            multiKill === "PENTAKILL" ? styles["pentakill"] : null
          }`}
        >
          <span className={styles["multikill-title"]}>{multiKill}</span>
        </div>
      )}
    </>
  );
}
