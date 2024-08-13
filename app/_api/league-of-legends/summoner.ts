import { RiotAPI, PlatformId } from "@fightmegg/riot-api";
import { NextRequest } from "next/server";

const RApi = new RiotAPI(process.env.RIOT_API_KEY as string, {
  cache: { cacheType: "local" },
});

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const region = searchParams.get("region");
  const summonerId = searchParams.get("summonerId");

  const platformId =
    region === "euw1"
      ? PlatformId.EUW1
      : region === "na1"
      ? PlatformId.NA1
      : null;

  if (!platformId) {
    return Response.json({}, { status: 400, statusText: "No region provided" });
  }
  if (!summonerId)
    return Response.json(
      {},
      { status: 400, statusText: "No summonerId provided" }
    );

  return Response.json(
    await RApi.summoner.getBySummonerId({
      region: platformId,
      summonerId: summonerId,
    })
  );
}
