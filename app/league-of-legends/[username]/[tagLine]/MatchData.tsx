import { MatchInfo } from "./page";
import { PlayerParams } from "./page";
import { promises as fs } from "fs";
import { MatchHistory } from "./MatchHistory";

interface QueueInfo {
  queueId: number;
  description: string;
}

let queues: QueueInfo[];
async function getQueueInfo(queueId: number) {
  if (!queues) {
    const res = await fetch(
      "https://static.developer.riotgames.com/docs/lol/queues.json"
    );

    if (!res.ok) throw new Error("Failed to fetch queue data");

    queues = await res.json();
  }

  let queueOutcome: QueueInfo | undefined = queues.find(
    (queue) => queue.queueId === queueId
  );

  if (!queueOutcome) {
    return undefined;
  }

  switch (queueOutcome.queueId) {
    case 420:
      queueOutcome.description = "Ranked Solo";
      break;
    case 440:
      queueOutcome.description = "Ranked Flex";
      break;
    case 490:
      queueOutcome.description = "Quick Play";
      break;
    case 400:
      queueOutcome.description = "Draft Pick";
      break;
    case 830:
      queueOutcome.description = "AI Intro";
      break;
    case 840:
      queueOutcome.description = "AI Beginner";
      break;
    case 850:
      queueOutcome.description = "AI Intermediate";
      break;
    case 450:
      queueOutcome.description = "ARAM";
      break;
    case 700:
      queueOutcome.description = "Clash";
      break;
    case 720:
      queueOutcome.description = "ARAM Clash";
      break;
    case 1710:
      queueOutcome.description = "Arena";
      break;
    default:
      queueOutcome.description = "Unknown";
      break;
  }

  return queueOutcome;
}

async function getSpellInfo(spellNumberId: number | undefined) {
  const file = await fs.readFile(
    process.cwd() + "/app/dragontail-14.10.1/14.10.1/data/en_US/summoner.json",
    "utf8"
  );
  const spells = JSON.parse(file);

  for (const summonerSpell in spells.data) {
    const spellKey = parseInt(spells.data[summonerSpell].key);

    if (spellKey === spellNumberId) {
      return spells.data[summonerSpell].id;
    }
  }
}

function getSpellId1(match: MatchInfo, params: PlayerParams) {
  for (const item of match.info.participants) {
    if (item.riotIdGameName === params.username) {
      return item.summoner1Id;
    }
  }
}

function getSpellId2(match: MatchInfo, params: PlayerParams) {
  for (const item of match.info.participants) {
    if (item.riotIdGameName === params.username) {
      return item.summoner2Id;
    }
  }
}

export async function MatchData({
  matches,
  params,
}: {
  matches: MatchInfo[];
  params: PlayerParams;
}) {
  const matchDataList: any = await Promise.all(
    matches.map(async (match) => {
      const [queueInfo, spellInfo1, spellInfo2] = await Promise.all([
        getQueueInfo(match.info.queueId),
        getSpellInfo(getSpellId1(match, params)),
        getSpellInfo(getSpellId2(match, params)),
      ]);

      return { queueInfo, spellInfo1, spellInfo2 };
    })
  );

  // console.log(matchDataList);

  return (
    <>
      <MatchHistory matchDataList={matchDataList} />
    </>
  );
}

// remember to include summoner id and tagline in match data
