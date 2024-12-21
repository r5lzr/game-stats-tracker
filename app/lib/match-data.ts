import { MatchInfo, PlayerParams } from "./definitions";
import { getMatchIdInfo } from "./match-functions/matchid-info";
import { getPlayerInfo } from "./match-functions/player-info";
import { getQueueInfo } from "./match-functions/queue-info";
import {
  getRelativeTimeInfo,
  getGameDurationInfo,
} from "./match-functions/time-info";
import { getOutcomeInfo } from "./match-functions/outcome-info";
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
import { getPingingInfo } from "./match-functions/pinging-info";
import { getMultiKillInfo } from "./match-functions/multikill-info";
import { getBlueTeamInfo, getRedTeamInfo } from "./match-functions/team-info";
import { decodeNameTag } from "./decode-nametag";
import { getMatches } from "./riot-api";

export async function matchData(params: PlayerParams) {
  const matches = await getMatches(
    params.username,
    params.tagLine,
    params.region
  );

  params.username = decodeNameTag(params)?.[0];
  params.tagLine = decodeNameTag(params)?.[1];

  const matchDataList: any = await Promise.all(
    matches.map(async (match) => {
      const [
        matchId,
        playerName,
        tagLine,
        summonerId,
        queueInfo,
        relativeTime,
        gameDuration,
        outcome,
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
        visionPings,
        pushPings,
        dangerPings,
        pathingPings,
        assistPings,
        missingPings,
        multiKill,
        blueTeamPlayers,
        blueTeamTags,
        blueTeamChamps,
        redTeamPlayers,
        redTeamTags,
        redTeamChamps,
      ] = await Promise.all([
        getMatchIdInfo(match),
        getPlayerInfo(match, params)?.[0],
        getPlayerInfo(match, params)?.[1],
        getPlayerInfo(match, params)?.[2],
        getQueueInfo(match.info.queueId),
        getRelativeTimeInfo(match),
        getGameDurationInfo(match),
        getOutcomeInfo(match, params),
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
        getPingingInfo(match, params)?.[0],
        getPingingInfo(match, params)?.[1],
        getPingingInfo(match, params)?.[2],
        getPingingInfo(match, params)?.[3],
        getPingingInfo(match, params)?.[4],
        getPingingInfo(match, params)?.[5],
        getMultiKillInfo(match, params),
        getBlueTeamInfo(match)?.[0],
        getBlueTeamInfo(match)?.[1],
        getBlueTeamInfo(match)?.[2],
        getRedTeamInfo(match)?.[0],
        getRedTeamInfo(match)?.[1],
        getRedTeamInfo(match)?.[2],
      ]);

      return {
        matchId,
        playerName,
        tagLine,
        summonerId,
        queueInfo,
        relativeTime,
        gameDuration,
        outcome,
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
        visionPings,
        pushPings,
        dangerPings,
        pathingPings,
        assistPings,
        missingPings,
        multiKill,
        blueTeamPlayers,
        blueTeamTags,
        blueTeamChamps,
        redTeamPlayers,
        redTeamTags,
        redTeamChamps,
      };
    })
  );

  return matchDataList;
}
