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
        [RiotAPITypes.METHOD_KEY.LEAGUE.GET_ENTRIES_BY_SUMMONER]: 90000,
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
    })) {
      matches.push(
        await RApi.matchV5.getMatchById({ cluster: platformId, matchId })
      );
    }
  }

  return matches;
}

export async function getSummoner(
  summonerId: string,
  region: RiotAPITypes.LoLRegion
) {
  return RApi.summoner.getBySummonerId({
    region: region,
    summonerId: summonerId,
  });
}

export async function getRankedInfo(
  summonerId: string,
  region: RiotAPITypes.LoLRegion
) {
  return RApi.league.getEntriesBySummonerId({
    region: region,
    summonerId: summonerId,
  });
}
