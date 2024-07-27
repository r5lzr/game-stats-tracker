import { promises as fs } from "fs";
import { MatchInfo, PlayerParams } from "../definitions";

export async function getSpellInfo(spellNumberId: number | undefined) {
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

export function getSpellId1(match: MatchInfo, params: PlayerParams) {
  const participant = match.info.participants.find(
    (player) => player.riotIdGameName === params.username
  );

  if (participant) {
    return participant.summoner1Id;
  }
}

export function getSpellId2(match: MatchInfo, params: PlayerParams) {
  const participant = match.info.participants.find(
    (player) => player.riotIdGameName === params.username
  );

  if (participant) {
    return participant.summoner2Id;
  }
}
