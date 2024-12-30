import { db } from "./db";
import { matchData } from "@/app/lib/match-data";
import { PlayerParams } from "@/app/lib/definitions";
import { decodeNameTag } from "./decode-nametag";

export async function checkMatches(params: PlayerParams) {
  const matches = await db.match.findMany({
    where: {
      playerName: params.username,
      tagLine: params.tagLine,
      regionInfo: params.region,
    },
    orderBy: {
      matchId: "desc",
    },
  });

  return matches;
}

export async function checkFreshMatches(params: PlayerParams) {
  console.log("checking for fresh matches...");

  const fetchMatchData: any = await matchData(params);

  let freshMatchLog = false;

  await Promise.all(
    fetchMatchData.map(async (match: any) => {
      try {
        const metadataId = {
          summonerId: match.summonerId,
          matchId: match.matchId,
        };

        // check if match record exists
        const existingRecord = await db.match.findUnique({
          where: {
            metaId: metadataId,
          },
        });

        // if match record doesn't exist, add new match record
        if (!existingRecord) {
          await db.match.create({
            data: {
              metaId: metadataId,
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
          });
          console.log(`Added fresh match record: ${match.matchId}`);
          freshMatchLog = true;
        } else {
          // update relative time if match exists
          await db.match.update({
            where: {
              metaId: metadataId,
            },
            data: {
              relativeTime: match.relativeTime,
            },
          });
        }
      } catch (error) {
        console.warn(
          `Error creating fresh match record: ${fetchMatchData[0].matchId}`,
          error
        );
      }
    })
  );

  if (!freshMatchLog) {
    console.log("no fresh matches");
  }

  console.log("done\n");

  // return fresh matches from database
  const matches = await checkMatches(params);

  return matches;
}

export async function getPlayerMatches(params: PlayerParams) {
  params.username = decodeNameTag(params)?.[0];
  params.tagLine = decodeNameTag(params)?.[1];

  const matches = await checkMatches(params);

  // return match data from database if exists
  if (matches.length !== 0) {
    console.log(params.username + "#" + params.tagLine);
    console.log("response from database");

    return await checkFreshMatches(params);
  }

  // fetch matches if no matches on database exist
  console.log(params.username + "#" + params.tagLine);
  console.log("fetching...");
  const fetchMatchData: any = await matchData(params);

  console.log("storing player into database...");

  try {
    await db.player.upsert({
      where: {
        summonerId: fetchMatchData[0].summonerId,
      },
      update: {},
      create: {
        summonerId: fetchMatchData[0].summonerId,
        playerName: fetchMatchData[0].playerName,
        tagLine: fetchMatchData[0].tagLine,
        regionInfo: params.region,
      },
    });
  } catch (error) {
    console.error(
      `Error creating player record: ${fetchMatchData[0].matchId}`,
      error
    );
  }

  console.log("storing matches into database...");

  await Promise.all(
    fetchMatchData.map(async (match: any) => {
      try {
        const metadataId = {
          summonerId: match.summonerId,
          matchId: match.matchId,
        };

        await db.match.create({
          data: {
            metaId: metadataId,
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
        });
      } catch (error) {
        console.error(
          `Error creating initial match record: ${match.matchId}`,
          error
        );
      }
    })
  );

  console.log("done\n");

  return fetchMatchData;
}
