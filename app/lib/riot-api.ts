import { RiotAPI, RiotAPITypes, PlatformId } from "@fightmegg/riot-api";
import { regionToCluster } from "@fightmegg/riot-api/dist/esm/utils";

const RApi = new RiotAPI(process.env.RIOT_API_KEY as string, {
  cache: { cacheType: "local" },
});

export async function getMatches(
  username: string,
  tagLine: string,
  region: RiotAPITypes.LoLRegion
) {
  const platformId = regionToCluster(region);

  const riotAccount = await RApi.account.getByRiotId({
    // @ts-ignore
    region: platformId,
    gameName: username,
    tagLine,
  });

  const matches = [];

  if (platformId !== PlatformId.ESPORTS) {
    for (const matchId of await RApi.matchV5.getIdsByPuuid({
      cluster: platformId,
      puuid: riotAccount.puuid,
    })) {
      matches.push(
        await RApi.matchV5.getMatchById({ cluster: platformId, matchId })
      );
    }
  }

  return matches;
}

export async function getSummoner(summonerId: string, region: RiotAPITypes.LoLRegion) {
  return await RApi.summoner.getBySummonerId({
    region: region,
    summonerId: summonerId,
  });
}

export async function getRankedInfo(summonerId: string, region: RiotAPITypes.LoLRegion) {
  return await RApi.league.getEntriesBySummonerId({
    region: region,
    summonerId: summonerId,
  });
}
