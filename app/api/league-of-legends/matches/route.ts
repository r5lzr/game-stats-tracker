import { RiotAPI, PlatformId } from "@fightmegg/riot-api";
import { NextRequest } from "next/server";

const RApi = new RiotAPI(process.env.RIOT_API_KEY as string, {
  cache: { cacheType: "local" },
});

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const region = searchParams.get("region");
  const username = searchParams.get("username");
  const tagLine = searchParams.get("tagLine");

  const platformId =
    region === "euw1"
      ? PlatformId.EUROPE
      : region === "na1"
      ? PlatformId.AMERICAS
      : undefined;

  if (!platformId) {
    return Response.json({}, { status: 400, statusText: "No region provided" });
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
