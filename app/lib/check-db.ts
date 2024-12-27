import { db } from "./db";
import { matchData } from "@/app/lib/match-data";
import { PlayerParams } from "@/app/lib/definitions";
import { decodeNameTag } from "./decode-nametag";

export async function matchDb(params: PlayerParams) {
  params.username = decodeNameTag(params)?.[0];
  params.tagLine = decodeNameTag(params)?.[1];

  const checkPlayerMatches = await db.player.findMany({
    where: {
      playerName: params.username,
      tagLine: params.tagLine,
      regionInfo: params.region,
    },
    orderBy: {
      matchId: "desc",
    },
  });

  // return match data from database if exists
  if (checkPlayerMatches.length !== 0) {
    console.log(params.username);
    console.log(params.tagLine);
    console.log("response from database");
    return checkPlayerMatches;
  }

  // fetch matches if no matches on database exist
  console.log(params.username);
  console.log(params.tagLine);
  console.log("fetching...");
  const fetchMatchData: any = await matchData(params);

  console.log("storing into database...");
  fetchMatchData.map(
    async (match: any) =>
      await db.player.create({
        data: {
          summonerId: match.summonerId,
          matchId: match.matchId,
          playerName: match.playerName,
          tagLine: match.tagLine,
          regionInfo: params.region,
          queueInfo: match.queueInfo,
          relativeTime: match.relativeTime,
          gameDuration: match.gameDuration,
          outcome: match.outcome,
          champIcon: match.champIcon,
          champLevel: match.champLevel,
          spellInfo1: match.spellInfo1,
          spellInfo2: match.spellInfo2,
          runeInfo1: match.runeInfo1,
          runeInfo2: match.runeInfo2,
          kills: match.kills,
          deaths: match.deaths,
          assists: match.assists,
          kdaRatio: match.kdaRatio,
          kpRatio: match.kpRatio,
          gold: match.gold,
          creepScore: match.creepScore,
          creepScorePerMin: match.creepScorePerMin,
          controlWards: match.controlWards,
          itemId0: match.itemId0,
          itemId1: match.itemId1,
          itemId2: match.itemId2,
          itemId3: match.itemId3,
          itemId4: match.itemId4,
          itemId5: match.itemId5,
          itemId6: match.itemId6,
          visionPings: match.visionPings,
          pushPings: match.pushPings,
          dangerPings: match.dangerPings,
          pathingPings: match.pathingPings,
          assistPings: match.assistPings,
          missingPings: match.missingPings,
          multiKill: match.multiKill,
          blueTeamPlayers: match.blueTeamPlayers,
          blueTeamTags: match.blueTeamTags,
          blueTeamChamps: match.blueTeamChamps,
          redTeamPlayers: match.redTeamPlayers,
          redTeamTags: match.redTeamTags,
          redTeamChamps: match.redTeamChamps,
        },
      })
  );
  console.log("done");

  return fetchMatchData;
}

// export async function checkDb() {
//   const newTest = await db.player.create({
//     data: {
//       summonerId: "asd4",
//       matchId: "asd4",
//       playerName: "asd",
//       tagLine: "asd",
//       queueInfo: "asd",
//       relativeTime: "asd",
//       gameDuration: "asd",
//       outcome: "asd",
//       champIcon: "asd",
//       champLevel: 1,
//       spellInfo1: "asd",
//       spellInfo2: "asd",
//       runeInfo1: "asd",
//       runeInfo2: "asd",
//       kills: 1,
//       deaths: 1,
//       assists: 1,
//       kdaRatio: 1,
//       kpRatio: 1,
//       gold: 1,
//       creepScore: 1,
//       creepScorePerMin: 1,
//       controlWards: 1,
//       itemId0: 1,
//       itemId1: 1,
//       itemId2: 1,
//       itemId3: 1,
//       itemId4: 1,
//       itemId5: 1,
//       itemId6: 1,
//       visionPings: 1,
//       pushPings: 1,
//       dangerPings: 1,
//       pathingPings: 1,
//       assistPings: 1,
//       missingPings: 1,
//       multiKill: "asd",
//       blueTeamPlayers: ["asd", "asd", "asd"],
//       blueTeamTags: ["asd", "asd", "asd"],
//       blueTeamChamps: ["asd", "asd", "asd"],
//       redTeamPlayers: ["asd", "asd", "asd"],
//       redTeamTags: ["asd", "asd", "asd"],
//       redTeamChamps: ["asd", "asd", "asd"],
//     },
//   });

//   return newTest;
// }

// export async function returnDb() {
//   const returnTest = await db.player.findMany({
//     where: {
//       playerName: "asd",
//     },
//   });

//   return returnTest;
// }
