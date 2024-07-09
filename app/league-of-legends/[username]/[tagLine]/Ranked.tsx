import { RankedQueue } from "./RankedQueue";
import styles from "./page.module.css";

export interface RankedInfo {
  queueType: string;
  tier: string;
  rank: string;
  leaguePoints: number;
  wins: number;
  losses: number;
}

async function getRankedInfo(summonerId: string) {
  const res = await fetch(
    process.env.URL + `/api/league-of-legends/ranked?summonerId=${summonerId}`,
    { method: "GET" }
  );

  if (!res.ok) throw new Error("Failed to fetch ranked data");

  return await res.json();
}

async function getPlayerRankSolo(summonerId: string) {
  let rankedSoloActivity: any[] | boolean = [];

  const rankedData: RankedInfo[] = await getRankedInfo(summonerId);

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

async function getPlayerRankFlex(summonerId: string) {
  let rankedFlexActivity: any[] | boolean = [];

  const rankedData: RankedInfo[] = await getRankedInfo(summonerId);

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

export async function Ranked({ summonerId }: { summonerId: string }) {
  const [rankedSoloInfo, rankedFlexInfo] = await Promise.all([
    getPlayerRankSolo(summonerId),
    getPlayerRankFlex(summonerId),
  ]);

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
