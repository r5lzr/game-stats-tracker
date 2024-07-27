import { MatchInfo, PlayerParams } from "../definitions";

export function getChampIcon(match: MatchInfo, params: PlayerParams) {
  const participant = match.info.participants.find(
    (player) => player.riotIdGameName === params.username
  );

  if (participant) {
    return participant.championName;
  }
}

export function getChampLevel(match: MatchInfo, params: PlayerParams) {
  const participant = match.info.participants.find(
    (player) => player.riotIdGameName === params.username
  );

  if (participant) {
    return participant.champLevel;
  }
}
