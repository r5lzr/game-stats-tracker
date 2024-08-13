// @ts-nocheck
import { RiotAPI, RiotAPITypes } from "@fightmegg/riot-api";
import { regionToCluster } from "@fightmegg/riot-api/dist/esm/utils";

const RApi = new RiotAPI(process.env.RIOT_API_KEY as string, {
  cache: { cacheType: "local" },
});

export async function getMatches(
  username: string,
  tagLine: string,
  region: string
) {
  const platformId = regionToCluster(region);

  const riotAccount = await RApi.account.getByRiotId({
    region: platformId,
    gameName: username,
    tagLine,
  });

  const matches = [];
  for (const matchId of await RApi.matchV5.getIdsByPuuid({
    cluster: platformId,
    puuid: riotAccount.puuid,
  })) {
    matches.push(
      await RApi.matchV5.getMatchById({ cluster: platformId, matchId })
    );
  }

  return matches;
}

export async function getSummoner(summonerId: string, region: string) {
  const platformId = regionToCluster(region);

  return await RApi.summoner.getBySummonerId({
    region: platformId,
    summonerId: summonerId,
  });
}

export async function getRankedInfo(summonerId: string, region: string) {
  const platformId = regionToCluster(region);

  return await RApi.league.getEntriesBySummonerId({
    region: platformId,
    summonerId: summonerId,
  });
}
