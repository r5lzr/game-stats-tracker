import { ChampIcon, Username } from "../definitions";

export function getChampIcon(match: ChampIcon, params: Username) {
  const participant = match.info.participants.find(
    (player) => player.riotIdGameName === params.username
  );

  if (participant) {
    return participant.championName;
  }
}

export function getChampLevel(match: ChampIcon, params: Username) {
  const participant = match.info.participants.find(
    (player) => player.riotIdGameName === params.username
  );

  if (participant) {
    return participant.champLevel;
  }
}
