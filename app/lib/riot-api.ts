import { RiotAPI, RiotAPITypes, PlatformId } from "@fightmegg/riot-api";
import { regionToCluster } from "@fightmegg/riot-api/dist/esm/utils";

const config: RiotAPITypes.Config = {
  cache: {
    cacheType: "local",
    ttls: {
      byMethod: {
        // matches
        [RiotAPITypes.METHOD_KEY.ACCOUNT.GET_BY_RIOT_ID]: 90000,
        [RiotAPITypes.METHOD_KEY.MATCH_V5.GET_IDS_BY_PUUID]: 90000,
        [RiotAPITypes.METHOD_KEY.MATCH_V5.GET_MATCH_BY_ID]: 90000,
        // summoner
        [RiotAPITypes.METHOD_KEY.SUMMONER.GET_BY_SUMMONER_ID]: 90000,
        // ranked
        [RiotAPITypes.METHOD_KEY.LEAGUE.GET_ENTRIES_BY_PUUID]: 90000,
      },
    },
  },
};

const RApi = new RiotAPI(process.env.RIOT_API_KEY as string, config);

export async function getMatches(
  username: string,
  tagLine: string,
  region: RiotAPITypes.LoLRegion
) {
  const platformId = regionToCluster(region);

  const riotAccount = RApi.account.getByRiotId({
    // @ts-ignore
    region: platformId,
    gameName: username,
    tagLine,
  });

  const matches = [];
  
  if (platformId !== PlatformId.ESPORTS) {
    for (const matchId of await RApi.matchV5.getIdsByPuuid({
      cluster: platformId,
      puuid: (await riotAccount).puuid,
      params: {count: 25}
    })) {
      matches.push(
        await RApi.matchV5.getMatchById({ cluster: platformId, matchId })
      );
    }
  }

  return matches;
}

type Cluster =
  | PlatformId.EUROPE
  | PlatformId.AMERICAS
  | PlatformId.ASIA
  | PlatformId.ESPORTS;

export async function getPUUID(
  region: RiotAPITypes.LoLRegion,
  gameName: string,
  tagLine: string
) {
  const cluster = regionToCluster(region) as Cluster;

  const account = await RApi.account.getByRiotId({
    region: cluster,
    gameName,
    tagLine,
  });

  return account.puuid;
};

export async function getSummoner(
  puuid: string,
  region: RiotAPITypes.LoLRegion
) {
  return RApi.summoner.getByPUUID({
    region: region,
    puuid: puuid,
  });
}

export async function getRankedInfo(
  puuid: string,
  region: RiotAPITypes.LoLRegion
) {
  return RApi.league.getEntriesByPUUID({
    region: region,
    puuid: puuid,
  });
}
