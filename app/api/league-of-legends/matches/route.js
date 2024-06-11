import { RiotAPI, PlatformId } from '@fightmegg/riot-api'

const RApi = new RiotAPI(process.env.RIOT_API_KEY, { cache: { cacheType: 'local' } })

export async function GET(request) {
    const { searchParams } = request.nextUrl
    const username = searchParams.get('username')
    const tagLine = searchParams.get('tagLine')

    if (!username) return Response.json({}, { status: 400, statusText: 'No username provided' })
    if (!tagLine) return Response.json({}, { status: 400, statusText: 'No tagLine provided' })

    const riotAccount = await RApi.account.getByRiotId({ gameName: username, tagLine, region: PlatformId.EUROPE })

    const matches = []
    for (const matchId of await RApi.matchV5.getIdsByPuuid({ puuid: riotAccount.puuid, cluster: PlatformId.EUROPE })) {
        matches.push(await RApi.matchV5.getMatchById({ matchId, cluster: PlatformId.EUROPE }))
    }

    return Response.json(matches)
}
