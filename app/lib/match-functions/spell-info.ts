import { MatchInfo, PlayerParams } from "../definitions";

export async function getSpellInfo(spellNumberId: number | undefined) {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/14.24.1/data/en_US/summoner.json"
  );

  const spells = await res.json();

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
