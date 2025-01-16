import styles from "../profile.module.css";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import { Teams } from "./teams";
import { Kda } from "./kda";
import { MultiKill } from "./multiKill";
import { GCC } from "./gcc";
import { SumRunes } from "./sum-runes";
import { SumSpells } from "./sum-spells";
import { ChampIcon } from "./champ-icon";
import { Items } from "./items";
import { MatchStats } from "@/app/lib/definitions";
import { Pings } from "./pings";
import { MatchInfo } from "./match-info";

export function MatchCard({ match }: { match: MatchStats }) {
  const { outcome, queueInfo, relativeTime, gameDuration, summonerId } = match;
  let showMatch = true;

  if (
    queueInfo === "Arena" ||
    queueInfo === "Swarm" ||
    queueInfo === "Unknown" ||
    outcome === "REMAKE" ||
    summonerId === undefined
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
              <MatchInfo
                outcome={outcome}
                queueInfo={queueInfo}
                relativeTime={relativeTime}
                gameDuration={gameDuration}
              />
            </div>
            <div className={styles["match-divider"]}></div>
            <div className={styles["sum-container2"]}>
              <div className={styles["icon-container1"]}>
                <div className={styles["champsums-container"]}>
                  <ChampIcon match={match} />
                  <div className={styles["summoners-container"]}>
                    <SumSpells match={match} />
                  </div>
                </div>
                <div className={styles["runepage-container"]}>
                  <SumRunes match={match} />
                </div>
              </div>
              <div className={styles["icon-container2"]}>
                <div className={styles["matchstats-container"]}>
                  <Kda match={match} />
                  <GCC match={match} />
                </div>
                <Items match={match} />
              </div>
              <div className={styles["icon-container3"]}>
                <div className={styles["pings-container"]}>
                  <Pings match={match} />
                </div>
                <MultiKill match={match} />
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
