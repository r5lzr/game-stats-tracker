"use client";
import { RankedQueue } from "./RankedQueue";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

async function getRankedInfo(summonerId) {
  const res = await fetch(
    `/api/league-of-legends/ranked?summonerId=${summonerId}`
  );

  if (!res.ok) throw new Error("Failed to fetch ranked data");

  return await res.json();
}

async function getPlayerRankSolo(summonerId) {
  let rankedSoloActivity = [];

  const rankedData = await getRankedInfo(summonerId);

  const checkActivity = rankedData.find(
    (rankInfo) => rankInfo.queueType === "RANKED_SOLO_5x5"
  );

  if (checkActivity) {
    const { tier, rank, leaguePoints, wins, losses } = checkActivity;
    rankedSoloActivity[0] = tier;
    rankedSoloActivity[1] = rank;
    rankedSoloActivity[2] = `${leaguePoints} LP`;
    rankedSoloActivity[3] = wins;
    rankedSoloActivity[4] = losses;
  } else {
    rankedSoloActivity = false;
  }

  return rankedSoloActivity;
}

async function getPlayerRankFlex(summonerId) {
  let rankedFlexActivity = [];

  const rankedData = await getRankedInfo(summonerId);

  const checkActivity = rankedData.find(
    (rankInfo) => rankInfo.queueType === "RANKED_FLEX_SR"
  );

  if (checkActivity) {
    const { tier, rank, leaguePoints, wins, losses } = checkActivity;
    rankedFlexActivity[0] = tier;
    rankedFlexActivity[1] = rank;
    rankedFlexActivity[2] = `${leaguePoints} LP`;
    rankedFlexActivity[3] = wins;
    rankedFlexActivity[4] = losses;
  } else {
    rankedFlexActivity = false;
  }

  return rankedFlexActivity;
}

export function Ranked() {
  const [rankedSoloInfo, setRankedSoloInfo] = useState({});
  const [rankedFlexInfo, setRankedFlexInfo] = useState({});

  useEffect(() => {
    // (async () => {
    getPlayerRankSolo("-JXlAr1LmjIeT6eN8vxCT0LfcTE7h0Ku53bBhDTGlS7xBg4").then(
      (x) => setRankedSoloInfo(x)
    );
    getPlayerRankFlex("-JXlAr1LmjIeT6eN8vxCT0LfcTE7h0Ku53bBhDTGlS7xBg4").then(
      (x) => setRankedFlexInfo(x)
    );
  }, []);

  return (
    <>
      <div className={styles["ranked-title"]}>Current rank</div>
      <div className={styles["ranked-solo"]}>
        <RankedQueue label="Ranked Solo" rankedInfo={rankedSoloInfo} />
      </div>
      <div className={styles["ranked-flex"]}>
        <RankedQueue label="Ranked Flex" rankedInfo={rankedFlexInfo} />
      </div>
    </>
  );
}
