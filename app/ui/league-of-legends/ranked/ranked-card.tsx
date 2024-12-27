import { RankedQueue } from "./ranked-queue";
import styles from "../profile.module.css";
import { RankedInfo } from "@/app/lib/definitions";
import { getRankedInfo } from "@/app/lib/riot-api";
import { RiotAPITypes } from "@fightmegg/riot-api";

async function getRankedActivity(
  summonerId: string,
  region: RiotAPITypes.LoLRegion
) {
  let rankedSoloActivity: any[] | boolean = [];
  let rankedFlexActivity: any[] | boolean = [];

  const rankedData: RankedInfo[] = await getRankedInfo(summonerId, region);

  const checkSolo = rankedData.find(
    (rankInfo) => rankInfo.queueType === "RANKED_SOLO_5x5"
  );

  const checkFlex = rankedData.find(
    (rankInfo) => rankInfo.queueType === "RANKED_FLEX_SR"
  );

  if (checkSolo) {
    const { tier, rank, leaguePoints, wins, losses } = checkSolo;
    rankedSoloActivity[0] = tier;
    rankedSoloActivity[1] = rank;
    rankedSoloActivity[2] = `${leaguePoints} LP`;
    rankedSoloActivity[3] = wins;
    rankedSoloActivity[4] = losses;
  } else {
    rankedSoloActivity = false;
  }

  if (checkFlex) {
    const { tier, rank, leaguePoints, wins, losses } = checkFlex;
    rankedFlexActivity[0] = tier;
    rankedFlexActivity[1] = rank;
    rankedFlexActivity[2] = `${leaguePoints} LP`;
    rankedFlexActivity[3] = wins;
    rankedFlexActivity[4] = losses;
  } else {
    rankedFlexActivity = false;
  }

  return [rankedSoloActivity, rankedFlexActivity];
}

export async function Ranked({
  summonerId,
  region,
}: {
  summonerId: string;
  region: RiotAPITypes.LoLRegion;
}) {
  const rankedActivity = await getRankedActivity(summonerId, region);

  return (
    <>
      <div className={styles["ranked-title"]}>Current rank</div>
      <div className={styles["ranked-solo"]}>
        <RankedQueue label="Ranked Solo" rankedInfo={rankedActivity[0]} />
      </div>
      <div className={styles["ranked-flex"]}>
        <RankedQueue label="Ranked Flex" rankedInfo={rankedActivity[1]} />
      </div>
    </>
  );
}
