import { RiotAPI, PlatformId, regionToCluster } from "@fightmegg/riot-api";
import { NextRequest } from "next/server";

const RApi = new RiotAPI(process.env.RIOT_API_KEY as string, {
  cache: { cacheType: "local" },
});

export async function matches(
  username: string,
  tagLine: string,
  region: string
) {
  const platformId = regionToCluster(region);

  if (!platformId) {
    return null;
  }
  if (!username)
    return Response.json(
      {},
      { status: 400, statusText: "No username provided" }
    );
  if (!tagLine)
    return Response.json(
      {},
      { status: 400, statusText: "No tagLine provided" }
    );

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

  return Response.json(matches);
}
