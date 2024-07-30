import Image from "next/image";
import styles from "../profile.module.css";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import { Teams } from "./Teams";
// import { MatchRankAvg } from "./MatchRankAvg";
import { MatchKda } from "./MatchKda";
import { MatchMultiKill } from "./MatchMultiKill";
import { MatchGCC } from "./MatchGCC";
import { MatchSumRunes } from "./MatchSumRunes";
import { MatchSumSpells } from "./MatchSumSpells";
import { MatchChampIcon } from "./MatchChampIcon";
import { MatchItems } from "./MatchItems";
import { MatchStats } from "@/app/lib/definitions";

export function Match({ match }: { match: MatchStats }) {
  const { outcome, queueInfo, relativeTime, gameDuration } = match;
  let showMatch = true;

  if (
    queueInfo === "Arena" ||
    queueInfo === "Swarm" ||
    queueInfo === "Unknown"
  ) {
    showMatch = false;
  }

  return (
    <>
      {showMatch && (
        <div className={styles["match-container"]}>
          <div
            className={`${styles["match-deco"]} ${
              outcome === "VICTORY"
                ? styles["victory-deco"]
                : styles["defeat-deco"]
            }`}
          ></div>
          <div
            className={`${styles["match-content"]} ${
              outcome === "VICTORY"
                ? styles["victory-content"]
                : styles["defeat-content"]
            }`}
          >
            <div className={styles["sum-container1"]}>
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
            </div>
            <div className={styles["match-divider"]}></div>
            <div className={styles["sum-container2"]}>
              <div className={styles["icon-container1"]}>
                <div className={styles["champsums-container"]}>
                  <MatchChampIcon match={match} />
                  <div className={styles["summoners-container"]}>
                    <MatchSumSpells match={match} />
                  </div>
                </div>
                <div className={styles["runepage-container"]}>
                  <MatchSumRunes match={match} />
                </div>
              </div>
              <div className={styles["icon-container2"]}>
                <div className={styles["matchstats-container"]}>
                  <MatchKda match={match} />
                  <MatchGCC match={match} />
                </div>
                <MatchItems match={match} />
              </div>
              <div className={styles["icon-container3"]}>
                <div className={styles["matchrank-container"]}>
                  {/* <MatchRankAvg match={match} /> */}
                </div>
                <div className={styles["analysis-container"]}>
                  <Image
                    src={`/images/match/heimer_analysis.png`}
                    width={24}
                    height={24}
                    className={styles["cw-styling"]}
                    alt="control ward"
                  />
                  <span className={styles["analysis-title"]}>Analysis</span>
                </div>
                <div className={styles["multikill-placeholder"]}>
                  <MatchMultiKill match={match} />
                </div>
              </div>
            </div>
            <div className={styles["match-divider"]}></div>
            <div className={styles["sum-container3"]}>
              <Teams match={match} />
            </div>
            <div className={styles["expand-tab"]}>
              <RiArrowDownDoubleLine className={styles["expand-styling"]} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
