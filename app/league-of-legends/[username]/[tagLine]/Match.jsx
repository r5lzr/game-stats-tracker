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

let queues;
async function getQueueInfo(queueId) {
  if (!queues) {
    const res = await fetch(
      "https://static.developer.riotgames.com/docs/lol/queues.json"
    );

    if (!res.ok) throw new Error("Failed to fetch queue data");

    queues = await res.json();
  }

  let queueOutcome = queues.find((queue) => queue.queueId === queueId);

  switch (queueOutcome.queueId) {
    case 420:
      queueOutcome.description = "Ranked Solo";
      break;
    case 440:
      queueOutcome.description = "Ranked Flex";
      break;
    case 490:
      queueOutcome.description = "Quick Play";
      break;
    case 400:
      queueOutcome.description = "Draft Pick";
      break;
    case 830:
      queueOutcome.description = "AI Intro";
      break;
    case 840:
      queueOutcome.description = "AI Beginner";
      break;
    case 850:
      queueOutcome.description = "AI Intermediate";
      break;
    case 450:
      queueOutcome.description = "ARAM";
      break;
    case 700:
      queueOutcome.description = "Clash";
      break;
    case 720:
      queueOutcome.description = "ARAM Clash";
      break;
    case 1710:
      queueOutcome.description = "Arena";
      break;
    default:
      queueOutcome.description = "Unknown";
      break;
  }

  return queueOutcome;
}

export async function Match({ match, params }) {
  // useEffect(() => {
  //   (async () => {
  //     setQueueInfo(await getQueueInfo(match.info.queueId));
  //   })();
  // }, [match.info.queueId]);

  const queueInfo = await getQueueInfo(match.info.queueId);

  // useEffect(() => {
  //   // (async () => {
  //   averageRank(getMatchSummonerIds()).then((x) => setMatchAvg(x));
  //   // setspellInfo1(await getSummonerInfo(getSummrId1()));
  //   // setspellInfo2(await getSummonerInfo(getSpellId2()));
  //   // setMatchAvg(await averageRank(getMatchSummonerIds()));
  //   // })();
  // }, []);

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

    const diff = new Date(endTime) - new Date();
    const formatter = new Intl.RelativeTimeFormat("en");

    if (diff < 2.68e9) {
      return formatter.format(Math.ceil(diff / 8.64e7), "day");
    } else if (diff < 3.156e10) {
      return formatter.format(Math.ceil(diff / 2.6298e9), "month");
    } else {
      return formatter.format(Math.ceil(diff / 3.15576e10), "year");
    }
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
            {queueInfo.description}
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
