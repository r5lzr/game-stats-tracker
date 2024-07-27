import { promises as fs } from "fs";
import { MatchInfo, PlayerParams, runeInfo } from "../definitions";


export async function getRuneInfo() {
  const file = await fs.readFile(
    process.cwd() +
      "/app/dragontail-14.10.1/14.10.1/data/en_US/runesReforged.json",
    "utf8"
  );

  return JSON.parse(file);
}

export async function getRunePrimaryInfo(runeId: number | undefined) {
  const runeData = await getRuneInfo();

  for (const runeTree of runeData) {
    for (const slot of runeTree.slots) {
      const primaryRune = slot.runes.find(
        (primaryRune: runeInfo) => primaryRune.id === runeId
      );

      if (primaryRune) {
        return primaryRune.icon;
      }
    }
  }
}

export async function getRuneSecondaryInfo(runeId: number | undefined) {
  const runeData = await getRuneInfo();

  for (const rune of runeData) {
    if (rune.id === runeId) {
      return rune.icon;
    }
  }
}

export function getRuneId1(match: MatchInfo, params: PlayerParams) {
  const participant = match.info.participants.find(
    (player) => player.riotIdGameName === params.username
  );

  if (participant) {
    return participant.perks.styles[0].selections[0].perk;
  }
};

export function getRuneId2(match: MatchInfo, params: PlayerParams) {
  const participant = match.info.participants.find(
    (player) => player.riotIdGameName === params.username
  );

  if (participant) {
    return participant.perks.styles[1].style;
  }
};
