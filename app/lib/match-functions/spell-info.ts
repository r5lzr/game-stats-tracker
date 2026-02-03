import { MatchInfo, PlayerParams } from "../definitions";
import { ddragon } from "../match-functions/ddragon";

export async function getSpellInfo(spellNumberId: number | undefined) {
  const spells = await ddragon.summonerSpells();

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
