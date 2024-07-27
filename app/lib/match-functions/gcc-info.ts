import { MatchInfo, PlayerParams } from "../definitions";

export function getGCCInfo(match: MatchInfo, params: PlayerParams) {
  let gold = null;
  let creepScore = null;
  let creepScorePerMin = null;
  let controlWards = null;

  const participant = match.info.participants.find(
    (player) => player.riotIdGameName === params.username
  );

  if (participant) {
    gold = participant.goldEarned;

    creepScore = participant.totalMinionsKilled;
    const minutes = Math.floor(match.info.gameDuration / 60);
    const seconds = match.info.gameDuration % 60;
    creepScorePerMin = parseFloat(
      (creepScore / (minutes + seconds / 60)).toFixed(1)
    );

    controlWards = participant.challenges.controlWardsPlaced;

    return [gold, creepScore, creepScorePerMin, controlWards];
  }
}
