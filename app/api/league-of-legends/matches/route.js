import { RiotAPI, PlatformId } from '@fightmegg/riot-api'

const RApi = new RiotAPI(process.env.RIOT_API_KEY, { cache: { cacheType: 'local' } })

export async function GET(request) {
    const { searchParams } = request.nextUrl

    console.log(searchParams)
    const region = searchParams.get('region')
    console.log(region)

    const username = searchParams.get('username')
    const tagLine = searchParams.get('tagLine')

    if (!region) return Response.json({}, { status: 400, statusText: 'No region provided' })
    if (!username) return Response.json({}, { status: 400, statusText: 'No username provided' })
    if (!tagLine) return Response.json({}, { status: 400, statusText: 'No tagLine provided' })

    const riotAccount = await RApi.account.getByRiotId({ region, gameName: username, tagLine })

    const matches = []
    for (const matchId of await RApi.matchV5.getIdsByPuuid({ cluster: region, puuid: riotAccount.puuid })) {
        matches.push(await RApi.matchV5.getMatchById({ cluster: region, matchId }))
    }

    return Response.json(matches)
}
