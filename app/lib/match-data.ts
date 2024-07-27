import { MatchInfo, PlayerParams } from "./definitions";
import { getNameTagInfo } from "./match-functions/nametag-info";
import { getQueueInfo } from "./match-functions/queue-info";
import { getChampIcon, getChampLevel } from "./match-functions/champ-info";
import {
  getSpellInfo,
  getSpellId1,
  getSpellId2,
} from "./match-functions/spell-info";
import {
  getRunePrimaryInfo,
  getRuneSecondaryInfo,
  getRuneId1,
  getRuneId2,
} from "./match-functions/rune-info";
import { getKDAInfo } from "./match-functions/kda-info";
import { getGCCInfo } from "./match-functions/gcc-info";
import { getItemInfo } from "./match-functions/item-info";
// import { getAvgRankIcon } from "./match-functions/avgrank-info";
import { getMultiKillInfo } from "./match-functions/multikill-info";
import { getBlueTeamInfo, getRedTeamInfo } from "./match-functions/team-info";

// NOTE:
// Commented out average rank functionality due to API bottlenecks for now.

async function getMatches(username: string, tagLine: string) {
  const res = await fetch(
    process.env.URL +
      `/api/league-of-legends/matches?username=${username}&tagLine=${tagLine}`,
    { cache: "force-cache" }
  );

  if (!res.ok) throw new Error("Failed to fetch match data");

  return await res.json();
}

export async function matchData(params: PlayerParams) {
  const matches: MatchInfo[] = await getMatches(
    params.username,
    params.tagLine
  );

  const matchDataList: any = await Promise.all(
    matches.map(async (match) => {
      const [
        playerName,
        tagLine,
        queueInfo,
        champIcon,
        champLevel,
        spellInfo1,
        spellInfo2,
        runeInfo1,
        runeInfo2,
        kills,
        deaths,
        assists,
        kdaRatio,
        kpRatio,
        gold,
        creepScore,
        creepScorePerMin,
        controlWards,
        itemId0,
        itemId1,
        itemId2,
        itemId3,
        itemId4,
        itemId5,
        itemId6,
        // avgRankEmblem,
        // avgRankTitle,
        multiKill,
        bluePlayer1Name,
        bluePlayer1Tag,
        bluePlayer1Champ,
        bluePlayer2Name,
        bluePlayer2Tag,
        bluePlayer2Champ,
        bluePlayer3Name,
        bluePlayer3Tag,
        bluePlayer3Champ,
        bluePlayer4Name,
        bluePlayer4Tag,
        bluePlayer4Champ,
        bluePlayer5Name,
        bluePlayer5Tag,
        bluePlayer5Champ,
        redPlayer1Name,
        redPlayer1Tag,
        redPlayer1Champ,
        redPlayer2Name,
        redPlayer2Tag,
        redPlayer2Champ,
        redPlayer3Name,
        redPlayer3Tag,
        redPlayer3Champ,
        redPlayer4Name,
        redPlayer4Tag,
        redPlayer4Champ,
        redPlayer5Name,
        redPlayer5Tag,
        redPlayer5Champ,
      ] = await Promise.all([
        getNameTagInfo(match, params)?.[0],
        getNameTagInfo(match, params)?.[1],
        getQueueInfo(match.info.queueId),
        getChampIcon(match, params),
        getChampLevel(match, params),
        getSpellInfo(getSpellId1(match, params)),
        getSpellInfo(getSpellId2(match, params)),
        getRunePrimaryInfo(getRuneId1(match, params)),
        getRuneSecondaryInfo(getRuneId2(match, params)),
        getKDAInfo(match, params)?.[0],
        getKDAInfo(match, params)?.[1],
        getKDAInfo(match, params)?.[2],
        getKDAInfo(match, params)?.[3],
        getKDAInfo(match, params)?.[4],
        getGCCInfo(match, params)?.[0],
        getGCCInfo(match, params)?.[1],
        getGCCInfo(match, params)?.[2],
        getGCCInfo(match, params)?.[3],
        getItemInfo(match, params)?.[0],
        getItemInfo(match, params)?.[1],
        getItemInfo(match, params)?.[2],
        getItemInfo(match, params)?.[3],
        getItemInfo(match, params)?.[4],
        getItemInfo(match, params)?.[5],
        getItemInfo(match, params)?.[6],
        // (await getAvgRankIcon(match))?.[0],
        // (await getAvgRankIcon(match))?.[1],
        getMultiKillInfo(match, params),
        getBlueTeamInfo(match)?.[0][0],
        getBlueTeamInfo(match)?.[1][0],
        getBlueTeamInfo(match)?.[2][0],
        getBlueTeamInfo(match)?.[0][1],
        getBlueTeamInfo(match)?.[1][1],
        getBlueTeamInfo(match)?.[2][1],
        getBlueTeamInfo(match)?.[0][2],
        getBlueTeamInfo(match)?.[1][2],
        getBlueTeamInfo(match)?.[2][2],
        getBlueTeamInfo(match)?.[0][3],
        getBlueTeamInfo(match)?.[1][3],
        getBlueTeamInfo(match)?.[2][3],
        getBlueTeamInfo(match)?.[0][4],
        getBlueTeamInfo(match)?.[1][4],
        getBlueTeamInfo(match)?.[2][4],
        getRedTeamInfo(match)?.[0][0],
        getRedTeamInfo(match)?.[1][0],
        getRedTeamInfo(match)?.[2][0],
        getRedTeamInfo(match)?.[0][1],
        getRedTeamInfo(match)?.[1][1],
        getRedTeamInfo(match)?.[2][1],
        getRedTeamInfo(match)?.[0][2],
        getRedTeamInfo(match)?.[1][2],
        getRedTeamInfo(match)?.[2][2],
        getRedTeamInfo(match)?.[0][3],
        getRedTeamInfo(match)?.[1][3],
        getRedTeamInfo(match)?.[2][3],
        getRedTeamInfo(match)?.[0][4],
        getRedTeamInfo(match)?.[1][4],
        getRedTeamInfo(match)?.[2][4],
      ]);

      return {
        playerName,
        tagLine,
        queueInfo,
        champIcon,
        champLevel,
        spellInfo1,
        spellInfo2,
        runeInfo1,
        runeInfo2,
        kills,
        deaths,
        assists,
        kdaRatio,
        kpRatio,
        gold,
        creepScore,
        creepScorePerMin,
        controlWards,
        itemId0,
        itemId1,
        itemId2,
        itemId3,
        itemId4,
        itemId5,
        itemId6,
        // avgRankEmblem,
        // avgRankTitle,
        multiKill,
        bluePlayer1Name,
        bluePlayer1Tag,
        bluePlayer1Champ,
        bluePlayer2Name,
        bluePlayer2Tag,
        bluePlayer2Champ,
        bluePlayer3Name,
        bluePlayer3Tag,
        bluePlayer3Champ,
        bluePlayer4Name,
        bluePlayer4Tag,
        bluePlayer4Champ,
        bluePlayer5Name,
        bluePlayer5Tag,
        bluePlayer5Champ,
        redPlayer1Name,
        redPlayer1Tag,
        redPlayer1Champ,
        redPlayer2Name,
        redPlayer2Tag,
        redPlayer2Champ,
        redPlayer3Name,
        redPlayer3Tag,
        redPlayer3Champ,
        redPlayer4Name,
        redPlayer4Tag,
        redPlayer4Champ,
        redPlayer5Name,
        redPlayer5Tag,
        redPlayer5Champ,
      };
    })
  );

  return matchDataList;
}
