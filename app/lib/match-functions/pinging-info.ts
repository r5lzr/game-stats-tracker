import { MatchInfo, PlayerParams } from "../definitions";

export function getPingingInfo(match: MatchInfo, params: PlayerParams) {
  let dangerPings;
  let pathingPings;
  let assistPings;
  let missingPings;

  const participant = match.info.participants.find(
    (player) => player.riotIdGameName === params.username
  );

  if (participant) {
    dangerPings = participant.dangerPings;
    pathingPings = participant.onMyWayPings;
    assistPings = participant.assistMePings;
    missingPings = participant.enemyMissingPings;
  }
  console.log([dangerPings, pathingPings, assistPings, missingPings]);
  return [dangerPings, pathingPings, assistPings, missingPings];
}
