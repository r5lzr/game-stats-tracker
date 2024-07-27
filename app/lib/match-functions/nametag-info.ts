import { MatchInfo, PlayerParams } from "../definitions";

export function getNameTagInfo(match: MatchInfo, params: PlayerParams) {
  const participant = match.info.participants.find(
    (player) => player.riotIdGameName === params.username
  );

  if (participant) {
    return [participant.riotIdGameName, participant.riotIdTagline];
  }
}
