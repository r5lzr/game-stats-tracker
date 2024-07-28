import { MatchInfo, PlayerParams } from "../definitions";

export function getOutcomeInfo(match: MatchInfo, params: PlayerParams) {
  let gameOutcome;

  const participant = match.info.participants.find(
    (player) => player.riotIdGameName === params.username
  );

  if (participant) {
    if (participant.gameEndedInEarlySurrender === true) {
      gameOutcome = "REMAKE";
    } else if (participant.win === true) {
      gameOutcome = "VICTORY";
    } else {
      gameOutcome = "DEFEAT";
    }
  }

  return gameOutcome;
}
