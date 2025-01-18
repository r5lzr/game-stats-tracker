import { PingingUtil, Username } from "../definitions";

export function getPingingInfo(match: PingingUtil, params: Username) {
  let visionPings;
  let pushPings;
  let dangerPings;
  let pathingPings;
  let assistPings;
  let missingPings;

  const participant = match.info.participants.find(
    (player) => player.riotIdGameName === params.username
  );

  if (participant) {
    visionPings = participant.enemyVisionPings;
    pushPings = participant.pushPings;
    dangerPings = participant.dangerPings;
    pathingPings = participant.onMyWayPings;
    assistPings = participant.assistMePings;
    missingPings = participant.enemyMissingPings;
  }

  return [
    visionPings,
    pushPings,
    dangerPings,
    pathingPings,
    assistPings,
    missingPings,
  ];
}
