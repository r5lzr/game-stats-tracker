import { RiotAPI, PlatformId } from "@fightmegg/riot-api";

const RApi = new RiotAPI(process.env.RIOT_API_KEY as string, {
  cache: { cacheType: "local" },
});

export async function GET(request: { nextUrl: { searchParams: any } }) {
  const { searchParams } = request.nextUrl;
  const summonerId = searchParams.get("summonerId");
  const region = searchParams.get("region");

  if (!summonerId)
    return Response.json(
      {},
      { status: 400, statusText: "No summonerId provided" }
    );

  return Response.json(
    await RApi.summoner.getBySummonerId({ summonerId: summonerId, region })
  );
}
