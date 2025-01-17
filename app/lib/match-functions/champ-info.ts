import { ChampIconUtil, Username } from "../definitions";

export function getChampIcon(match: ChampIconUtil, params: Username) {
  const participant = match.info.participants.find(
    (player) => player.riotIdGameName === params.username
  );

  if (participant) {
    return participant.championName;
  }
}

export function getChampLevel(match: ChampIconUtil, params: Username) {
  const participant = match.info.participants.find(
    (player) => player.riotIdGameName === params.username
  );

  if (participant) {
    return participant.champLevel;
  }
}
