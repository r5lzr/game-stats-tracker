"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import { Teams } from "./Teams";
import { MatchRankAvg } from "./MatchRankAvg";
import { MatchKda } from "./MatchKda";
import { MatchMultiKill } from "./MatchMultiKill";
import { MatchGCC } from "./MatchGCC";
import { MatchSumRunes } from "./MatchSumRunes";
import { MatchSumSpells } from "./MatchSumSpells";
import { MatchChampIcon } from "./MatchChampIcon";
import { MatchItems } from "./MatchItems";
import { MatchInfo } from "./page";
import { PlayerParams } from "./page";

export function Match({
  match,
  params,
}: {
  match: MatchInfo;
  params: PlayerParams;
}) {
  function findSummonerName() {
    let foundName = null;

    match.info.participants.forEach((item) => {
      if (
        item.riotIdGameName === params.username &&
        item.riotIdTagline === params.tagLine
      ) {
        foundName = item.riotIdGameName;
      }
    });

    return foundName; //need to change for riot id and tagline
  }

  function getRelativeTime() {
    let endTime = match.info.gameEndTimestamp;
    let relativeTime = null;

    const rdiff = new Date(endTime).getTime() - new Date().getTime();
    const diff = Math.abs(rdiff);
    const formatter = new Intl.RelativeTimeFormat("en");

    if (diff < 60000 && diff > 1000) {
      relativeTime = formatter.format(Math.ceil(-diff / 1000), "second");
    } else if (diff < 3.6e6 && diff > 60000) {
      relativeTime = formatter.format(Math.ceil(-diff / 60000), "minute");
    } else if (diff < 8.64e7 && diff > 3.6e6) {
      relativeTime = formatter.format(Math.ceil(-diff / 3.6e6), "hour");
    } else if (diff < 2.628e9 && diff > 8.64e7) {
      relativeTime = formatter.format(Math.ceil(-diff / 8.64e7), "day");
    } else if (diff < 3.156e10 && diff > 2.628e9) {
      relativeTime = formatter.format(Math.ceil(-diff / 2.628e9), "month");
    } else {
      relativeTime = formatter.format(Math.ceil(-diff / 3.15576e10), "year");
    }

    return relativeTime;
  }

  function getGameDuration() {
    let gameTime = null;

    const minutes = Math.floor(match.info.gameDuration / 60);
    const seconds = match.info.gameDuration % 60;

    gameTime = `${minutes}m ${seconds}s`;

    return gameTime;
  }

  function getOutcome() {
    let victoryOutcome = null;

    match.info.participants.forEach((item) => {
      if (item.riotIdGameName === params.username && item.win === true) {
        victoryOutcome = "VICTORY";
      } else if (
        item.riotIdGameName === params.username &&
        item.win === false
      ) {
        victoryOutcome = "DEFEAT";
      }
    });

    return victoryOutcome;
  }

  return (
    <div className={styles["match-container"]}>
      <div
        className={`${styles["match-deco"]} ${
          getOutcome() === "VICTORY"
            ? styles["victory-deco"]
            : styles["defeat-deco"]
        }`}
      ></div>
      <div
        className={`${styles["match-content"]} ${
          getOutcome() === "VICTORY"
            ? styles["victory-content"]
            : styles["defeat-content"]
        }`}
      >
        <div className={styles["sum-container1"]}>
          <div className={styles["gamemode-label"]}>
            {queueInfo?.description || "Unknown data"}
          </div>
          <div className={styles["days-label"]}>{getRelativeTime()}</div>
          <div className={styles["gametime-label"]}>{getGameDuration()}</div>
          <div
            className={`${styles["outcome-label"]} ${
              getOutcome() === "VICTORY" ? styles["victory"] : styles["defeat"]
            }`}
          >
            {getOutcome()}
          </div>
        </div>
        <div className={styles["match-divider"]}></div>
        <div className={styles["sum-container2"]}>
          <div className={styles["icon-container1"]}>
            <div className={styles["champsums-container"]}>
              <MatchChampIcon match={match} params={params} />
              <div className={styles["summoners-container"]}>
                <MatchSumSpells match={match} params={params} />
              </div>
            </div>
            <div className={styles["runepage-container"]}>
              <MatchSumRunes match={match} params={params} />
            </div>
          </div>
          <div className={styles["icon-container2"]}>
            <div className={styles["matchstats-container"]}>
              <MatchKda match={match} params={params} />
              <MatchGCC match={match} params={params} />
            </div>
            <MatchItems match={match} params={params} />
          </div>
          <div className={styles["icon-container3"]}>
            <div className={styles["matchrank-container"]}>
              <MatchRankAvg match={match} />
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
              <MatchMultiKill match={match} params={params} />
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
  );
}
